import { takeLatest } from "redux-saga";
import { call, put } from "redux-saga/effects";
import { fetchDataSuccess } from "../store/actionTypes";

function* fetchData() {
  const data = yield call(fetch, "https://jsonplaceholder.typicode.com/photos");
  yield put(fetchDataSuccess(data));
}
function* fetchSaga() {
  yield* takeLatest("FETCH_DATA", fetchData);
}
export default fetchSaga;
