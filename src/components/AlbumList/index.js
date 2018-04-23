import { connect } from 'react-redux';
import { getAlbumListState, getLibraryAlbums } from '../../store/selectors';
import { addAlbum } from '../../store/actions';
import AlbumList from './AlbumList';

const mapStateToProps = state => {
  return {
    albumList: getAlbumListState(state),
    libraryAlbumList: getLibraryAlbums(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addAlbum: (album) => dispatch(addAlbum(album)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(AlbumList)
