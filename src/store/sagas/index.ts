/**
 * The module exporting all sagas files, for the future when the project will be bigger ;)
 */

import { all } from 'redux-saga/effects'
import homeSaga from './homeSaga';

export default function* rootSaga() {
  yield all([homeSaga()])
}
