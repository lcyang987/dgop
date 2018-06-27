import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AUDIT_MEMBER } from '@/actions';
import ThisSearchForm from '@/components/audit/auditMember/searchForm';

class ContainersAuditMemberSearch extends Component {
  static propTypes = {
    searchData: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    tableGet: PropTypes.func.isRequired,
  }
  render() {
    return <ThisSearchForm {...this.props} />
  }
};

const mapStateToProps = state => {
  const data = state.audit.auditMember;
  return {
    searchData: data.table.searchData,
    loading: data.table.loading,
  }
}

const methods = AUDIT_MEMBER;

const mapDispatchToProps = {
  tableGet: methods.tableGet,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersAuditMemberSearch)