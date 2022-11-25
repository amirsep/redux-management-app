import { combineReducers } from 'redux';
import BookList from './bookreducer';
import UserList from './userreducer';
import ApiList from './apireducer';

const MainReducer = combineReducers({
  BookList,
  UserList,
  ApiList,
});

export default MainReducer;
