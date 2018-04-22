import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import AlbumList from '../AlbumList';

jest.mock('../../Album/Album'); // mock Album

// check render
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AlbumList />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// snapshot
it('renders correctly', () => {
  const tree = renderer
    .create(
        <AlbumList />
  )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
