import { createSelector } from '@reduxjs/toolkit'

export const allTasks = state => state.tasks.tasks
export const allCategories = state => state.categories.categories


export const selectTasksByCategory = (categoryId) =>
  createSelector([allTasks], (tasks) =>
    tasks.filter((task) => task.categoryId === categoryId)
  );

export const selectCategoryById = (categoryId)=>createSelector(
    [allCategories],(categories) => 
    categories.find(category => category.id === categoryId)
  );

export const selectCompletedTasks = createSelector(
    [allTasks],(tasks)=> 
    tasks.filter(task => task.completed)
)
