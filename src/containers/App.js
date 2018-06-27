import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DICT } from '@/actions';
import App from '@/components/App';

class ContainersApp extends Component {
  static propTypes = {
    collapsed: PropTypes.bool.isRequired,
    dictGet: PropTypes.func.isRequired,
  }
  componentWillMount() {
    if (this.props.history.location.pathname === '/') {
      this.props.history.replace('/Home');
    }
    this.props.dictGet();
  }
  render() {
    return <App {...this.props} />;
  }
}

const mapStateToProps = state => ({
  collapsed: state.menu.collapsed,
})

const mapDispatchToProps = {
  dictGet: DICT.dictGet,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersApp);
