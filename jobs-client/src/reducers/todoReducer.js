const todoReducer =(state= {todos: [], loading: false}, action) => {
    switch(action.type) {
        case "LOADING_TODOS":
                return {
                    ...state,
                    loading: true
                }

        case "GET_TODOS":
            return {
                ...state,
                todos: action.payload,
                loading: false
            }

        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, action.payload],
                loading: false
            }

        case "UPDATE_TODO":
            const updates = state.todos.filter(todo => todo.id !== action.payload)
            return {
                ...state,
                todos: [...updates, action.payload],
                loading: false
            }

        case "DELETE_TODO":
            const newTodos = state.todos.filter(todo => todo.id !== parseInt(action.payload))
            return {
                ...state,
                jobs: newTodos
            }
        default:
            return state;
    }
}



export default todoReducer