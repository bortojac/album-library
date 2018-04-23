import * as actions from '../';
import {
  ADD_ALBUM,
  REQUESTED_SEARCH,
  RECEIVED_SEARCH,
} from '../types';

describe('actions', () => {
  it('should create an action to ADD_ALBUM', () => {
    const album = {
      album: 'The Eminem Show',
      artist: 'Eminem',
      albumCover: '',
      year: '2002',
    };
    const expectedAction = {
      type: ADD_ALBUM,
      album
    };
    expect(actions.addAlbum(album)).toEqual(expectedAction);
  });
  
  it('should create an action notifying REQUESTED_SEARCH', () => {
    const expectedAction = {
      type: REQUESTED_SEARCH,
      term: 'test'
    };
    expect(actions.requestSearch('test')).toEqual(expectedAction);
  });

  it('should create an action notifying RECEIVED_SEARCH', () => {
    const jsonResponse = {
      albums: {
        href: '',
        items: [{}],
        limit: 3,
        next: '',
        offset: 0,
        previous: null,
        total: 545,
      }
    }
    const expectedAction = {
      type: RECEIVED_SEARCH,
      json: jsonResponse,
    };
    expect(actions.receiveSearch(jsonResponse)).toEqual(expectedAction);
  });

  it('fetchSearchResults should create an action that returns a function', () => {
    expect(typeof actions.fetchSearchResults()).toEqual('function');
  });

  it('getAccessToken should create an action that returns a function', () => {
    expect(typeof actions.getAccessToken()).toEqual('function');
  });
});