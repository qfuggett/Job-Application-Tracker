import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteTodo, getTodos, updateTodo } from '../actions/todos'
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';

class TodoList extends Component {

    componentDidMount(){
        this.props.onGet()
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




















// import React, { useState } from 'react';
// import TodoForm from '../containers/TodoForm';
// import Todo from './Todo';

// function TodoList() {
//   const [todos, setTodos] = useState([]);

//   const addTodo = todo => {
//     if (!todo.text || /^\s*$/.test(todo.text)) {
//       return;
//     }

//     const newTodos = [todo, ...todos];

//     setTodos(newTodos);
//     console.log(...todos);
//   };

//   const updateTodo = (todoId, newValue) => {
//     if (!newValue.text || /^\s*$/.test(newValue.text)) {
//       return;
//     }

//     setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
//   };

//   const removeTodo = id => {
//     const removedArr = [...todos].filter(todo => todo.id !== id);

//     setTodos(removedArr);
//   };

//   const completeTodo = id => {
//     let updatedTodos = todos.map(todo => {
//       if (todo.id === id) {
//         todo.isComplete = !todo.isComplete;
//       }
//       return todo;
//     });
//     setTodos(updatedTodos);
//   };

//   return (
//     <>
//       <h1>What's the Plan for Today?</h1>
//       <TodoForm onSubmit={addTodo} />
//       <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
//     </>
//   );
// }

// export default TodoList;
