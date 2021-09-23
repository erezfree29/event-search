/* eslint-disable import/prefer-default-export */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import logger from 'redux-logger';

import laLigaReducer from './laliga';

import premierReducer from './premer';

import seriaReducer from './seriaA';

import bundesLigaReducer from './bumdesliga';

const reducer = combineReducers({
  laLigaReducer,
  premierReducer,
  seriaReducer,
  bundesLigaReducer,
});

export const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);
