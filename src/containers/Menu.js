import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MENU } from '@/actions';
import MenuList from '@/components/Menu';

class ContainersMenu extends Component {
  static propTypes = {
    menu: PropTypes.object.isRequired,
    breadcrumb: PropTypes.object.isRequired,
    getMenu: PropTypes.func.isRequired,
    setMenuKey: PropTypes.func.isRequired,
  }
  componentWillMount() {
    this.props.getMenu();
  }
  componentDidUpdate() {
    if (this.props.history.location.pathname !== this.props.breadcrumb.key[0]) {
      this.props.setMenuKey(this.props.history.location.pathname);
    }
  }
  render() {
    return <MenuList {...this.props} />;
  }
}

const mapStateToProps = state => ({
  menu: state.menu,
  breadcrumb: state.breadcrumb
});

const mapDispatchToProps = {
  getMenu: MENU.getList,
  setMenuKey: MENU.setKey,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainersMenu);