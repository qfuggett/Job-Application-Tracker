export const getJobs = () => {
    //async/thunk - thunk dispatches twice
    return (dispatch) => {
        dispatch({type: "LOADING_JOBS"}) //dispatches action through reducer to change loading to true to display "loading...."
        fetch('/jobs')
        .then(res => res.json())
        .then(jobs => dispatch({type: "FETCH_JOBS", payload: jobs}))
    }
}

export const addJob = job => {
    return (dispatch) => {
        dispatch({type: "ADD_JOB"})
        fetch('/jobs', {
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