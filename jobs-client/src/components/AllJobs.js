import React, { Component } from 'react';
import {getJobs} from '../actions/jobs'
import { connect } from 'react-redux'

class AllJobs extends Component {

    componentDidMount(){this.props.getJobs()}

    render(){

        const jobsList = this.props.jobs.map(jb => 
            <li key={jb.id}>{jb.title} - 
            {jb.applied ? "Applied" : "Did Not Apply"} 
            </li>) 

        return(
            <div>
                {jobsList}
            </div>
            )
    }
}

const mapStateToProps = state => {
    console.log("state testing", state)
    return {
      jobs: state.jobReducer.jobs,
      loading: state.jobReducer.loading
    }
  }


  export default connect(mapStateToProps, {getJobs})(AllJobs);
