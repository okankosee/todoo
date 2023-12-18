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
        setCheck: (state,actions) => {
            state.todos.map(item=> {
                if (actions.payload === item.id) {
                    if (item.done === true) {
                        item.done = false
                    } else {
                        item.done = true
                    }
                }
            })
        }
    },
})

export const { todos, setCheck } = todosSlice.actions
export const selectTodos = state => state.todos.selectTodos
export default todosSlice.reducer