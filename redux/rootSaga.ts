// // Now, we create a root saga which will wait for the actions to be taken.
import { takeEvery, takeLatest } from "redux-saga/effects";
import { handleGetUser } from "./sagas/handlers/user";
import { GET_USER } from "./actions/userActions";
// Our watcher Saga: spawn a new incrementAsync task on each  
export function* watcherSaga() {
  yield takeLatest(GET_USER, handleGetUser);
}
// This root saga will control the saga pattern by getting the actions from generator and communicate with the store.



//takeLatest, is for firing an async request. But, if takeLatest fire off, any async task that running before will be canceled. It’s good for our case, in this case, we don’t want to fire off a create todo every single time user making a request when already made a request.

// import { all, fork } from "redux-saga/effects";
// import postsSaga from "./sagas/sagas";

// export function* rootSaga() {
//   yield all([fork(postsSaga)]);
// }