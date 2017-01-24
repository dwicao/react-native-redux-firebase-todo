import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as todoActions from '../../actions/todoActions';
import Signup from '../LoginSignup/Signup';
import Main from '../Screens/Main';

class SignupScreen extends Component {
  render() {
    if (this.props.userData.email) {
      return <Main />;
    }

    return <Signup />;
  }
}

SignupScreen.propTypes = {
  userData: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
	return {
    userData: state.userData,
	};
}

export default connect(mapStateToProps)(SignupScreen);
