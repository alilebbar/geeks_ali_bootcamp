import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [],
}

const todosSlice = createSlice(
    {
        name: 'todos',
        initialState,
        reducers: {
            addTodo(state,action) {
                state.todos.push(
                    {
                    id: state.todos.length, 
                    title: action.payload.title,
                    completed: false
                })
            },
            todoToggled(state, action){
                const index = state.todos.findIndex(todo => todo.id === action.payload.id)
                state.todos[index].completed = !state.todos[index].completed
            },
            removeTodo(state, action){
                const index = state.todos.findIndex(todo => todo.id === action.payload.id)
                state.todos.splice(index,1)
            },
            clearTodos(state){
                state.todos = []
            },
            editTodo(state, action){
                const index = state.todos.findIndex(todo => todo.id === action.payload.id)
                state.todos[index].title = action.payload.title
            }

        }
    }
)

export const { addTodo, todoToggled, removeTodo, clearTodos, editTodo } = todosSlice.actions

export default todosSlice.reducer