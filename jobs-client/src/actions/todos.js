export const getTodos = () => {
    //async/thunk - thunk dispatches twice
    return (dispatch) => {
        dispatch({type: "LOADING_TODOS"}) //dispatches action through reducer to change loading to true to display "loading...."
        fetch('http://localhost:3001/todos')
        // fetch('/todos')
        .then(res => res.json())
        .then(todos => dispatch({type: "GET_TODOS", payload: todos}))
    }
}

export const addTodo = todo => {
    return (dispatch) => {
        fetch('http://localhost:3001/todos', {
            method: 'POST',
            body: JSON.stringify(todo),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(todo => dispatch({type: "ADD_TODO", payload: todo}))
    }
}

export const updateTodo = todo => {
    return (dispatch) => {
        dispatch({type: "UPDATE_TODO"})
        fetch(`http://localhost:3001/todos/${todo.id}`, {
            method: 'PATCH',
            body: JSON.stringify(todo),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(todo => dispatch({type: "UPDATE_TODO", payload: todo}))
    }
}

export const deleteTodo = todoId => {
    return (dispatch) => {
        dispatch({type: "DELETE_TODO"})
        fetch(`http://localhost:3001/todos/${todoId}`, {
            method: 'DELETE'
        })
        .then(dispatch({type: 'DELETE_TODO', payload: todoId}))
    }
}