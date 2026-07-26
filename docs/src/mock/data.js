// src/mock/data.js
export const weekDays = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];

export const weekDatesMap = {
    14: ['1日', '2日', '3日', '4日', '5日', '6日', '7日'],
    15: ['8日', '9日', '10日', '11日', '12日', '13日', '14日'],
    16: ['15日', '16日', '17日', '18日', '19日', '20日', '21日'],
};

const week15 = [
    { id: 1, day: '周一', start: 3, duration: 2, name: '高等数学A(下)', location: '2416', cycle: '1-16周', type: '必修', time: '10:00~11:40' },
    { id: 2, day: '周一', start: 5, duration: 2, name: '线性代数', location: '9314', cycle: '1-16周', type: '必修', time: '14:00~15:40' },
    { id: 3, day: '周一', start: 9, duration: 2, name: '面向对象程序设计', location: 'B401/B402', cycle: '1-16周', type: '选修', time: '19:00~20:40' },
    { id: 4, day: '周二', start: 1, duration: 2, name: '通用学术英语', location: '2305', cycle: '1-16周', type: '必修', time: '8:00~9:40' },
    { id: 5, day: '周二', start: 3, duration: 2, name: '大学生心理健康', location: '2202', cycle: '1-16周', type: '必修', time: '10:00~11:40' },
    { id: 6, day: '周二', start: 5, duration: 2, name: '高等数学A(下)', location: '2415', cycle: '1-16周', type: '必修', time: '14:00~15:40' },
    { id: 7, day: '周二', start: 9, duration: 2, name: '社会主义发展简史', location: '3101', cycle: '1-10周', type: '选修', time: '19:00~20:40' },
    { id: 8, day: '周三', start: 3, duration: 2, name: '高等数学A(下)', location: '2415', cycle: '1-16周', type: '必修', time: '10:00~11:40' },
    { id: 9, day: '周四', start: 1, duration: 2, name: '通用学术英语', location: '2305', cycle: '1-16周', type: '必修', time: '8:00~9:40' },
    { id: 10, day: '周四', start: 5, duration: 2, name: '线性代数', location: '9314', cycle: '1-16周', type: '必修', time: '14:00~15:40' },
    { id: 11, day: '周五', start: 1, duration: 2, name: '思想道德与法制', location: '2308', cycle: '1-16周', type: '必修', time: '8:00~9:40' },
    { id: 12, day: '周五', start: 5, duration: 2, name: '大学体育1', location: '风华运动场02', cycle: '1-16周', type: '必修', time: '14:00~15:40' },
    { id: 13, day: '周五', start: 7, duration: 2, name: '高等数学A(下)', location: '2415', cycle: '1-16周', type: '必修', time: '16:00~17:40' },
];

const week14 = [
    { id: 1, day: '周一', start: 3, duration: 2, name: '高等数学A(下)', location: '2416', cycle: '1-16周', type: '必修', time: '10:00~11:40' },
    { id: 2, day: '周一', start: 9, duration: 2, name: '面向对象程序设计', location: 'B401/B402', cycle: '1-16周', type: '选修', time: '19:00~20:40' },
    { id: 3, day: '周二', start: 3, duration: 2, name: '大学生心理健康', location: '2202', cycle: '1-16周', type: '必修', time: '10:00~11:40' },
    { id: 4, day: '周二', start: 5, duration: 2, name: '高等数学A(下)', location: '2415', cycle: '1-16周', type: '必修', time: '14:00~15:40' },
    { id: 5, day: '周二', start: 9, duration: 2, name: '社会主义发展简史', location: '3101', cycle: '1-10周', type: '选修', time: '19:00~20:40' },
    { id: 6, day: '周三', start: 3, duration: 2, name: '高等数学A(下)', location: '2415', cycle: '1-16周', type: '必修', time: '10:00~11:40' },
    { id: 7, day: '周四', start: 1, duration: 2, name: '通用学术英语', location: '2305', cycle: '1-16周', type: '必修', time: '8:00~9:40' },
    { id: 8, day: '周四', start: 5, duration: 2, name: '线性代数', location: '9314', cycle: '1-16周', type: '必修', time: '14:00~15:40' },
    { id: 9, day: '周五', start: 7, duration: 2, name: '高等数学A(下)', location: '2415', cycle: '1-16周', type: '必修', time: '16:00~17:40' },
];

const week16 = [
    { id: 1, day: '周二', start: 1, duration: 2, name: '通用学术英语', location: '2305', cycle: '1-16周', type: '必修', time: '8:00~9:40' },
    { id: 2, day: '周五', start: 1, duration: 2, name: '思想道德与法制', location: '2308', cycle: '1-16周', type: '必修', time: '8:00~9:40' },
    { id: 3, day: '周一', start: 3, duration: 2, name: '高等数学A(下)', location: '2416', cycle: '1-16周', type: '必修', time: '10:00~11:40' },
    { id: 4, day: '周二', start: 3, duration: 2, name: '大学生心理健康', location: '2202', cycle: '1-16周', type: '必修', time: '10:00~11:40' },
    { id: 5, day: '周三', start: 3, duration: 2, name: '高等数学A(下)', location: '2415', cycle: '1-16周', type: '必修', time: '10:00~11:40' },
    { id: 6, day: '周一', start: 5, duration: 2, name: '线性代数', location: '9314', cycle: '1-16周', type: '必修', time: '14:00~15:40' },
    { id: 7, day: '周二', start: 5, duration: 2, name: '高等数学A(下)', location: '2415', cycle: '1-16周', type: '必修', time: '14:00~15:40' },
    { id: 8, day: '周五', start: 7, duration: 2, name: '高等数学A(下)', location: '2415', cycle: '1-16周', type: '必修', time: '16:00~17:40' },


];

export const scheduleMap = {
    14: week14,
    15: week15,
    16: week16,
};