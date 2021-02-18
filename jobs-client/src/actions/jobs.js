export const getJobs = () => {
    //async/thunk - thunk dispatches twice
    return (dispatch) => {
        dispatch({type: "LOADING_JOBS"}) //dispatches action through reducer to change loading to true to display "loading...."
        fetch('http://localhost:3001/jobs')
        .then(res => res.json())
        .then(jobs => dispatch({type: "GET_JOBS", payload: jobs}))
    }
}

export const addJob = job => {
    return (dispatch) => {
        fetch('http://localhost:3001/jobs', {
            method: 'POST',
            body: JSON.stringify(job),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(job => dispatch({type: "ADD_JOB", payload: job}))
    }
}

export const updateJob = job => {
    return (dispatch) => {
        dispatch({type: "UPDATE_JOB"})
        fetch(`http://localhost:3001/jobs/${job.id}`, {
            method: 'PATCH',
            body: JSON.stringify(job),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(job => dispatch({type: "UPDATE_JOB", payload: job}))
    }
}

export const deleteJob = jobId => {
    return (dispatch) => {
        dispatch({type: "DELETE_JOB"})
        fetch(`http://localhost:3001/jobs/${jobId}`, {
            method: 'DELETE'
        })
        .then(dispatch({type: 'DELETE_JOB', payload: jobId}))
    }
}