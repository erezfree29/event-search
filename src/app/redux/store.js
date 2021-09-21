/* eslint-disable import/prefer-default-export */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import logger from 'redux-logger';

import matchesReducer from './matches';

const reducer = combineReducers({
  matchesReducer,
});

export const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);
