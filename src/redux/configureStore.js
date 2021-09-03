/* eslint-disable import/prefer-default-export */
import { createStore, combineReducers, applyMiddleware } from 'redux';

import logger from 'redux-logger';

import thunk from 'redux-thunk';

import booksReducer from './books/books';

const reducer = combineReducers({
  booksReducer,
});

export const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);
