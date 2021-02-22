import React, { Component } from 'react';

class JobStatus extends Component {
    render() {
        return(
            status(this.props.job)
        )
    }
    
}

const status = job => {
    switch(job.status){
        case "applied":
            return <div>. . . Submitted Application</div>
        case "interviewing":
            return <div>. . . Currently Interviewing</div>
        case "":
            return <div>. . . Considering Position</div>
        default: 
            return <div>Notes: {job.status}</div>
    }
    
}

export default JobStatus