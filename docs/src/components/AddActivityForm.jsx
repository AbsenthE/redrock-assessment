// src/AddActivityForm.js
import React, { useState } from 'react';
import './AddActivityForm.css';
import arrowImg from '../assets/arrow.png';

export default function AddActivityForm({ initialData, onSave, onClose }) {
    // 第一步输入标题，第二步输入内容
    const [step, setStep] = useState(1);

    // 标题输入值，编辑时从 initialData 中获取初始值
    const [title, setTitle] = useState(initialData?.name || '');

    // 内容输入值，编辑时从 initialData 中获取初始值
    const [content, setContent] = useState(initialData?.location || '');


    // 处理下一步点击，如果第一步标题非空继续下一步
    const handleNext = () => {
        if (step === 1 && title.trim()) {
            setStep(2);
        } else if (step === 2) {
            onSave({
                ...initialData,// 合并初始数据并且更新标题和内容
                name: title,
                location: content || ' ',
            });
        }
    };

    return (

        // 全屏页面
        <div className="form-overlay">
            <div className="form-container">
                {/* 返回按钮 */}
                <div className="form-header">
                    <button className="back-arrow" onClick={onClose}>‹</button>
                </div>

                {/* 表单内容 */}
                <div className="form-body">
                    {step === 1 ? (
                        <>
                            {/* 第一步输入标题 */}
                            <h2 className="form-title">为你的行程添加<br />一个标题</h2>
                            <input
                                type="text"
                                className="form-input"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="输入标题..."
                                autoFocus
                            />
                        </>
                    ) : (
                        <>
                            {/* 第二步输入内容 */}
                            <h2 className="form-title">为你的行程添加<br />具体内容</h2>
                            <input
                                type="text"
                                className="form-input"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder="添加备注、教室..."
                                autoFocus
                            />
                        </>
                    )}
                    {/* 箭头按钮 */}
                    <img
                        src={arrowImg}
                        alt="下一步"
                        className="arrow-img"
                        onClick={handleNext}
                    />
                </div>
            </div>
        </div>
    );
}