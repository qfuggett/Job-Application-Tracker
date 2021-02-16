import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteJob, getJobs } from '../actions/jobs'
class JobList extends Component {

    // constructor(props){
    //     super(props);
    // }

    componentDidMount(){
        this.props.onGet()
    }

    render(){

        return(
            <div>
                {this.props.jobs.map(job => {
                    return (
                        <table>
                            <tbody>
                                <tr key={job.id}>
                                <td>{job.title} - {job.company}</td>
                                {/* <td><button onClick={() => this.handleEdit(jb.id)}>Edit</button></td> */}
                                <td><button key={job.id} onClick={() => this.props.onDelete(job.id)}>Delete</button></td>
                                </tr>
                            </tbody>
                        </table>
                        )
                    })
                }
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