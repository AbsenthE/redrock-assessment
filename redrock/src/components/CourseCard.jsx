// components/CourseCard.jsx

// 课程卡片组件，显示课程名称和地点，并处理点击事件
import React, { useRef } from 'react';
import './CourseCard.css';

export default function CourseCard({ course, gridColumn, onClick, bgColor }) {
    //    用于触发点击动画card-pressed类
    const cardRef = useRef(null);


    // 卡片点击事件处理函数，触发点击动画并调用传入的 onClick 回调
    const handleClick = (e) => {
        // 阻止事件冒泡，避免触发父元素的点击事件
        e.stopPropagation();
        // 获取dom节点并且触发动画
        const card = cardRef.current;
        // 重置动画，先移除类再添加类，确保每次点击都能触发动画
        card.classList.remove('card-pressed');
        void card.offsetWidth;
        // 添加类触发动画
        card.classList.add('card-pressed');
        // 移除
        setTimeout(() => card.classList.remove('card-pressed'), 200);
        // 调用传入的 onClick 回调，传递课程数据和事件对象
        onClick(course, e);
    };

    return (
        <div
            ref={cardRef}
            // 根据课程类型添加不同的类名，设置网格位置和背景色
            className={`course-card ${course.isActivity ? 'activity-card' : ''}`}
            style={{
                // 设置网格列和行，行根据课程的开始时间和持续时间计算
                gridColumn: gridColumn,
                gridRow: `${course.start + 1} / ${course.start + course.duration + 1}`,
                backgroundColor: bgColor,   // 使用传入的背景色
            }}
            // 绑定点击事件处理函数
            onClick={handleClick}
        >
            {/* 课程名称 */}
            <div className="course-name">{course.name}</div>
            {/* 课程地点 */}
            <div className="course-location">{course.location}</div>
        </div>
    );
}