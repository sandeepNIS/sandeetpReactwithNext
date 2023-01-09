import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchPostsRequest, getUsersData, setUser } from "../actions/userActions";
const getPosts = () =>
  axios.get("http://localhost:3080/account/list");

  function* fetchPostsSaga() {
    try {
      const response = yield call(getPosts);
      yield put(
        getUsersData({
            usersData: response.data
        })
      );
    } catch (e) {
      yield put(
        fetchPostsFailure({
          error: e.message
        })
      );
    }
  }

function* postsSaga() {
  yield all([takeLatest(fetchPostsRequest, fetchPostsSaga)]);
}

export default postsSaga;
function fetchPostsFailure(arg0: { error: any; }): any {
    throw new Error("Function not implemented.");
}

