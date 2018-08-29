import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MEMBER_MANAGER } from '@/actions';
import ThisSearchForm from '@/components/memberManager/searchForm';

class ContainersMemberManagerSearch extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
    searchData: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    tableGet: PropTypes.func.isRequired,
  }
  render() {
    return <ThisSearchForm {...this.props} />
  }
};

const mapStateToProps = state => {
  const data = state.memberManager;
  return {
    table: data.table.data,
    searchData: data.table.searchData,
    loading: data.table.loading,
  }
}

const methods = MEMBER_MANAGER;

const mapDispatchToProps = {
  tableGet: methods.tableGet,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersMemberManagerSearch)