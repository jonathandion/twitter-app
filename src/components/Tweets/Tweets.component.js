// @flow

import React from 'react';
import Tweet from '../Tweet/Tweet.component';
import './Tweets.style.css';

const Tweets = ({data}: {data: Array<Object>}) => {
  return (
    <div className="c-cards">
      {data.map((tweet: Object) => <Tweet key={tweet.id} {...tweet} />)}
    </div>
  );
};

export default Tweets;
