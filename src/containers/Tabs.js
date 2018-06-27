import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MENU, TABS } from '@/actions';
import Tabs from '@/components/Tabs';

class ContainersTabs extends Component {
  static propTypes = {
    tabs: PropTypes.array.isRequired,
    breadcrumb: PropTypes.object.isRequired,
    addTabsList: PropTypes.func.isRequired,
    removeTabsList: PropTypes.func.isRequired,
    reserveTabsList: PropTypes.func.isRequired,
    clearTabsList: PropTypes.func.isRequired,
    setMenuKey: PropTypes.func.isRequired,
  }
  componentDidUpdate() {
    const have = this.props.tabs.some(item => item.path === this.props.history.location.pathname);
    const tab = this.props.breadcrumb.list.find(item => item.path === this.props.history.location.pathname);
    if (!have && tab) {
      this.props.addTabsList(tab);
    }
  }
  render() {
    return <Tabs {...this.props} />;
  }
};

const mapStateToProps = state => ({
  breadcrumb: state.breadcrumb,
  tabs: state.tabs,
});

const mapDispatchToProps = {
  addTabsList: TABS.add,
  removeTabsList: TABS.remove,
  reserveTabsList: TABS.reserve,
  clearTabsList: TABS.clear,
  setMenuKey: MENU.setKey,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainersTabs);