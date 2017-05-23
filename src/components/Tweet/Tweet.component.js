// @flow

import React from 'react';
import {Card, Icon} from 'antd';
import './Tweet.style.css';

const Tweet = ({
  text,
  favorite_count,
}: {
  text: string,
  favorite_count: string,
}) => {
  return (
    <Card className="Tweet">
      <p>{text}</p>
      <div className="Tweet__info">
        <Icon type="heart" /><span>{favorite_count}</span>
      </div>
    </Card>
  );
};

export default Tweet;
