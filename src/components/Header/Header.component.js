// @flow

import React from 'react';
import {Input, Radio} from 'antd';

import './Header.style.css';

const renderButtons = (users: Array<Object> = []) => {
  return users.map(
    ({fullname, username}: {fullname: string, username: string}, i: number) => {
      return <Radio.Button key={i} value={username}>{fullname}</Radio.Button>;
    }
  );
};

const Header = ({
  fetchTweets,
  selected,
  users,
}: {
  fetchTweets: Function,
  selected: string,
  users: Array<Object>,
}) => {
  return (
    <nav className="c-nav">
      <Radio.Group value={selected} onChange={e => fetchTweets(e.target.value)}>
        {renderButtons(users)}
      </Radio.Group>
      <div className="c-nav__search-wrapper">
        <Input.Search placeholder="Search username" onSearch={fetchTweets} />
      </div>
    </nav>
  );
};

export default Header;
