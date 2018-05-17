import * as constants from "../constants";
import { takeLatest, put, all } from "redux-saga/effects";

function* setFilterMask(action) {
  try {
    yield put({ type: constants.SET_FILTER_MASK_SUCCESS, mask: action.mask });
  } catch (e) {
    yield put({ type: constants.SET_FILTER_MASK_FAILURE, message: e.message });
  }
}

export default function* sagas() {
  yield all([takeLatest(constants.SET_FILTER_MASK, setFilterMask)]);
}
