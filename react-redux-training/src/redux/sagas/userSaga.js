import { call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  CREATE_USER_REQUEST,
  UPDATE_USER_REQUEST,
  DELETE_USER_REQUEST
} from "../actions/userActions";

import {
  fetchUsersApi,
  createUserApi,
  updateUserApi,
  deleteUserApi
} from "../../api/userApi";

/**
 * Worker Saga: GET users
 */
function* fetchUsersSaga() {
  try {
    const response = yield call(fetchUsersApi);
    yield put({ type: FETCH_USERS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_USERS_FAILURE, payload: error.message });
  }
}

/**
 * POST
 */
function* createUserSaga(action) {
  try {
    yield call(createUserApi, action.payload);
    yield put({ type: FETCH_USERS_REQUEST }); // refresh list
  } catch (error) {
    yield put({ type: FETCH_USERS_FAILURE, payload: error.message });
  }
}

/**
 * PUT
 */
function* updateUserSaga(action) {
  try {
    const { id, user } = action.payload;
    yield call(updateUserApi, id, user);
    yield put({ type: FETCH_USERS_REQUEST });
  } catch (error) {
    yield put({ type: FETCH_USERS_FAILURE, payload: error.message });
  }
}

/**
 * DELETE
 */
function* deleteUserSaga(action) {
  try {
    yield call(deleteUserApi, action.payload);
    yield put({ type: FETCH_USERS_REQUEST });
  } catch (error) {
    yield put({ type: FETCH_USERS_FAILURE, payload: error.message });
  }
}

/**
 * Watcher Saga
 */
export default function* userSaga() {
  yield takeLatest(FETCH_USERS_REQUEST, fetchUsersSaga);
  yield takeLatest(CREATE_USER_REQUEST, createUserSaga);
  yield takeLatest(UPDATE_USER_REQUEST, updateUserSaga);
  yield takeLatest(DELETE_USER_REQUEST, deleteUserSaga);
}
