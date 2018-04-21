import { connect } from 'react-redux';
import { fetchSearchResults } from '../../store/actions';
import Search from './Search';

const mapStateToProps = state => {
  console.log(state);
  return {
      searchResults: state.searchResults,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSearchResults: (term) => dispatch(fetchSearchResults(term)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Search)
