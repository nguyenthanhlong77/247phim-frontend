import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { movieActions } from '../slice/movie';
import publicApi from '../../api/publicApi';
import userApi from '../../api/userApi';

function* handleFetchMovie(action) {
  try {
    const res = yield call(publicApi.getMovieByURL, action.payload);
    yield put(movieActions.selectedSuccess(res.movie));
  } catch (error) {
    yield put(movieActions.selectedFailed);
  }
}

function* handleUpdateView(action) {
  try {
    const res = yield call(publicApi.updateViews, action.payload);
    yield put(movieActions.updateMovieSuccess(res.movieUpdated));
  } catch (error) {
    yield put(movieActions.updateMovieFailed);
  }
}

function* handleReloadData(action) {
  const res = yield call(publicApi.getMovie, action.payload);
  yield put(movieActions.updateMovieSuccess(res.movie));
}

function* handleCreateNewComment(action) {
  try {
    const res = yield call(userApi.addNewComment, action.payload);
    yield put(movieActions.addNewCommentSussces(res.commentsUpdated));
  } catch (error) {}
}
function* handleUpdateRate(action) {
  try {
    const res = yield call(publicApi.updateRate, action.payload);
    yield put(movieActions.updateMovieSuccess(res.movieUpdated));
  } catch (error) {
    yield put(movieActions.updateMovieFailed);
  }
}

export default function* movieSaga() {
  yield takeLatest(movieActions.isSelecting.type, handleFetchMovie);
  yield takeEvery(movieActions.updateView.type, handleUpdateView);
  yield takeEvery(movieActions.updateRate.type, handleUpdateRate);
  yield takeEvery(movieActions.addNewComment.type, handleCreateNewComment);
  yield takeEvery(movieActions.reloadData.type, handleReloadData);
}
