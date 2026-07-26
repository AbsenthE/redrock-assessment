// Sheet.jsx

// 底部详情弹窗
import React from 'react';
import './Sheet.css';

export default function Sheet({ course, onClose, onEdit, onDelete }) {
    //    课程数据为空时不渲染内容
    if (!course) return null;

    return (
        // 点击遮罩（非弹窗区域）关闭弹窗
        <div className="sheet-overlay" onClick={onClose}>
            <div className="sheet-backdrop" />
            {/* 底部面板，阻止点击弹窗时关闭 */}
            <div className="sheet-panel" onClick={(e) => e.stopPropagation()}>
                <div className="sheet-content">
                    {/* 标题行 */}
                    <div className="sheet-title-row">
                        <h2 className="sheet-course-name">{course.name}</h2>
                        {course.isActivity && (
                            <div className="sheet-actions">
                                <button className="sheet-edit-btn" onClick={() => onEdit(course)}>
                                    修改
                                </button>
                                <button className="sheet-delete-btn" onClick={() => onDelete(course.id)}>
                                    删除
                                </button>
                            </div>
                        )}
                    </div>

                    {/* 详情内容 */}
                    {course.isActivity ? (
                        // 自定义活动卡片显示标题和描述
                        <div className="sheet-detail-row">
                            <span className="sheet-value">
                                {course.description || course.location || '暂无详细内容'}
                            </span>
                        </div>
                    ) : (
                        // 课程卡片显示时间地点...
                        <>
                            <div className="sheet-detail-row">
                                <span className="sheet-label">时间</span>
                                <span className="sheet-value">{course.time || '未设定'}</span>
                            </div>
                            <div className="sheet-detail-row">
                                <span className="sheet-label">周期</span>
                                <span className="sheet-value">{course.cycle || '未设定'}</span>
                            </div>
                            <div className="sheet-detail-row">
                                <span className="sheet-label">类型</span>
                                <span className="sheet-value">{course.type || '未设定'}</span>
                            </div>
                            <div className="sheet-detail-row">
                                <span className="sheet-label">地点</span>
                                <span className="sheet-value">{course.location || '未设定'}</span>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}