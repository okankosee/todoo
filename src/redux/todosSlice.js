import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: [{
        id: 1,
        text: 'work',
        checked: true
    }, {
        id: 2,
        text: '',
        checked: true
    }
    ]
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        todosSet: (state, payload) => {
            state.todos = [...state.todos, payload.payload];
        },
        setCheck: (state, actions) => {
            state.todos.map(item => {
                // if (actions.payload === item.id) {
                    // if (item.done === true) {
                        // item.done = false
                    // } else {
                        // item.done = true
                    // }
                // }
            })
        }
    },
})

export const { todosSet, setCheck } = todosSlice.actions
export const selectTodos = state => state.todos.selectTodos
export default todosSlice.reducer