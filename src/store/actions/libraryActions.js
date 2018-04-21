import {
  ADD_ALBUM
} from './types';

export const addAlbum = (album) => {
  return {
    type: ADD_ALBUM,
    album: album,
  };
}
