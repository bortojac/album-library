import { AUTH_RECEIVED } from './types'

export let accessToken = '';
let expireTime = '';
const clientID = 'ad214fc762c84b54bc98ed81d0f9ccab';
const redirectURI = 'http://localhost:3000';
const spotifyURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&redirect_uri=${redirectURI}&scope=playlist-modify-public&response_type=token`;


// we are using implicit grant flow.
// see https://developer.spotify.com/web-api/authorization-guide/#implicit_grant_flow

export const authReceived = () => {
  return {
    type: AUTH_RECEIVED
  };
}

export const getAccessToken = () => {
  return dispatch => {
    if (accessToken) {
      return accessToken;
    }

    //check if there is a token in the url 
    const accessTokenRegX = /access_token=([^&]*)/;  //we use () around [^&]* so that it captures the access token
    const expireTimeRegX = /expires_in=([^&]*)/;
    const urlAccessToken = window.location.href.match(accessTokenRegX);
    const urlExpireTime = window.location.href.match(expireTimeRegX);

    // if there is a token in the url, update the accessToken and expireTime, and set the timeout
    if (urlAccessToken && urlExpireTime) {
      accessToken = urlAccessToken[1]; // accessing the 'captured' value from the match function above, which is the token
      expireTime = urlExpireTime[1];
      window.setTimeout(() => accessToken = '', expireTime * 1000);  // on when the token expires, we need to reset the token. 
      window.history.pushState('Access Token', null, '/'); // clear the url so that the app doesn't try to grab the token after it's expired
    }
    else {
      window.location = spotifyURL; //no accessToken and also no accessToken in the URL = redirect the user to the spotifyURL
    }
    dispatch(authReceived())
  }
}