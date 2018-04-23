import { connect } from 'react-redux';
import App from './App';
import { getAccessToken } from '../../store/actions';

const mapStateToProps = state => ({ })

const mapDispatchToProps = dispatch => {
  return {
    getAccessToken: () => {
      dispatch(getAccessToken())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
