
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootReducer from '../reducers';
import rootSaga from '../sagas';

/**
 * Set the store global configurations (loggers, middlewares and etc)
 * 
 * @returns The store object.
 */
export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer,
    applyMiddleware(
      logger,
      sagaMiddleware
    )
  );

  sagaMiddleware.run(rootSaga);

  return store;
}