import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteJob, getJobs } from '../actions/jobs'
import Job from './Job'
class JobList extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.onGet()
    }

    render(){

        return(
            <div>
                <Job
                key={jobsList.id}
                job={job}
                onDelete={this.props.onDelete}
                 />
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

  const mapDispatchToProps = (dispatch) => {
    return {
        onGet: () => {
            dispatch(getJobs());
        },

        onDelete: (id) => {
            dispatch(deleteJob(id))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(JobList);