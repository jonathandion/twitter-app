// @flow

import React from 'react';
import Tweet from '../Tweet/Tweet.component';
import './Tweets.style.css';

const Tweets = ({tweets}: {tweets: Array<Object>}) => {
  return (
    <div className="Tweets">
      {tweets.map((tweet: Object) => <Tweet key={tweet.id} {...tweet} />)}
    </div>
  );
};

export default Tweets;
