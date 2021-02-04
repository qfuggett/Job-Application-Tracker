import React, { Component } from 'react'

export default class JobForm extends Component {

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
                title: event.target.value,
                company: event.target.value,
                applied: event.target.value,
                interview: event.target.value,
                hired: event.target.value
            }
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        const job = {...this.state.job}
        console.log(job)
    }

    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <input type="text" value={this.state.job.title} onChange={this.handleOnChange}/>
                <input type="text" value={this.state.job.company} onChange={this.handleOnChange}/>
                <input type="checkbox" checked={this.state.applied} onChange={this.handleOnChange}/>
                <input type="checkbox" checked={this.state.interview} onChange={this.handleOnChange}/>
                <input type="checkbox" checked={this.state.hired} onChange={this.handleOnChange}/>
                <button type="submit">Add This Job</button>
            </form>
        )
    }
}
