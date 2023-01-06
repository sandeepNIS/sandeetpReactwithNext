import { combineReducers } from "redux";
import usersReduce from "./userRed";
import usersReducer from "./userReducer";

// Import all reducers


const reducers = combineReducers({
user: usersReduce, //user is a key usersReduce is a value that we are storing in our redux store
    users: usersReducer
//     users is a key
//     usersReducer is a value

//  combine reducer is a helper function which combines 
//  all the reducers into single function with key and value pairs

})
// export type RootState = ReturnType<typeof reducers>;

export default reducers;