import { useSelector, useDispatch } from "react-redux";
import { selectTasksByCategory } from "../features/tasksAndCategoriesSelector";
import {
  toggleTaskComplete,
  addTask,
  removeTask,
  editTask,
} from "../features/tasksSlice";
import { useState, useCallback, use, useEffect } from "react";

const TasksList = ({ idCategory }) => {
  const tasks = useSelector(selectTasksByCategory(idCategory));
  const dispatch = useDispatch();

  const [taksForm, setTaksForm] = useState({
    title: "",
    description: "",
    completed: false,
  });
  const [viewForm, setViewForm] = useState({ show: false, addOrEdit: false });
  const [idTask, setIdTask] = useState(null);

  useEffect(() => {
    console.log(idTask);
  }, [idTask]);

  const selectedTask = tasks.find((task) => task.id === idTask); // 👈 Nouvelle ligne

  const showAddToogle = (e) => {
    e.preventDefault();
    setTaksForm({
      title: "",
      description: "",
      completed: false,
    });
    setViewForm({ show: true, addOrEdit: true });
  };

  const showEditToogle = (e) => {
    e.preventDefault();
    if (!selectedTask) return;
    setTaksForm({
      title: selectedTask.title,
      description: selectedTask.description,
      completed: selectedTask.completed,
    });
    setViewForm({ show: true, addOrEdit: false });
  };

  const handleAddTask = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(addTask({ ...taksForm, categoryId: idCategory }));
      setTaksForm({
        title: "",
        description: "",
        completed: false,
      });
      setViewForm({ show: false, addOrEdit: false });
    },
    [dispatch, idCategory, taksForm]
  );

  const handleEditTask = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(editTask({ ...taksForm, id: idTask, categoryId: idCategory }));
      setTaksForm({
        title: "",
        description: "",
        completed: false,
      });
      setViewForm({ show: false, addOrEdit: false });
    },
    [dispatch, idCategory, taksForm, idTask]
  );

  const handleRemoveTask = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(removeTask({ id: idTask }));
    },
    [dispatch, idTask]
  );

  return (
    <>
      {idCategory ? (
        <>
          <button onClick={showAddToogle}>Add Task</button>
          <button onClick={handleRemoveTask} disabled={idTask === null}>
            Remove Task
          </button>
          <button onClick={showEditToogle} disabled={idTask === null}>
            Edit Task
          </button>

          {viewForm.show ? (
            <div>
              <form
                onSubmit={viewForm.addOrEdit ? handleAddTask : handleEditTask}
              >
                <input
                  type="text"
                  placeholder="Title"
                  value={taksForm.title}
                  onChange={(e) =>
                    setTaksForm({ ...taksForm, title: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Description"
                  value={taksForm.description}
                  onChange={(e) =>
                    setTaksForm({ ...taksForm, description: e.target.value })
                  }
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          ) : null}

          <ul>
            {tasks.map((task) => (
              <li
                key={task.id}
                onClick={() => setIdTask(task.id)}
                style={{
                  cursor: "pointer",
                  backgroundColor: task.id === idTask ? "#007bff" : "#F9F9F9",
                  color: task.id === idTask ? "#fff" : "black",
                  textAlign: "left",
                  padding: "5px",
                }}
              >
                {task.title}
                <button
                  onClick={() => dispatch(toggleTaskComplete({ id: task.id }))}
                  style={{
                    cursor: "pointer",
                    backgroundColor: task.completed ? "green" : "#F9F9F9",
                    color: task.completed ? "#fff" : "black",
                    textAlign: "left",
                    padding: "5px",
                  }}
                >
                  toggle
                </button>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </>
  );
};

export default TasksList;
