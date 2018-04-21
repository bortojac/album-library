import {
  REQUESTED_SEARCH,
  RECEIVED_SEARCH,
} from './types';
import { accessToken } from './authActions';


export const requestSearch = (term) => {
  return {
    type: REQUESTED_SEARCH,
    term: term,
  };
}

export const receiveSearch = (jsonResponse) => {
  return {
    type: RECEIVED_SEARCH,
    json: jsonResponse,
  };
}

export const fetchSearchResults = (term) => {
  return dispatch => {
    dispatch(requestSearch(term));
    return fetch(
      `https://api.spotify.com/v1/search?type=album&q=${term}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
      }
    ).then(
      response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('The Request to Spotify API failed');
      },
      networkError => console.log(networkError.message)
    ).then(jsonResponse => dispatch(receiveSearch(jsonResponse)));
  };
}