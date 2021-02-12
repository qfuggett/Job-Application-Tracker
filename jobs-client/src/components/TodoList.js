import React, {useState} from 'react'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        //does not allow to submit extraneous spaces
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        console.log(todo, ...todos); //test
    }

    return (
        <div className="todo-list">
            <h1>Today's Tasks</h1>
            <TodoForm onSubmit={addTodo}/>
        </div>
    )
}

export default TodoList;
