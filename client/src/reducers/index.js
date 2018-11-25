import { combineReducers } from 'redux';
import books_reducer from './books_reducer';
import user_reducer from './user_reducer';

const rootReducer = combineReducers({
    books_reducer,
    user_reducer
});

export default rootReducer;