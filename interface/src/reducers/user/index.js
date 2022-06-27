import { GET_LIST_USER, CREATE_USER, DELETE_USER,DETAIL_USER,UPDATE_USER} from "../../actions/userAction"

const initialState = { 
    getListUserResult  : false,
    getListUserLoading  : false,
    getListUserEror : false,

    createUserResult  : false,
    createUserLoading  : false,
    createUserEror : false,

    deleteUserResult  : false,
    deleteUserLoading  : false,
    deleteUserEror : false,

    detailUserResult:false,

    updateUserResult  : false,
    updateUserLoading  : false,
    updateUserEror : false,
}

const user = (state = initialState, action)=>{
    switch(action.type){
        case GET_LIST_USER:
           
            return {
                ...state,
                getListUserResult: action.payload.data,
                getListUserLoading: action.payload.loading,
                getListUserEror: action.payload.errorMessage
            }
       
        case CREATE_USER:
            
            return {
                ...state,
                createUserResult: action.payload.data,
                createUserLoading: action.payload.loading,
                createUserEror: action.payload.errorMessage
            }

        case DELETE_USER:
            return {
                ...state,
                deleteUserResult: action.payload.data,
                deleteUserLoading: action.payload.loading,
                deleteUserEror: action.payload.errorMessage
            }
        
        case DETAIL_USER:
            return{
                ...state,
                detailUserResult:action.payload.data
            }
        case UPDATE_USER:    
            return {
                ...state,
                updateUserResult: action.payload.data,
                updateUserLoading: action.payload.loading,
                updateUserEror: action.payload.errorMessage
            }
        default:
        return state
    
    }
}

export default user