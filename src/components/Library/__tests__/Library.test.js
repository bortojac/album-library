import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Library from '../Library';

jest.mock('../../AlbumList');

// check render
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Library />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// snapshot
it('renders correctly', () => {
  const tree = renderer
    .create(<Library />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
