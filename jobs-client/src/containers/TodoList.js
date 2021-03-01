import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteTodo, getTodos, updateTodo } from '../actions/todos'
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';

class TodoList extends Component {

    componentDidMount(){
        this.props.onGet()
        console.log("component mounted")
    }
    

    shouldComponentUpdate(){
        console.log("should component update")
        this.props.onGet()
        return true
    }
    

    render(){

        return(
            <>
              <h1>What's the Plan for Today?</h1>
              <TodoForm />
                {this.props.todos.map((todo, index) => {
                    return (
                      <>
                      <div className="todo-row" key={index.uniqueId}>
                        <li key={index.uniqueId}>{todo.name}</li>
                            <div className="icons" key={index.uniqueId}>
                                <RiCloseCircleLine key={todo.id} onClick={() => this.props.onDelete(todo.id)} className='delete-icon'/>
                            </div>
                      </div>
                      </>
                        )
                    })
                }
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
        },

        onUpdate: (id) => {
            dispatch(updateTodo(id))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);