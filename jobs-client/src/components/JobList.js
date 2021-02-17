import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteJob, getJobs } from '../actions/jobs'
class JobList extends Component {

    componentDidMount(){
        this.props.onGet()
    }

    render(){
        return(
            <div>
                {this.props.jobs.map(job => {
                    return (
                            <ul className="jobs">
                                <li key={job.id}>
                                    {job.title} - {job.company} {jobStatus(job)} 
                                </li>
                                {/* <td><button onClick={() => this.handleEdit(jb.id)}>Edit</button></td> */}
                                <button key={job.id} onClick={() => this.props.onDelete(job.id)}>Delete</button>
                            </ul>
                        )
                    })
                }
            </div>
            )
    }
}

const jobStatus = job => {
    // job.status ? <html>Application Submitted</html> : <html>Next Steps -</html>
    // if (job.status === true) {
    //     <html>APPLIED</html>
    // } 
    switch(job.status){
        case "applied":
            return <html>. . . Submitted Application</html>
        case "interviewing":
            return <html>. . . Currently Interviewing</html>
        default: 
            return <html>default statement</html>
    }
    
}

const mapStateToProps = state => {
    console.log("jobs state testing", state)
    return {
      jobs: state.job.jobs,
      //jobs: state.jobReducer.jobs
      loading: state.job.loading
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