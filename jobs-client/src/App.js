import React, {Component} from 'react'
import './App.css';
import { connect } from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {getJobs} from './actions/jobs'
import JobForm from './containers/JobForm'
import NavBar from './components/NavBar'
import AllJobs from './components/AllJobs'
import TodoList from './components/TodoList'

class App extends Component {

  render(){
    console.log("Rendering. . .")

    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" render={() => <div className='todo-app'><TodoList /></div>} />
          <Route path='/addjob' render={() => <div className='job-form-page'><h1>Add a Job: </h1><JobForm /></div>} />
          <Route path='/alljobs' 
            render={() => 
            <div>
            <AllJobs />
            </div>} />
        </div>  
      </Router>
    );
  }
}

const mapStateToProps = state => {
  console.log("state testing", state)
  return {
    jobs: state.jobReducer.jobs,
    loading: state.jobReducer.loading
  }
}

export default connect(mapStateToProps, {getJobs})(App);
