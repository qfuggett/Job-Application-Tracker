import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addJob } from '../actions/jobs'
class JobForm extends Component {

    constructor(props){
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
      }

    state={
        job: {
            title: "",
            company: "",
            status: "applied"
        },
        loading: false
    }

    handleOnChange = event => {
        this.setState({...this.state,

            job: {...this.state.job,
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
                status: "applied"
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

                <input 
                type="text" 
                placeholder="status" 
                value={this.state.job.status} 
                onChange={this.handleOnChange} 
                className='job-input'
                />

                <br/>
                {/* <select id="job-status" size="2" placeholder="status" defaultValue={this.state.job.status} onClick={this.handleOnChange}>
                    <option placeholder="status" checked={this.state.job.status="applied"}>Applied</option>
                    <option placeholder="status" checked={this.state.job.status="interviewing"}>Interviewing</option>
                </select>
                <br /> */}

                {/* <div className="radio">
                    <label>
                    <input
                        type="radio"
                        value="applied"
                        placeholder="applied"
                        checked={this.state.job.status === "applied"}
                        onClick={this.handleOnChange}
                        />
                        Applied
                    </label>
                </div>
                <div className="radio">
                    <label>
                    <input
                        type="radio"
                        value="interviewing"
                        placeholder="applied"
                        checked={this.state.job.status === "interviewing"}
                        onClick={this.handleOnChange}
                        />
                        Interviewing
                    </label>
                </div>
                <div>
                    Selected option is : {this.state.job.status}
                </div> */}
                <button type="submit" className='job-button'>Add This Job</button>

            </form>
        )
    }
}


export default connect(null, {addJob})(JobForm)