import React, {Component} from 'react'
import './App.css';
import { connect } from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {getJobs} from './actions/jobs'
import JobForm from './containers/JobForm'
import NavBar from './components/NavBar'

class App extends Component {

  componentDidMount(){
    this.props.getJobs()
  }

  render(){
    console.log("Rendering. . .")
    const jobsList = this.props.jobs.map(jb => <li key={jb.id}>{jb.title} - {jb.applied ? "Applied" : "Did Not Apply"}</li>)

    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" render={() => <div>Things to do: </div>} />
          <Route path='/addjob' render={() => <JobForm />} />
          <Route path='/alljobs' 
            render={() => 
            <div>
              <ul>
              {this.props.loading? <h4>Loading . . . . . .</h4> : jobsList}
            </ul>
            </div>} />
        </div>  
      </Router>
    );
  }
}

//allows you to access state through props
const mapStateToProps = state => {
  console.log("state testing", state)
  return {
    jobs: state.jobReducer.jobs,
    loading: state.jobReducer.loading
  }
}

// getJobs == mapDispatchToProps

export default connect(mapStateToProps, {getJobs})(App);
