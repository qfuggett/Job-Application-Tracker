// import React, { Component } from 'react';
// import { connect } from 'react-redux'
// import { deleteTodo, getTodos } from '../actions/todos'
// import TodoForm from '../containers/TodoForm';
// import Todo from './Todo';
// class TodoList extends Component {

//     // constructor(props){
//     //     super(props);
//     // }

//     componentDidMount(){
//         this.props.onGet()
//     }
    

//     render(){

//         return(
//             <div>
//                 {this.props.todos.map(todo => {
//                     return (
//                       <>
//                       <h1>What's the Plan for Today?</h1>
//                       <li>{todo.name}</li>
//                       <TodoForm />
//                       {/* <Todo /> */}
//                       </>
//                         )
//                     })
//                 }
//             </div>
//             )
//     }
// }

// const mapStateToProps = state => {
//     console.log("todos state testing", state)
//     return {
//       todos: state.todoReducer.todos,
//     }
//   }

//   const mapDispatchToProps = (dispatch) => {
//     return {
//         onGet: () => {
//             dispatch(getTodos());
//         },

//         onDelete: (id) => {
//             dispatch(deleteTodo(id))
//         }
//     }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(TodoList);




















import React, { useState } from 'react';
import TodoForm from '../containers/TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
    </>
  );
}

export default TodoList;
