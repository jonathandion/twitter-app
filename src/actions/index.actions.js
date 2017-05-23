// @flow

export const fetchTweets = (user: string) => {
  return {type: 'FETCH_TWEETS', user};
};
