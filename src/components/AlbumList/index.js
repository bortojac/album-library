import { connect } from 'react-redux';
import { getAlbumListState } from '../../store/selectors';
import AlbumList from './AlbumList';

const mapStateToProps = state => {
  console.log(getAlbumListState(state));
  return {
    albumList: getAlbumListState(state),
  };
};

export default connect(mapStateToProps)(AlbumList)
