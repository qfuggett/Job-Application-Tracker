import React, {Component} from 'react'
import './App.css';
import { connect } from 'react-redux'
import {getJobs} from './actions/jobs'
import JobForm from './containers/JobForm'

class App extends Component {

  render(){

    const jobsLis = this.props.jobs.map(jb => <li key={jb.id}>{jb.title} - {jb.applied ? "Applied" : "Did Not Apply"}</li>)

    return (
      <div className="App">
        <h1>Add Job</h1>
        <JobForm />
        <hr/>
        <h1>My Jobs</h1>
        <ul>
          {this.props.loading? <h4>Loading . . . . . .</h4> : jobsLis}
        </ul>
      </div>
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

//getJobs == mapDispatchToProps

export default connect(mapStateToProps, getJobs)(App);
