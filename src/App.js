// @flow

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Spin, Alert} from 'antd';

import {fetchTweets} from './actions/index.actions';

import Tweets from './components/Tweets/Tweets.component';
import Nav from './components/Nav/Nav.component';
import Hero from './components/Hero/Hero.component';

import './App.css';

interface TwitterUser {
  fullname: string,
  username: string,
}

const twitterUsers: Array<TwitterUser> = [
  {
    fullname: 'Donald Trump',
    username: 'realDonaldTrump',
  },
  {
    fullname: 'Hillary Clinton',
    username: 'hillaryclinton',
  },
  {
    fullname: 'Frank Underwood',
    username: 'Frank_Underwood',
  },
];

export class App extends Component {
  state: {
    selected: string,
  } = {
    selected: 'realDonaldTrump',
  };
  componentDidMount() {
    this.fetchTweets(this.state.selected);
  }

  fetchTweets = (value: string) => {
    this.props.dispatch(fetchTweets(value));
    this.setState({selected: value});
  };

  render() {
    const {tweets = [], isFetching, errors} = this.props;

    return (
      <main className="App">
        <Hero user={this.state.selected} tweets={tweets} />
        <div className="o-container">
          <Nav
            fetchTweets={this.fetchTweets}
            selected={this.state.selected}
            users={twitterUsers}
          />
          {renderTweets({data: tweets, errors, isFetching})}
        </div>
      </main>
    );
  }
}

function renderTweets({
  data,
  errors,
  isFetching,
}: {
  data: Array<Object>,
  errors: string,
  isFetching: Boolean,
}) {
  if (isFetching) {
    return <Spin />;
  } else if (errors) {
    return (
      <Alert
        message="Error"
        description="A problem occured"
        type="error"
        showIcon
      />
    );
  } else if (data.length === 0 && isFetching === false) {
    return (
      <Alert
        message="Warning"
        description="No tweets :("
        type="warning"
        showIcon
      />
    );
  }

  return <Tweets data={data} />;
}

const mapStateToProps = (state: Object) => {
  return {
    ...state.tweets,
  };
};

export default connect(mapStateToProps)(App);
