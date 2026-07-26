// src/utils/color.js
export const getCourseColor = (start, isDarkMode = false) => {
    if (isDarkMode) {
        // 亮色主题
        if (start >= 1 && start <= 4) return 'rgb(148, 158, 53)';
        if (start >= 5 && start <= 8) return 'rgb(122, 145, 114)';
        if (start >= 9 && start <= 12) return 'rgb(68, 109, 71)';
        return '#888';
    } else {
        // 暗色主题
        if (start >= 1 && start <= 4) return '#c1cf93';
        if (start >= 5 && start <= 8) return '#c5e4d7';
        if (start >= 9 && start <= 12) return '#b5edb9';
        return '#555';
    }
};