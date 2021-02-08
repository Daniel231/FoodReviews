import { call, put, takeLatest, all } from 'redux-saga/effects'
import { ActionTypes } from "../../constant/action-type";
import * as Api from '../../services/review'

function* fetchReviewsList(action: any) {
   try {
      const reviewsData = yield call(Api.getReviewsList, action.payload.page, action.payload.paginationAmount, action.payload.score, action.payload.productId);
      yield put({type: ActionTypes.FETCH_REVIEWS_SUCCESS, payload: reviewsData});
   } catch (e) {
      yield put({type: ActionTypes.FETCH_REVIEWS_FAIL, error: e.message});
   }
}

function* fecthReviewById(action: any) {
   try {
      const review = yield call(Api.getReviewById, action.payload);
      yield put({type: ActionTypes.FETCH_REVIEW_BY_ID_SUCCESS, payload: review});
   } catch (e) {
      yield put({type: ActionTypes.FETCH_REVIEW_BY_ID_FAIL, error: e.message});
   }
}

export default function* reviewsListSaga() {
    yield all([
        takeLatest(ActionTypes.FETCH_REVIEWS_REQUEST, fetchReviewsList),
        takeLatest(ActionTypes.FETCH_REVIEW_BY_ID_REQUEST, fecthReviewById),
    ])
  }
  