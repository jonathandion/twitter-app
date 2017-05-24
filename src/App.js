// @flow

import React, {Component} from 'react';
import {connect} from 'react-redux';
import Alert from 'antd/lib/alert';
import Spin from 'antd/lib/spin';

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

const withLoadingAndErrorIndicator = Component => props => {
  if (props.isFetching) {
    return <Spin />;
  } else if (props.errors) {
    return (
      <Alert
        className="Alert"
        message=":("
        description="No username found"
        type="error"
        showIcon
      />
    );
  } else if (props.tweets.length === 0 && props.isFetching === false) {
    return (
      <Alert
        className="Alert"
        message=":("
        description="No tweets for that user"
        type="warning"
        showIcon
      />
    );
  }
  return <Component {...props} />;
};

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
    const {tweets = []} = this.props;
    const enhanceTweets = withLoadingAndErrorIndicator(Tweets);

    return (
      <main className="App">
        <Hero user={this.state.selected} tweets={tweets} />
        <div className="o-container">
          <Nav
            fetchTweets={this.fetchTweets}
            selected={this.state.selected}
            users={twitterUsers}
          />
          {enhanceTweets(this.props)}
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state: Object) => {
  return {
    ...state.tweets,
  };
};

export default connect(mapStateToProps)(App);
