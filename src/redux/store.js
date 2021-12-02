/* eslint-disable import/prefer-default-export */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import recepiesReducer from './recepies';

const reducer = combineReducers({
  recepiesReducer,
});

export const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);
