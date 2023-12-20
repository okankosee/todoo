import { configureStore } from '@reduxjs/toolkit'
import todosSlice from './todosSlice'
import bottomSheetSlice from './bottomSheetSlice'

export const store = configureStore({
  reducer: {
    todos: todosSlice,
    bottomSheetSlice: bottomSheetSlice
  },
})
