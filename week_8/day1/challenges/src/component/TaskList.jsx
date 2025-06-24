// src/components/TaskList.jsx
import React, { useContext } from 'react';
import TaskContext from '../context/TaskContext';
import TaskItem from './TaskItem';

function TaskList() {
  const { state } = useContext(TaskContext);
  const { tasks, filter } = state;

  // Appliquer le filtre sélectionné
  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true; // 'all'
  });

  return (
    <ul className="task-list">
      {filteredTasks.length ? (
        filteredTasks.map(task => <TaskItem key={task.id} task={task} />)
      ) : (
        <p>No tasks to display.</p>
      )}
    </ul>
  );
}

export default TaskList;
