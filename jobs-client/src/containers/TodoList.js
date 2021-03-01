import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteTodo, getTodos } from '../actions/todos'
import TodoForm from './TodoForm';
import Todos from '../components/Todos'

class TodoList extends Component {

    render(){
 
        return(
            <>
              <h1>What's the Plan for Today?</h1>
              <TodoForm />
              <Todos todos={this.props.todos} onDelete={this.props.onDelete} onGet={this.props.onGet}/>
            </>
            )
    }
}

const mapStateToProps = state => {
    console.log("todos state testing", state)
    return {
      todos: state.todo.todos,
      loading: state.todo.loading
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
        onGet: () => {
            dispatch(getTodos());
        },

        onDelete: (id) => {
            dispatch(deleteTodo(id))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);