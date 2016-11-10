import { combineReducers } from 'redux';
import userReducer from './users';

// Add the user reducer to rootReducer
const rootReducer = combineReducers({
  users: userReducer
});

export default rootReducer;
