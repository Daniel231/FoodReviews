import { call, put, takeLatest, all } from 'redux-saga/effects'
import { ActionTypes } from "../../constant/action-type";
import * as Api from '../../services/shows'

/**
 * Fetching shows options for autocomplete text box
 * 
 * @param action - Holds the search text for searching options shows names that includes the search text.
 * 
 * @returns Optional shows names
 */
function* fetchShowsNamesOptions(action) {
   try {
      const showsNames = yield call(Api.getShowsNamesOptions, action.payload);
      yield put({type: ActionTypes.FETCH_SHOWS_NAMES_SUCCESS, showsOptions: showsNames});
   } catch (e) {
      yield put({type: ActionTypes.FETCH_SHOWS_NAMES_FAIL, message: e.message});
   }
}

/**
 * Fetching shows by search text from the user.
 * 
 * @param action - Holds the search text that use for searching shows whos their names includes the search text.
 * 
 * @returns TV shows with image and name.
 */
function* fetchShows(action) {
   try {
      const shows = yield call(Api.getShows, action.payload);
      yield put({type: ActionTypes.FETCH_SHOWS_SUCCESS, shows: shows});
   } catch (e) {
      yield put({type: ActionTypes.FETCH_SHOWS_FAIL, message: e.message});
   }
}

export default function* homeSaga() {
    yield all([
        takeLatest(ActionTypes.FETCH_SHOWS_REQUEST, fetchShows),
        takeLatest(ActionTypes.FETCH_SHOWS_NAMES_REQUEST, fetchShowsNamesOptions),
    ])
  }
  