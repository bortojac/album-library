import { getAlbumListState } from '../';

describe('selectors', () => {
  const mockState = {
    searchResults: {
      json: {
        albums: {
          href: '',
          items: [{
            album_type: "album",
            artists: [{ name: "Eminem" }],
            name: "The Eminem Show",
            href: "",
            images: [{ height: 75, url: 'https://testingImagesasldkfjadslfkj.com' }],
            release_date: "2017-12-15",
          }],
          limit: 3,
          next: '',
          offset: 0,
          previous: null,
          total: 545,
        }
      },
      fetching: false,
    },
    library: {
      albums: [{}],
    }
  };

  it('getAlbumListState should return array of Objects with album, artist, year, albumCover', () => {
    expect(
      getAlbumListState(mockState)
    ).toEqual([
      {
        album: "The Eminem Show",
        artist: "Eminem",
        year: "2017",
        albumCover: 'https://testingImagesasldkfjadslfkj.com',
      }
    ]);
  });
});