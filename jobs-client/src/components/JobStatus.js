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
        default: 
            return <div>. . . default statement</div>
    }
    
}

export default JobStatus