import {combineReducers} from 'redux';

import items from './users';

const rootReducer = combineReducers({
    items,
});

export default rootReducer;
