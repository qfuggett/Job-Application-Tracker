import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addJob } from '../actions/jobs'
class JobForm extends Component {

    state={
        job: {
            title: "",
            company: "",
            status: ""
        },
        loading: false
    }

    handleOnChange = event => {
        this.setState({...this.state,

            job: {...this.state.job,
                [event.target.name]: event.target.value
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
                status: ""
            },
            loading: false
        })
    }

    render() {
        return (
            <form onSubmit={this.handleOnSubmit} className='job-form'>
                <input 
                type="text" 
                placeholder="Position Title" 
                name="title" 
                value={this.state.job.title} 
                onChange={this.handleOnChange} 
                className='job-input'
                />

                <input 
                type="text" 
                placeholder="Company Name" 
                name="company" 
                value={this.state.job.company} 
                onChange={this.handleOnChange} 
                className='job-input'
                />

                <input 
                type="text" 
                placeholder="Status: applied or interviewing" 
                name="status" 
                value={this.state.job.status} 
                onChange={this.handleOnChange} 
                className='job-input'
                />
                <br/>
                
                <button type="submit" className='job-button'>Add This Job</button>
            </form>
        )
    }
}


export default connect(null, {addJob})(JobForm)