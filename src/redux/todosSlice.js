import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: [{
        id: 1,
        text: 'work',
        checked: true
    }, {
        id: 2,
        text: 'asdasd',
        checked: true
    }
    ],
    todosOnThePin: [

    ],
    willUpdatedId: null
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        todosSet: (state, payload) => {
            state.todos = [...state.todos, payload.payload];
        },
        todosDelete: (state, payload) => {
            state.todos = [...state.todos.re payload.payload];
            console.log(payload.payload, 'payload')
        },
        todosOnThePinSet: (state, payload) => {
            state.todosOnThePin = [...state.todosOnThePin, payload.payload];
        },
        setWillUpdatedId: (state, payload) => {
            state.willUpdatedId = payload.payload;
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

export const { todosSet, setCheck, setWillUpdatedId, todosOnThePinSet, todosDelete } = todosSlice.actions
export const selectTodos = state => state.todos.selectTodos
export default todosSlice.reducer