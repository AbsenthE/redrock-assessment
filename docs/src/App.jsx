// App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import { scheduleMap, weekDays, weekDatesMap } from './mock/data';
import { useActivities } from './hooks/useActivities';
import { useTheme } from './hooks/useTheme';
import Header from './components/Header';
import Grid from './components/Grid';
import Sheet from './components/Sheet';
import AddActivityForm from './components/AddActivityForm';
import paperTexture from './assets/paper-texture.png';

function App() {
  const [currentWeek, setCurrentWeek] = useState(15);
  // 模拟加载状态 
  const [loading, setLoading] = useState(true);
  // 自定义活动 Hook（增删改 + localStorage 持久化）
  const { userActivities, addActivity, updateActivity, deleteActivity } = useActivities();
  // 夜间模式/日间模式
  const { isDarkMode, toggleTheme } = useTheme();
  //弹窗
  const [showForm, setShowForm] = useState(false);
  const [editingActivity, setEditingActivity] = useState(null);
  //底部弹窗
  const [showSheet, setShowSheet] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // 模拟加载
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 20);
    return () => clearTimeout(timer);
  }, [currentWeek]);

  // 周次切换
  const goToCurrentWeek = () => setCurrentWeek(15);
  const handleSwipeLeft = () => setCurrentWeek(prev => Math.min(16, prev + 1));
  const handleSwipeRight = () => setCurrentWeek(prev => Math.max(14, prev - 1));

  // 当前周课程
  const fixedSchedules = scheduleMap[currentWeek] || [];
  // 当前周自定义活动
  const userWeekActivities = userActivities.filter(a => a.week === currentWeek);
  // 课表
  const schedules = [...fixedSchedules, ...userWeekActivities];
  // 当前周日期
  const weekDates = weekDatesMap[currentWeek] || [];
  // 1-12节课
  const periods = Array.from({ length: 12 }, (_, i) => i + 1);

  // 点击空白格子打开新增表单
  const handleCellClick = (cell) => {
    setEditingActivity({
      day: cell.day,
      start: cell.start,
      duration: 1,
      isActivity: true,
      color: '#aebfc9',
      name: '',
      location: '',
    });
    setShowForm(true);
  };

  // 点击课程卡片显示详情
  const handleCourseClick = (course, e) => {
    setSelectedCourse(course);
    setShowSheet(true);
  };

  // 保存
  const handleSaveActivity = (data) => {
    // 补上当前周
    const dataWithWeek = { ...data, week: currentWeek };
    if (data.id) {
      updateActivity(data.id, dataWithWeek);
    } else {
      addActivity(dataWithWeek);
    }
    setShowForm(false);
  };

  // 点击修改并传入之前数据
  const handleEditFromSheet = (course) => {
    setEditingActivity({ ...course });
    setShowForm(true);
    setShowSheet(false);
  };

  // 点击删除，删除活动
  const handleDeleteFromSheet = (id) => {
    deleteActivity(id);
    setShowSheet(false);
  };

  // 渲染
  return (
    <div className="app-container">
      {/* 顶部 */}
      <Header
        currentWeek={currentWeek}
        onBack={goToCurrentWeek}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />

      {/* 课表网格 */}
      <Grid
        schedules={schedules}
        weekDays={weekDays}
        weekDates={weekDates}
        periods={periods}
        loading={loading}
        onCourseClick={handleCourseClick}
        onCellClick={handleCellClick}
        onSwipeLeft={handleSwipeLeft}
        onSwipeRight={handleSwipeRight}
        isDarkMode={isDarkMode}
      />

      {/* 新增活动表单 */}
      {showForm && (
        <AddActivityForm
          initialData={editingActivity}
          onSave={handleSaveActivity}
          onClose={() => setShowForm(false)}
        />
      )}

      {/* 课程详情 */}
      {showSheet && (
        <Sheet
          course={selectedCourse}
          onClose={() => setShowSheet(false)}
          onEdit={handleEditFromSheet}
          onDelete={handleDeleteFromSheet}
        />
      )}

      {/* 纸纹 */}
      <div className="paper-texture" style={{ backgroundImage: `url(${paperTexture})` }} />
    </div>
  );
}

export default App;