const todoReducer =(state= {todos: []}, action) => {
    switch(action.type) {
        case "LOADING_TODOS":
                return {
                    ...state,
                }

        case "GET_TODOS":
            return {
                ...state,
                todos: action.payload
            }

        case "ADD_TODO":
            debugger
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }

        case "UPDATE_TODO":
            const updates = state.todos.filter(todo => todo.id !== action.payload.id)
            return {
                ...state,
                todos: [...updates, action.payload]
            }

        case "DELETE_TODO":
            const keptTodos = state.todos.filter(todo => todo.id !== action.id)
            return {
                ...state,
                jobs: keptTodos
            }
        default:
            return state;
    }
}



export default todoReducer