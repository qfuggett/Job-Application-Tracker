import React, {Component} from 'react'
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import JobForm from './containers/JobForm'
import NavBar from './components/NavBar'
import TodoList from './containers/TodoList'
import JobList from './containers/JobList'

class App extends Component {

  render(){
    console.log("Rendering. . .")

    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" render={() => <div className='todo-app'><TodoList /></div>} />
          <Route path='/addjob' render={() => <div className='job-form-page'><h1>Add a Job: </h1><JobForm /></div>} />
          <Route path='/alljobs' render={() => <div className='job-list'><JobList /></div>} />
        </div>  
      </Router>
    );
  }
}

export default App;
