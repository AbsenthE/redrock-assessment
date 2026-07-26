import React, { useRef } from 'react';
import './Grid.css';
import CourseCard from './CourseCard';
import { getCellFromPoint } from '../utils/gridHelpers';
import { getCourseColor } from '../utils/color';

export default function Grid({
    schedules,
    weekDays,
    weekDates,
    periods,
    loading,
    onCourseClick,
    onCellClick,
    onSwipeLeft,
    onSwipeRight,
    isDarkMode,
}) {
    const gridRef = useRef(null);
    const touchStart = useRef({ x: 0, y: 0 });
    const touchMoved = useRef(false);
    const swipeHandled = useRef(false);

    // ----- 触摸事件（滑动切换）-----
    const handleTouchStart = (e) => {
        const touch = e.touches[0];
        touchStart.current = { x: touch.clientX, y: touch.clientY };
        touchMoved.current = false;
        swipeHandled.current = false;
    };

    const handleTouchMove = (e) => {
        if (swipeHandled.current) return;
        const touch = e.touches[0];
        const dx = touch.clientX - touchStart.current.x;
        const dy = touch.clientY - touchStart.current.y;
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) {
            touchMoved.current = true;
        }
    };

    const handleTouchEnd = (e) => {
        const touch = e.changedTouches[0];
        const dx = touch.clientX - touchStart.current.x;
        const dy = touch.clientY - touchStart.current.y;
        const absDx = Math.abs(dx);
        const absDy = Math.abs(dy);

        // 1. 处理滑动切换周次
        if (touchMoved.current && absDx > 30) {
            swipeHandled.current = true;
            if (dx < 0) onSwipeLeft();
            else onSwipeRight();
            return;
        }

        // 2. 处理点击（且不是滑动）
        if (!touchMoved.current && absDx < 10 && absDy < 10) {
            // 检查是否点击在课程卡片上（阻止触发添加表单）
            const element = document.elementFromPoint(touch.clientX, touch.clientY);
            if (element && element.closest('.course-card')) {
                return; // 卡片点击由自身的 onClick 处理
            }
            const cell = getCellFromPoint(gridRef.current, touch.clientX, touch.clientY);
            if (cell) onCellClick(cell);
        }
    };

    // ----- 鼠标点击空白区域（PC）-----
    const handleGridClick = (e) => {
        // 如果点击的是卡片，则忽略（卡片有自己的 onClick）
        if (e.target.closest('.course-card')) return;
        const cell = getCellFromPoint(gridRef.current, e.clientX, e.clientY);
        if (cell) onCellClick(cell);
    };

    // ----- 渲染 -----
    return (
        <div
            className="grid-wrapper"
            ref={gridRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onClick={handleGridClick}
        >
            {loading ? (
                <div className="loading-text">加载课表中...</div>
            ) : (
                <div className="grid-table">
                    {/* 时间轴 */}
                    <div className="time-axis-col">
                        <div className="month-cell" style={{ gridRow: 1 }}>7月</div>
                        {periods.map(p => (
                            <div key={p} className="time-cell" style={{ gridRow: p + 1 }}>{p}</div>
                        ))}
                    </div>

                    {/* 日期头 */}
                    <div className="date-header-row">
                        {weekDays.map((day, idx) => (
                            <div key={day} className="date-cell" style={{ gridColumn: idx + 2, gridRow: 1 }}>
                                <span className="week-day">{day}</span>
                                <span className="week-date">{weekDates[idx]}</span>
                            </div>
                        ))}
                    </div>

                    {/* 课程卡片 */}
                    {weekDays.map(day => {
                        const col = weekDays.indexOf(day) + 2;
                        const daySchedules = schedules.filter(c => c.day === day);
                        return daySchedules.map(course => {
                            const bgColor = course.isActivity
                                ? course.color
                                : getCourseColor(course.start, isDarkMode);

                            return (
                                <CourseCard
                                    key={course.id}
                                    course={course}
                                    gridColumn={col}
                                    onClick={onCourseClick}
                                    bgColor={bgColor}
                                />
                            );
                        });
                    })}
                </div>
            )}
        </div>
    );
}