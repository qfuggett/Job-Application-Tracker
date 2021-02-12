import React, {useState} from 'react'

function TodoForm(props) {

    const[input, setInput] = useState('')

    const handleOnChange = e => {
        setInput(e.target.value);
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput('');
    }

    return (
        <form className="todo-form" onSubmit={handleOnSubmit}>
            <input type="text" placeholder="things to do..." value={input} name="text" className='todo-input' onChange={handleOnChange}/>
            <button className="todo-button">Add item to list</button>
        </form>
    )
}

export default TodoForm;