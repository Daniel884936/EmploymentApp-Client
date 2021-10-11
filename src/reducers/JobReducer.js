import { types } from "../types/types";


const initialState = {
    jobs: [],
    currentNote: null
}

export default function jobReducer(state = initialState, action){
    switch (action.type) {
        case types.GetJobs:
            
            return {
                ...state,
                jobs: [...action.payload]
            }
    
        default:
            return state;
    }
}