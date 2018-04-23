import { combineReducers } from 'redux';
import _ from 'lodash';
import {
  RECEIVED_SEARCH,
  REQUESTED_SEARCH,
  ADD_ALBUM,
} from '../actions/types';

export const searchResults = (
  state = {
    json: [],
    fetching: false,
  }, action) => {
  switch (action.type) {
    case REQUESTED_SEARCH:
      return Object.assign({}, state, {
        fetching: true,
      });
    case RECEIVED_SEARCH:
      return Object.assign({}, state, {
        json: action.json,
        fetching: false,
      });
    default:
      return state;
  }
}

const addAlbumToState = (state, album) => {
  let clone = _.cloneDeep(state);
  clone.albums.push(album);    // add album obj to deep clone of state
  return clone;
}

export const library = (
  state = {
    albums: [],
  },
  action
) => {
  switch (action.type) {
    case ADD_ALBUM:
      return addAlbumToState(state, action.album);
    default:
      return state;
  }
}

const rootReducer = combineReducers(
  {
    searchResults,
    library,
    }
)

export default rootReducer;