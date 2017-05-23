// @flow

import React from 'react';
import {Input, Radio} from 'antd';

import './Nav.style.css';

const renderButtons = (users: Array<Object> = []) => {
  return users.map(
    ({fullname, username}: {fullname: string, username: string}, i: number) => {
      return (
        <Radio.Button className="Nav__radio-button" key={i} value={username}>
          {fullname}
        </Radio.Button>
      );
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
    <nav className="Nav">
      <Radio.Group
        className="Nav__radio-group"
        value={selected}
        onChange={e => fetchTweets(e.target.value)}
      >
        {renderButtons(users)}
      </Radio.Group>
      <div className="Nav__search-wrapper">
        <Input.Search placeholder="Search username" onSearch={fetchTweets} />
      </div>
    </nav>
  );
};

export default Header;
