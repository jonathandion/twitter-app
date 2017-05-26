import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import renderer from 'react-test-renderer';

describe('<App />', function() {
  it('renders correctly', function() {
    const dispatch = jest.fn();
    const props = {
      dispatch,
      tweets : []
    };
    const tree = renderer.create(<App {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
