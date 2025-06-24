// src/components/TaskItem.jsx
import React, { useContext, useRef, useState } from 'react';
import TaskContext from '../context/TaskContext';
import { ACTIONS } from '../reducer/taskReducer';

function TaskItem({ task }) {
  const { dispatch } = useContext(TaskContext);
  const editRef = useRef();
  const [isEditing, setIsEditing] = useState(false);

  const handleToggle = () => {
    dispatch({ type: ACTIONS.TOGGLE_TASK, payload: task.id });
  };

  const handleDelete = () => {
    dispatch({ type: ACTIONS.DELETE_TASK, payload: task.id });
  };

  const handleEditClick = () => {
    setIsEditing(true);
    // Pré-remplir l’input avec le texte actuel
    editRef.current.value = task.text;
    editRef.current.focus();
  };

  const handleSave = () => {
    const newText = editRef.current.value.trim();
    if (newText.length) {
      dispatch({
        type: ACTIONS.EDIT_TASK,
        payload: { id: task.id, text: newText },
      });
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
      />

      {isEditing ? (
        <>
          <input
            type="text"
            ref={editRef}
            defaultValue={task.text}
            className="edit-input"
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <span
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
            }}
          >
            {task.text}
          </span>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </li>
  );
}

export default TaskItem;
