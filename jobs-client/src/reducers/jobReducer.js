const jobReducer =(state= {jobs: [], loading: false}, action) => {
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
                const updates = state.jobs.filter(job => job.id !== action.payload.id)
                return {
                    ...state,
                    jobs: [...updates, action.payload],
                    loading: false
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