import Axios from "axios";
import { call, put, takeEvery, all } from "redux-saga/effects";
import {
  FETCH_DOG_BREEDS,
  fetchDogBreedsSuccess,
  fetchDogPictureSuccess,
  FETCH_DOG_PICTURE
} from "./actions";

const fetchDogBreeds = function*() {
  try {
    const response = yield call(
      Axios.get,
      "https://dog.ceo/api/breeds/list/all"
    );
    if (response.status === 200) {
      yield put(fetchDogBreedsSuccess(response.data.message));
    }
  } catch (e) {
    // yield put(fetchDogBreedsError(response.data.message));
  }
};

const fetchDogPicture = function*({ payload }) {
  try {
    const response = yield call(
      Axios.get,
      `https://dog.ceo/api/breed/${payload}/images/random`
    );
    if (response.status === 200) {
      yield put(fetchDogPictureSuccess(response.data.message));
    }
  } catch (e) {
    //
  }
};

const watchFetchDogBreeds = function*() {
  yield takeEvery(FETCH_DOG_BREEDS, fetchDogBreeds);
};

const watchFetchDogPicture = function*() {
  yield takeEvery(FETCH_DOG_PICTURE, fetchDogPicture);
};

export const dogSagas = function*() {
  yield all([watchFetchDogBreeds(), watchFetchDogPicture()]);
};
