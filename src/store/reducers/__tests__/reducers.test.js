import { 
  library,
  searchResults,
 } from '../';
import { 
  ADD_ALBUM,
  REQUESTED_SEARCH,
  RECEIVED_SEARCH,
} from '../../actions/types';

describe('library reducer', () => {
  it('should return initial state', () => {
    expect(
      library(undefined, {}
      )
    ).toEqual(
      {
        albums: []
      }
    );
  });
  
  it('should handle ADD_ALBUM', () => {
    const album = {
      album: 'The Eminem Show',
      artist: 'Eminem',
      albumCover: '',
      year: '2002',
    };
    expect(
      library(
        {
          albums: [],
        },
        {
          type: ADD_ALBUM,
          album
        }
      )
    ).toEqual(
      {
        albums: [album],
      }
    );
  });
});

describe('searchResults reducer', () => {
  it('should return initial state', () => {
    expect(
      searchResults(undefined, {}
      )
    ).toEqual(
      {
        json: [],
        fetching: false,
      }
    );
  });

  it('should handle REQUESTED_SEARCH', () => {
    expect(
      searchResults(
        {
          json: [],
          fetching: false,
        },
        {
          type: REQUESTED_SEARCH,
        }
      )
    ).toEqual(
      {
        json: [],
        fetching: true,
      }
    )
  });

  it('should handle RECEIVED_SEARCH', () => {
    const searchResponse = {
      albums: {
        href: '',
        items: [{ }],
        limit: 3,
        next: '',
        offset: 0,
        previous: null,
        total: 545,
      }
    }
    expect(
      searchResults(
        {
          json: [],
          fetching: false,
        },
        {
          type: RECEIVED_SEARCH,
          json: searchResponse
        }
      )
    ).toEqual(
      {
        json: searchResponse,
        fetching: false,
      }
    )
  });
});