import uuid from 'uuid';


//what state looks like upon initialization
const jobReducer =(state= {jobs: [], loading: false}, action) => {
        switch(action.type) {
            case "LOADING_JOBS":
                return {
                    ...state,
                    loading: true
                }

            case "FETCH_JOBS":
                return {
                    ...state,
                    jobs: action.payload,
                    loading: false
                }

            case "ADD_JOB":
                return {
                    ...state,
                    id: uuid(),
                    loading: true
                }

            case "JOB_ADDED":
                return {
                    ...state,
                    jobs: [...state.jobs, action.payload],
                    loading: false
                }

            case "JOB_DELETED":
                return {
                    jobs: state.jobs.filter(job => job !== action.payload)
                }
            default:
                return state;
        }
    }
    


export default jobReducer