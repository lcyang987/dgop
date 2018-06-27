import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { LOGIN } from '@/actions';
import LoginForm from '@/components/Login';
import loginBg from '@/images/login_bg.jpg';

class ContainersLogin extends Component {
  static propTypes ={
    login: PropTypes.func.isRequired,
  }
  render() {
    return (
      <div style={{ backgroundImage: `url(${loginBg})`, height: '100vh', backgroundPositionY: 'center' }}>
        <LoginForm login={this.props.login} />
      </div>
    );
  }
};

const mapDispatchToProps = {
  login: LOGIN.login,
};

export default connect(null, mapDispatchToProps)(ContainersLogin);