import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import { LocaleProvider, message } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import App from './App';
import Login from './Login';

class Root extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    login: PropTypes.bool.isRequired,
  }
  componentWillMount() {
    if (!this.props.login) {
      this.props.history.replace('/');
    }
    message.config({
      top: 0,
      duration: 10,
      maxCount: 3,
    });
  }
  render() {
    return (
      <LocaleProvider locale={zh_CN}>
        <Provider store={this.props.store}>
          {
            this.props.login ?
              <Route path='/' component={App} /> :
              <Route path='/' component={Login} />
          }
        </Provider>
      </LocaleProvider>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  store: ownProps.store,
  login: state.login,
})

export default withRouter(connect(mapStateToProps)(Root));