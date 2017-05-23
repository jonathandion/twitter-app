// @flow

import React from 'react';
import {Card} from 'antd';
import './Tweet.style.css';

const Tweet = ({text}: {text: string}) => {
  return (
    <Card className="c-card">
      <p>{text}</p>
    </Card>
  );
};

export default Tweet;
