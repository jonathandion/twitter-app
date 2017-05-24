// @flow

import {call, put, takeLatest} from 'redux-saga/effects';
import Api from '../api';

export function* fetchTweets({user}: {user: string}) {
  let URL: string = 'http://localhost:3000';

  if (process.env.NODE_ENV === 'production') {
    URL = '';
  }

  try {
    yield put({
      type: 'TWEETS_IS_LOADED',
      isFetching: true,
    });

    const response: Object = yield call(Api.getJSON, `${URL}/tweets/${user}`);

    if (response.error) {
      throw response.error;
    }

    yield put({
      type: 'TWEETS_IS_LOADED',
      tweets: response.tweets,
      isFetching: false,
    });
  } catch (error) {
    yield put({
      type: 'TWEETS_LOAD_FAILURE',
      errors: true,
      isFetching: false,
    });
  }
}

export function* watchForLoadTweets() {
  yield takeLatest('FETCH_TWEETS', fetchTweets);
}
