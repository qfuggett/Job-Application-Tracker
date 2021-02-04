export const getJobs = () => {
    //async/thunk - thunk dispatches twice
    return (dispatch) => {
        dispatch({type: "LOADING_JOBS"}) //dispatches action through reducer to change loading to true to display "loading...."
        fetch('/jobs'
        .then(res => res.json())
        .then(jobs => dispatch({type: "FETCH_JOBS", payload: jobs}))
        )
    }
}