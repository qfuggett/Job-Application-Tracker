import { v4 as uuidv4 } from 'uuid';
uuidv4();


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
                    id: uuidv4(),
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
                    jobs: state.jobs.filter(job => job.id !== action.payload)
                }
            default:
                return state;
        }
    }
    


export default jobReducer