import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteJob, getJobs } from '../actions/jobs'
import Jobs from '../components/Jobs'
// import ClickMe from '../components/ClickMe'

class JobList extends Component {

    componentDidMount(){
        this.props.onGet()
    }

    render(){
        return(
            <>
            <Jobs jobs={this.props.jobs} onGet={this.props.onGet} onDelete={this.props.onDelete}/>
            <br/>
            {/* <ClickMe /> */}
            </>
            )
    }
}

const mapStateToProps = state => {
    console.log("jobs state testing", state)
    return {
      jobs: state.job.jobs,
      loading: state.job.loading
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
        onGet: () => {
            dispatch(getJobs());
        },

        onDelete: (id) => {
            dispatch(deleteJob(id));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(JobList);