// hooks/useTheme.js
// 自定义 Hook，管理应用主题模式，日间夜间
import { useState, useEffect } from 'react';

export function useTheme() {

    /**
     * 初始化主题状态：从 localStorage 读取，若无则默认为亮色（false）
     * 使用惰性初始化，仅在首次渲染时执行
     */
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const saved = localStorage.getItem('darkMode');
        return saved ? JSON.parse(saved) : false;
    });


    /**
    * 当 isDarkMode 变化时，同步更新 body 的类名
    * - 暗色模式：添加 'dark-mode' 类
    * - 亮色模式：移除 'dark-mode' 类（置为空字符串）
    * 
    * 该副作用依赖于 isDarkMode，每次切换都会触发 DOM 更新
    */
    useEffect(() => {
        document.body.className = isDarkMode ? 'dark-mode' : '';
    }, [isDarkMode]);

    /**
    * 切换主题模式
    * - 取反当前状态
    * - 立即保存新状态到 localStorage（持久化）
    * - 更新 React 状态，触发重新渲染和副作用
    */

    const toggleTheme = () => {
        setIsDarkMode(prev => {
            const next = !prev;
            localStorage.setItem('darkMode', JSON.stringify(next));
            return next;
        });
    };
    //返回当前状态
    return { isDarkMode, toggleTheme };
} 