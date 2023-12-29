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
        // todosDelete: (state, payload) => {
            // state.todos = [...state.todos, payload.payload];
            // console.log(payload.payload, 'payload')
        // },
        todosOnThePinSet: (state, payload) => {
            state.todosOnThePin = [...state.todosOnThePin, payload.payload];
        },
        setWillUpdatedId: (state, payload) => {
            state.willUpdatedId = payload.payload;
        },
        // setCheck: (state, actions) => {
            // state.todos.map(item => {
                // return item;
            // })
        // },
        todosDelete: (state, payload) => {
            const deletedTodoId = payload.payload;
            state.todos = state.todos.filter(todo => todo.id !== deletedTodoId);
            console.log(payload.payload, 'payload')
          },
          updateTodo: (state, action) => {
            const { id, pinned, description } = action.payload;
        
            state.todos = state.todos.map(todo => {
              if (todo.id === id) {
                return {
                  ...todo,
                  pinned: pinned !== undefined ? pinned : todo.pinned,
                  description: description !== undefined ? description : todo.description,
                };
              }
              return todo;
            });
          },
      
        
          
    },
})

export const { todosSet, setCheck, setWillUpdatedId, todosOnThePinSet, todosDelete } = todosSlice.actions
export const selectTodos = state => state.todos.selectTodos
export const { updateTodo } = todosSlice.actions;
export default todosSlice.reducer