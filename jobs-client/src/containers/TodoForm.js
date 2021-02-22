import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo, updateTodo } from '../actions/todos'

class TodoForm extends Component {

  state={
    todo: {
        name: ""
    },
    loading: false
}

handleOnChange = event => {
    this.setState({...this.state,

        todo: {...this.state.job,
            name: event.target.value
        }
    })
}

handleOnSubmit = event => {
    event.preventDefault()
    const todo = {...this.state.todo}
    console.log(todo)
    this.props.addTodo(todo)
    this.setState({
        todo: {
            name: ""
        },
        loading: false
    })
}

  render() {
    return (
      <form onSubmit={this.handleOnSubmit} className='todo-form'>
    
          <>
            <input 
            placeholder='Things to do today . . .' 
            value={this.state.todo.name} 
            onChange={this.handleOnChange} 
            name='name' 
            className='todo-input' 
            />
            <button onClick={this.handleOnSubmit} className='todo-button'>
              Add Task
            </button>
          </>
      </form>
    );
  }

}

export default connect(null, {addTodo, updateTodo})(TodoForm)

