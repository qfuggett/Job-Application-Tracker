import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from "../actions/jobs"
import { bindActionCreators } from "redux";

//TEST
class JobForm extends Component {

    state={
        job: {
            title: "",
            company: "",
            applied: false,
            interview: false,
            hired: false
        },
        loading: false
    }

    handleOnChange = event => {
        this.setState({...this.state,

            job: {...this.state.job,
                [event.target.name]: event.target.value
                // title: event.target.value,
                // company: event.target.value,
                // applied: event.target.checked,
                // interview: event.target.value,
                // hired: event.target.value
            }
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        const job = {...this.state.job}
        console.log(job)
        this.props.addJob(job)
        this.setState({
            job: {
                title: "",
                company: "",
                applied: false,
                interview: false,
                hired: false
            },
            loading: false
        })
    }

    render() {
        return (
            <form onSubmit={this.handleOnSubmit} className='job-form'>
                <label><h3>Job Title: </h3></label>
                <input type="text" value={this.state.job.title} onChange={this.handleOnChange} className='job-input'/>
                <br/>
                <label><h3>Applied: </h3></label>
                <input type="checkbox" checked={this.state.applied} onChange={this.handleOnChange}/>
                {/* <input type="text" value={this.state.job.company} onChange={this.handleOnChange}/>
                <input type="checkbox" checked={this.state.interview} onChange={this.handleOnChange}/>
                <input type="checkbox" checked={this.state.hired} onChange={this.handleOnChange}/> */}
                <br />
                <button type="submit" className='job-button'>Add This Job</button>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addJob: actions.addJob,
        updateJob: actions.updateJob
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(JobForm)