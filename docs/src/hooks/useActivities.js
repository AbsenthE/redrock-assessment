// useActivies.js

// 自定义 Hook：管理用户自定义活动数据（增删改 + localStorage 持久化）
// 从 localStorage 读取/保存用户添加的自定义课程（活动）
// 提供添加、更新、删除方法
// 所有活动自动标记 isActivity: true，以便与固定课程区分
import { useState, useEffect } from 'react';

export function useActivities() {
    /**
    * 初始化状态：从 localStorage 读取数据，若无则默认为空数组
    * 使用惰性初始化函数，仅在首次渲染时执行
    */
    const [userActivities, setUserActivities] = useState(() => {
        const saved = localStorage.getItem('userActivities');
        return saved ? JSON.parse(saved) : [];
    });

    // 每当 userActivities 变化时，自动同步到 localStorage
    useEffect(() => {
        localStorage.setItem('userActivities', JSON.stringify(userActivities));
    }, [userActivities]);

    const addActivity = (activity) => {
        const newActivity = { ...activity, id: Date.now(), isActivity: true };
        setUserActivities(prev => [...prev, newActivity]);
    };

    // 更新已有活动
    const updateActivity = (id, data) => {
        setUserActivities(prev =>
            prev.map(a => (a.id === id ? { ...data, id, isActivity: true } : a))
        );
    };

    const deleteActivity = (id) => {
        setUserActivities(prev => prev.filter(a => a.id !== id));
    };

    return { userActivities, addActivity, updateActivity, deleteActivity };
}