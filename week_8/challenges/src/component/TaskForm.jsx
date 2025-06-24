// src/components/TaskForm.jsx
import React, { useRef, useContext } from 'react';
import TaskContext from '../context/TaskContext';
import { ACTIONS } from '../reducer/taskReducer';

function TaskForm() {
  const inputRef = useRef();
  const { dispatch } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value.trim();

    if (value.length > 0) {
      dispatch({ type: ACTIONS.ADD_TASK, payload: value });
      inputRef.current.value = ''; // Réinitialiser le champ
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        ref={inputRef}
        placeholder="Add a task..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TaskForm;
