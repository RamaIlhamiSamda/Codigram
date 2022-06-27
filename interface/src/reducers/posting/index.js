import {CREATE_POSTING,GET_LIST_POSTING,DELETE_POSTING} from "../../actions/postingAction"

const initialState = { 
    getListPostingResult  : false,
    getListPostingLoading  : false,
    getListPostingEror : false,

    createPostingResult  : false,
    createPostingLoading  : false,
    createPostingEror : false,

    deletePostingResult  : false,
    deletePostingLoading  : false,
    deletePostingEror : false,
}

const posting = (state = initialState, action)=>{
    switch(action.type){
        case GET_LIST_POSTING:
            return {
                ...state,
                getListPostingResult: action.payload.data,
                getListPostingLoading: action.payload.loading,
                getListPostingEror: action.payload.errorMessage
            }
        case CREATE_POSTING :
            return {
                ...state,
                createPostingResult: action.payload.data,
                createPostingLoading: action.payload.loading,
                createPostingEror: action.payload.errorMessage
            }
            case DELETE_POSTING :
            return {
                ...state,
                deletePostingResult: action.payload.data,
                deletePostingLoading: action.payload.loading,
                deletePostingEror: action.payload.errorMessage
            }
        
        default:
        return state
    
    }
}

export default posting