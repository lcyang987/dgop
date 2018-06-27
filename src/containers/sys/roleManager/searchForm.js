import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ROLE_MANAGER } from '@/actions';
import ThisSearchForm from '@/components/sys/roleManager/searchForm';

class ContainersRoleManagerSearch extends Component {
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
  const data = state.sys.roleManager;
  return {
    searchData: data.table.searchData,
    loading: data.table.loading,
  }
}

const methods = ROLE_MANAGER;

const mapDispatchToProps = {
  tableGet: methods.tableGet,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersRoleManagerSearch)