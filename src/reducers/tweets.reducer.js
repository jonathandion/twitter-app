const initialState: {
  tweets: Array<Object>,
  isFetching: boolean,
  errors: boolean,
} = {
  tweets: [],
  isFetching: true,
  errors: false,
};

const tweets = (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case 'TWEETS_IS_LOADED':
      return {
        ...state,
        tweets: action.tweets,
        isFetching: action.isFetching,
        errors: false,
      };
    case 'TWEETS_LOAD_FAILURE':
      return {
        ...state,
        errors: true,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};

export default tweets;
