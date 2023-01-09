import { call,  put } from "redux-saga/effects";
// import { getUsersData } from "../../actions/userActions";
import { setUser } from "../../actions/userActions";
import { requestGetUser } from "../requests/user";
// Our worker Saga: will perform the async setuser task

// To pause the execution inside the generator, we use the statement yield:
export function* handleGetUser(action) {
    // here the asterisk marks this as a generato
  try {
    // call() is a blocking effect, which means that the saga will wait for promise resolving before moving on to the next step
    const response = yield call(requestGetUser);
    // Inside the generator function, we use a special keyword called yield which is used to pause the function inside itself.
  //  object destructuring const {data}=response;
    const { data } = response;
    //By calling the put function, we can trigger actions just like we did with dispatch. 
    // It allows adjusting and handling of our reducer to handle our action
    //put, is for dispatching the reducer from the saga, put is accepting object inside it, in our case, we using type and payload as the object.
     // Dispatch an action to the store using put()
    yield put(setUser(data));// We pause the execution here
    console.log('Back again');
     // When we resume, we are herex  
  } catch (error) {
    console.log(error);
  }
}