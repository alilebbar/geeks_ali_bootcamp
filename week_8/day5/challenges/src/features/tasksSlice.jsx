import { createSlice } from '@reduxjs/toolkit' 

const initialState = {
  tasks: [],
}

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks.push({...action.payload, id : state.tasks.length})
    },
    removeTask(state, action) {
      const index = state.tasks.findIndex(task => task.id === action.payload.id)
      if (index !== -1) {
        state.tasks.splice(index, 1)
      }
    },
    editTask(state, action) {
      const index = state.tasks.findIndex(task => task.id === action.payload.id)
      if (index !== -1) {
        state.tasks[index].title = action.payload.title
        state.tasks[index].description = action.payload.description
        state.tasks[index].categoryId = action.payload.categoryId
      }
    },
    toggleTaskComplete(state, action) {
      const index = state.tasks.findIndex(task => task.id === action.payload.id)
      if (index !== -1) {
        state.tasks[index].completed = !state.tasks[index].completed
      }
    },
  },
})

export const { addTask, removeTask, editTask, toggleTaskComplete } = tasksSlice.actions
export default tasksSlice.reducer
