// utils/gridHelpers.js

// 根据鼠标 / 触摸点击坐标，计算对应的课表格子（星期几 + 第几节）
import { weekDays } from '../mock/data';

export function getCellFromPoint(gridElement, clientX, clientY) {
    //  如果网格不存在，直接返回null
    if (!gridElement) return null;
    // 获取网格容器相对于视口的位置和尺寸
    const rect = gridElement.getBoundingClientRect();
    // 计算点击位置相对于网格左上角的偏移（x 直接减左边界，y 先减去顶部日期行高度 35px）
    const x = clientX - rect.left;
    const y = clientY - rect.top - 35; // 减去顶部日期行高度
    //y为负说明点击不在课程区域
    if (y < 0) return null;
    // 计算每一行高度，每一列宽度
    const colWidth = (rect.width - 24) / 7;
    const rowHeight = (rect.height - 35) / 12;
    // 计算列索引（从 0 开始），并转换为 1~7（第 2 列对应周一，第 8 列对应周日）
    const col = Math.floor((x - 24) / colWidth) + 1;
    // 计算行索引（从 0 开始），并转换为 1~12（第 1 行对应第 1 节）
    const row = Math.floor(y / rowHeight) + 1;
    if (col < 1 || col > 7 || row < 1 || row > 12) return null;
    // 返回对应课程
    return { day: weekDays[col - 1], start: row };
}