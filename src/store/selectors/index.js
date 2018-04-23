import { createSelector } from 'reselect';
import _ from 'lodash';

// searchResults selectors
export const getSearchResults = (state) => state.searchResults.json
export const getSearchResultsFetchFlag = (state) => state.searchResults.fetching

// searchResults memoized reselect function
export const getAlbumListState = createSelector(
  [getSearchResults],
  (json) => {
    return _.map(
      _.get(json, 'albums.items', []),
      item => ({
        album: item.name,
        artist: item.artists.map(artist => artist.name).join(', '),
        year: item.release_date.substr(0,4),
        albumCover: item.images[0].url,
      })
    );
  }
)

export const getLibraryAlbums = (state) => state.library.albums
