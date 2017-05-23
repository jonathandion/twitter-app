import {combineReducers} from 'redux';

import tweets from './tweets.reducer';

const reducers = combineReducers({
  tweets,
});

export default reducers;
