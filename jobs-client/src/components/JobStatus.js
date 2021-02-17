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
            return <html>. . . Submitted Application</html>
        case "interviewing":
            return <html>. . . Currently Interviewing</html>
        default: 
            return <html>. . . default statement</html>
    }
    
}

export default JobStatus