import userData from "./userReducer";
import { combineReducers } from 'redux'

const RootReducer = combineReducers({
    userData: userData
})

export default RootReducer