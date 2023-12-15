import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: [],
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        todos: (state, payload) => {
            state.todos = payload;
        },
    },
})

export const { todos } = todosSlice.actions
export default todosSlice.reducer