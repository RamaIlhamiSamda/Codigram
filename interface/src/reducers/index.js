import { combineReducers} from 'redux'
import UserReducer from './user'
import PostingReducer from './posting'

export default combineReducers({
    UserReducer,PostingReducer
})