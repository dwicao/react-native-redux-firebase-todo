import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as todoActions from '../../actions/todoActions';
import Login from '../LoginSignup/Login';
import Main from '../Screens/Main';

class LoginScreen extends Component {
  render() {
    if (this.props.userData.email) {
      return <Main />;
    }

    return <Login />;
  }
}

LoginScreen.propTypes = {
  userData: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
	return {
    userData: state.userData,
	};
}

export default connect(mapStateToProps)(LoginScreen);
