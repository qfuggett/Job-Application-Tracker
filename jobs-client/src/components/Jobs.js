import React, { Component } from 'react';
import JobStatus from '../components/JobStatus'

class Jobs extends Component {

    componentDidMount(){
        this.props.onGet()
    }

    render(){

        return(
            <>
             <br/>
            <h1>Jobs List: </h1>
                {this.props.jobs.map((job, index) => {
                    return (
                            <ul className="jobs">
                                <li key={index.uniqueId}>
                                    {job.title} - {job.company} 
                                    <JobStatus job={job}/> 
                                </li>
                                <button key={job.id} onClick={() => this.props.onDelete(job.id)}>Delete</button>
                            </ul>
                        )
                    })
                }
            </>
        )
    }

}

export default Jobs