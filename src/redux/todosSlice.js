import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: [
    ],
    todosOnThePin: [

    ],
    willUpdatedId: null,
    textValue: ''
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        todosSet: (state, payload) => {
            state.todos = [...state.todos, payload.payload];
        },
        
        todosOnThePinSet: (state, payload) => {
            state.todosOnThePin = [...state.todosOnThePin, payload.payload];
        },
        setWillUpdatedId: (state, payload) => {
            state.willUpdatedId = payload.payload;
        },
        setTextValue: (state, payload) => {
            state.textValue = payload.payload;
        },
        todosDelete: (state, payload) => {
            const deletedTodoId = payload.payload;
            state.todos = state.todos.filter(todo => todo.id !== deletedTodoId);
        },
        todosOnThePinDelete: (state, payload) => {
            const deletedTodoId = payload.payload;
            state.todosOnThePin = state.todosOnThePin.filter(todo => todo.id !== deletedTodoId);
        },
        updateTodo: (state, action) => {
            const { id, checked, text } = action.payload;
            if (id) {
                state.todosOnThePin = state.todosOnThePin.map(todo => {
                    if (todo.id === id) {
                        return {
                            ...todo,
                            checked: checked !== undefined ? checked : todo.checked,
                            text: text !== undefined ? text : todo.text,
                        };
                    }
                    return todo;
                });
            } else {
                state.todos = state.todos.map(todo => {
                    if (todo.id === id) {
                        return {
                            ...todo,
                            checked: checked !== undefined ? checked : todo.checked,
                            text: text !== undefined ? text : todo.text,
                        };
                    }
                    return todo;
                });
            }
        },



    },
})

export const { todosSet, setCheck, setWillUpdatedId, updateTodo, todosOnThePinSet, todosOnThePinDelete, todosDelete, setTextValue } = todosSlice.actions
export const selectTodos = state => state.todos.selectTodos

export default todosSlice.reducer