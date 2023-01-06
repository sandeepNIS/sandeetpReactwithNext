import { call, put } from "redux-saga/effects";
// import { getUsersData } from "../../actions/userActions";
import { setUser } from "../../actions/userActions";
import { requestGetUser } from "../requests/user";
// Our worker Saga: will perform the async setuser task

// To pause the execution inside the generator, we use the statement yield:
export function* handleGetUser(action) {
  try {
    const response = yield call(requestGetUser);
    const { data } = response;
    //By calling the put function, we can trigger actions just like we did with dispatch. 
    // It allows adjusting and handling of our reducer to handle our action
     yield put(setUser(data));// We pause the execution here
    console.log('Back again'); // When we resume, we are here
  } catch (error) {
    console.log(error);
  }
}