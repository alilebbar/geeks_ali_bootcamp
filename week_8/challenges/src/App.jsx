// src/App.jsx
import React from 'react';
import TaskProvider from './context/TaskProvider';
import TaskForm from './component/TaskForm';
import TaskList from './component/TaskList';
import TaskFilter from './component/FilterButtons';

function App() {
  return (
    <TaskProvider>
      <div className="app-container">
        <h1>📝 Task Manager</h1>
        <TaskForm />
        <TaskFilter />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
