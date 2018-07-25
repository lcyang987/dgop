import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import App from '@/components/App';

class ContainersApp extends Component {
  static propTypes = {
    collapsed: PropTypes.bool.isRequired,
  }
  componentWillMount() {
    if (this.props.history.location.pathname === '/') {
      this.props.history.replace('/Home');
    }
  }
  render() {
    return <App {...this.props} />;
  }
}

const mapStateToProps = state => ({
  collapsed: state.menu.collapsed,
})

export default connect(mapStateToProps)(ContainersApp);
