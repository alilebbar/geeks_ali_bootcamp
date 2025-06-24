
// src/context/TaskProvider.jsx
import React, { useReducer } from 'react';
import TaskContext from './TaskContext';
import taskReducer from '../reducer/taskReducer';

// État initial global
const initialState = {
  tasks: [],        // tableau de toutes les tâches
  filter: 'all',    // 'all', 'completed', 'active'
};

function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;
