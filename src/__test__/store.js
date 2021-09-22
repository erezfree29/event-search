/* eslint-disable import/prefer-default-export */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import logger from 'redux-logger';

import laLigaReducer from '../app/redux/laliga';

import premierReducer from '../app/redux/premer';

import seriaReducer from '../app/redux/seriaA';

const reducer = combineReducers({
  laLigaReducer,
  premierReducer,
  seriaReducer,
});

export const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);
