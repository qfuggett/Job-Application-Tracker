import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addJob } from '../actions/jobs'
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
                // title: event.target.value,
                // company: event.target.value,
                // applied: event.target.value,
                // interview: event.target.value,
                // hired: event.target.value
                [event.target.placeholder]: event.target.value

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
                <input 
                type="text" 
                placeholder="title" 
                value={this.state.job.title} 
                onChange={this.handleOnChange} 
                className='job-input'
                />

                <input 
                type="text" 
                placeholder="company" 
                value={this.state.job.company} 
                onChange={this.handleOnChange} 
                className='job-input'
                />
                <br/>
                <select id="job-status" size="3">
                    <option placeholder="applied" value={this.state.job.applied}>Applied</option>
                    <option placeholder="interview" value={this.state.job.interview}>Interviewing</option>
                    <option placeholder="hired" value={this.state.job.hired}>Hired</option>
                </select>
                <br />
                <button type="submit" className='job-button'>Add This Job</button>
            </form>
        )
    }
}


export default connect(null, {addJob})(JobForm)