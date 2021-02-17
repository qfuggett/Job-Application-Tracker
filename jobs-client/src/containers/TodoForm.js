// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { addTodo } from '../actions/todos'
// import { updateTodo } from '../actions/todos'

// class TodoForm extends Component {

//   state={
//     todo: {
//         name: ""
//     },
// }

// handleOnChange = event => {
//     this.setState({...this.state,

//         todo: {...this.state.job,
//             name: event.target.value
//         }
//     })
// }

// handleOnSubmit = event => {
//     event.preventDefault()
//     const todo = {...this.state.todo}
//     console.log(todo)
//     this.props.addTodo(todo)
//     this.setState({
//         todo: {
//             name: ""
//         },
//     })
// }

// handleOnEdit = event => {
//   event.preventDefault()
//   const todo = {...this.state.todo}
//   console.log(todo)
//   this.props.updateTodo(todo)
//   this.setState({
//       todo: {
//           name: ""
//       },
//   })
// }

//   render() {
//     return (
//       <form onSubmit={this.handleOnSubmit} className='todo-form'>
//         {this.props.edit ? (
//           <>
//             <input
//               placeholder='Update your task . . .'
//               value={this.state.todo.name}
//               onChange={this.handleOnChange}
//               name='text'
//               className='todo-input edit'
//             />
//             <button onClick={this.handleOnEdit} className='todo-button edit'>
//               Update
//             </button>
//           </>
//         ) : (
//           <>
//             <input 
//             placeholder='Things to do today . . .' 
//             value={this.state.todo.name} 
//             onChange={this.handleOnChange} 
//             name='text' 
//             className='todo-input' 
//             />
//             <button onClick={this.handleOnSubmit} className='todo-button'>
//               Add Task
//             </button>
//           </>
//         )}
//       </form>
//     );
//   }

// }

// export default connect(null, {addTodo, updateTodo})(TodoForm)





import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your task . . .'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input 
          placeholder='Things to do today . . .' 
          value={input} 
          onChange={handleChange} 
          name='text' 
          className='todo-input' 
          ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add Task
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;

