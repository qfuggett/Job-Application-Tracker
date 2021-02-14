export const getJobs = () => {
    //async/thunk - thunk dispatches twice
    return (dispatch) => {
        dispatch({type: "LOADING_JOBS"}) //dispatches action through reducer to change loading to true to display "loading...."
        fetch('http://localhost:3001/jobs')
        // fetch('/jobs')
        .then(res => res.json())
        .then(jobs => dispatch({type: "FETCH_JOBS", payload: jobs}))
    }
}

export const addJob = job => {
    return (dispatch) => {
        dispatch({type: "ADD_JOB"})
        fetch('http://localhost:3001/jobs', {
            method: 'POST',
            body: JSON.stringify(job),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(job => dispatch({type: "JOB_ADDED", payload: job}))
    }
}

export const updateJob = job => {
    return (dispatch) => {
        dispatch({type: "UPDATE_JOB"})
        fetch('http://localhost:3001/jobs/:id', {
            method: 'POST',
            body: JSON.stringify(job),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(job => dispatch({type: "JOB_UPDATED", payload: job}))
    }
}

export const deleteJob = id => {
    return (dispatch) => {
        dispatch({type: "JOB_DELETED"})
        fetch('http://localhost:3001/job/:id', {
            method: 'DELETE',
            
        })
        // .then(res => res.json())
        // .then(job => dispatch({type: "JOB_DELETED", payload: job}))
    }
}