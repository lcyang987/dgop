import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MEMBER_MANAGER } from '@/actions';
import ThisInfo from '@/components/memberManager/auditInfo';

class ContainersMemberManagerAuditInfo extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
    visible: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    infoData: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    hide: PropTypes.func.isRequired,
  }
  render() {
    return <ThisInfo ref="info" {...this.props} />
  }
};

const mapStateToProps = state => {
  const data = state.memberManager;
  return {
    table: data.table.data,
    searchData: data.table.searchData,
    visible: data.auditInfo.visible,
    loading: data.auditInfo.loading,
    infoData: data.auditInfo.data,
    title: data.auditInfo.title,
  };
};

const methods = MEMBER_MANAGER;

const mapDispatchToProps = {
  hide: methods.auditInfoHide,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainersMemberManagerAuditInfo)