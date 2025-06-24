// src/components/TaskFilter.jsx
import React, { useContext } from 'react';
import TaskContext from '../context/TaskContext';
import { ACTIONS } from '../reducer/taskReducer';

function TaskFilter() {
  const { state, dispatch } = useContext(TaskContext);
  const currentFilter = state.filter;

  const handleFilter = (filterType) => {
    dispatch({
      type: ACTIONS.FILTER_TASKS,
      payload: filterType,
    });
  };

  return (
    <div className="task-filter">
      <button
        onClick={() => handleFilter('all')}
        className={currentFilter === 'all' ? 'active' : ''}
      >
        All
      </button>
      <button
        onClick={() => handleFilter('active')}
        className={currentFilter === 'active' ? 'active' : ''}
      >
        Active
      </button>
      <button
        onClick={() => handleFilter('completed')}
        className={currentFilter === 'completed' ? 'active' : ''}
      >
        Completed
      </button>
    </div>
  );
}

export default TaskFilter;
