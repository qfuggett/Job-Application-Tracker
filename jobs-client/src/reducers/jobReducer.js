const jobReducer =(state= {jobs: [], loading: false, text: "", selected: undefined}, action) => {
        switch(action.type) {
            case "LOADING_JOBS":
                return {
                    ...state,
                    loading: true
                }

            case "GET_JOBS":
                return {
                    ...state,
                    jobs: action.payload,
                    loading: false
                }

            case "ADD_JOB":
                return {
                    ...state,
                    jobs: [...state.jobs, action.payload],
                    loading: false
                }

            case "UPDATE_JOB":
                // const updates = state.jobs.filter(job => job.id !== action.payload)
                return {
                    ...state,
                    // jobs: [...updates, action.payload],
                    // jobs: [...state.jobs.filter(job => job.id !== action.payload.id), action.payload],
                    loading: false,
                    text: state.jobs[action.payload],
                    selected: action.payload
                }

            case "DELETE_JOB":
                const keptJobs = state.jobs.filter(job => job.id !== parseInt(action.payload))
                return {
                    ...state,
                    jobs: keptJobs
                }
            default:
                return state;
        }
    }
    


export default jobReducer