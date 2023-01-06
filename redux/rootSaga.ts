import { takeLatest } from "redux-saga/effects";
import { handleGetUser } from "./sagas/handlers/user";
import { GET_USER } from "./actions/userActions";
// Our watcher Saga: spawn a new incrementAsync task on each  
export function* watcherSaga() {
  yield takeLatest(GET_USER, handleGetUser);
}

// import { all, fork } from "redux-saga/effects";
// import postsSaga from "./sagas/sagas";

// export function* rootSaga() {
//   yield all([fork(postsSaga)]);
// }