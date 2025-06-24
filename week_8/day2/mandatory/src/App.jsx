import { useState } from 'react'
import './App.css'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, clearTodos, editTodo, removeTodo, todoToggled } from './features/todos/todosSlice'

function App() {
  let inputAddTodo = useRef()
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos.todos)
  console.log(todos)
  const handleChangeAddTodo = (e) => {
    inputAddTodo.current.value = e.target.value
  }
  const handleAddTodo = () => {
    console.log(inputAddTodo.current.value)
    dispatch(addTodo({title: inputAddTodo.current.value}))
    inputAddTodo.current.value = ''
  }
  return (
    <>
      <h1>Todo App</h1>
      <input type="text" placeholder="Add Todo" 
      onChange={handleChangeAddTodo} ref={inputAddTodo}/>
      <button onClick={handleAddTodo}> Add Todo </button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.title}</span>
            <button onClick={() => dispatch(removeTodo({id: todo.id}))}> Remove </button>
            <button onClick={() => dispatch(editTodo({id: todo.id, title: inputAddTodo.current.value}))}> Edit </button>
            <button onClick={() => dispatch(todoToggled({id: todo.id}))}> Toggle </button>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch(clearTodos())}> Clear </button>
    </>
    
  )
}

export default App
