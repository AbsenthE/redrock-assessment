// components/Header.jsx

// 显示周次,日间夜间模式切换,回到本周按钮
import React from 'react';
import './Header.css';
import sunIcon from '../assets/sun.png';
import moonIcon from '../assets/moon.png';

export default function Header({ currentWeek, onBack, isDarkMode, toggleTheme }) {
    return (
        <div className="top-header">
            {/* 左侧 */}
            <div className="header-left">
                <h1 className="header-title">第 {currentWeek} 周</h1>
                <img
                    src={isDarkMode ? moonIcon : sunIcon}
                    alt={isDarkMode ? '夜间模式' : '日间模式'}
                    className="theme-icon-img"
                    onClick={toggleTheme}
                />
            </div>
            {/* 右侧 */}
            <button
                className={`back-btn ${currentWeek === 15 ? 'back-btn-hidden' : ''}`}
                onClick={onBack}
            >
                回到本周
            </button>
        </div>
    );
}