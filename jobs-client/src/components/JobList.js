import React, { Component } from 'react';
import { connect } from 'react-redux'
import {getJobs} from '../actions/jobs'
import * as actions from "../actions/jobs"
import { bindActionCreators } from "redux";


class JobList extends Component {

    componentDidMount(){this.props.getJobs()}

    handleEdit = (jb) => {
        this.props.updatejob(jb.id)
    }

    handleDelete = (jb) => {
        this.props.deletejob(jb.id)
    }

    render(){

       const jobsList = this.props.jobs.map((jb) => {
            return <tr key={jb.id}>
                <td>{jb.title}</td>
                {/* <td>{jb.bName}</td>
                <td>{jb.amount}</td> */}
                <td><button onClick={() => this.handleEdit(jb.id)}>Edit</button></td>
                <td><button onClick={() => this.handleDelete(jb.id)}>Delete</button></td>
            </tr>
        })

        // const jobsList = this.props.jobs.map(jb => 
        //     <li className="jobs" key={jb.id}>{jb.title} - 
        //     {jb.applied ? "Applied" : "Did Not Apply"} 
        //     <td><button onClick={() => this.handleEdit(index)}>Edit</button></td>
        //     <td><button onClick={() => this.handleDelete(index)}>Delete</button></td>
        //     </li>) 

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

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getJobs: actions.getJobs,
        updatejob: actions.updateJob,
        deletejob: actions.deleteJob
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(JobList);