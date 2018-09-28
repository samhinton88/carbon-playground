import { combineReducers } from 'redux';
import users from './user_reducer';
import posts from './post_reducer';

export default function createReducer(asyncReducers) {
  return combineReducers({
    users,
    posts,
    ...asyncReducers
  });
}