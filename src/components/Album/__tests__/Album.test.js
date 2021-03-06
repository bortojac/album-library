import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Album from '../Album';

Album.getDerivedStateFromProps = jest.fn(() => ({ disabled: false }));

// check render
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Album
    searchFlag={true}
    albumObj={{ album: '', artist: '', albumCover: '', year: '' }}
    addAlbum={() => ''}
    library={[{ album: '', artist: '', albumCover: '', year: '' }]}
    key={''}
  />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// snapshot
it('renders correctly', () => {
  const tree = renderer
    .create(
      <Album
        searchFlag={true}
        albumObj={{ album: '', artist: '', albumCover: '', year: '' }}
        addAlbum={() => ''}
        library={[{ album: '', artist: '', albumCover: '', year: '' }]}
        key={''}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
