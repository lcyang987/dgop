import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MENU, BREADCRUMB, LOGIN, USERCENTER } from '@/actions';
import MenuCollapsed from '@/components/head/MenuCollapsed';
import TopBreadcrumb from '@/components/head/TopBreadcrumb';
import UserDropdown from '@/components/head/UserDropdown';
import UserCenter from '@/components/head/UserCenter';

class ContainersHead extends Component {
  static propTypes = {
    breadcrumb: PropTypes.object.isRequired,
    collapsed: PropTypes.bool.isRequired,
    visible: PropTypes.bool.isRequired,
    userCenterData: PropTypes.object.isRequired,
    setCollapsed: PropTypes.func.isRequired,
    setBreadcrumbKey: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    show: PropTypes.func.isRequired,
    hide: PropTypes.func.isRequired,
    userCenterGet: PropTypes.func.isRequired,
  }
  componentWillMount() {
    this.props.userCenterGet()
  }
  componentDidUpdate() {
    if (this.props.history.location.pathname !== this.props.breadcrumb.key[0]) {
      this.props.setBreadcrumbKey(this.props.history.location.pathname)
    }
  }
  render() {
    return (
      <React.Fragment>
        <MenuCollapsed collapsed={this.props.collapsed} setCollapsed={this.props.setCollapsed} />
        <TopBreadcrumb breadcrumb={this.props.breadcrumb} />
        <UserDropdown show={this.props.show} logout={this.props.logout} userCenterData={this.props.userCenterData} />
        <UserCenter visible={this.props.visible} hide={this.props.hide} userCenterData={this.props.userCenterData} />
      </React.Fragment>
    )
  }
};

const mapStateToProps = state => ({
  breadcrumb: state.breadcrumb,
  collapsed: state.menu.collapsed,
  visible: state.userCenter.visible,
  userCenterData: state.userCenter.data,
});

const mapDispatchToProps = {
  setCollapsed: MENU.setCollapsed,
  setBreadcrumbKey: BREADCRUMB.setKey,
  logout: LOGIN.logout,
  show: USERCENTER.show,
  hide: USERCENTER.hide,
  userCenterGet: USERCENTER.userCenterGet,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainersHead);
