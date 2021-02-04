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
                    todos: action.payload,
                    loading: false
                }
            default:
                return state;
        }
    }
    


export default jobReducer