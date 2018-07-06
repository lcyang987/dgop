import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { JOBDEMAND_MANAGER } from '@/actions';
import ThisSearchForm from '@/components/jobDemandManager/searchForm';

class ContainersJobDemandManagerSearch extends Component {
  static propTypes = {
    dictData: PropTypes.object.isRequired,
    dictLoading: PropTypes.bool.isRequired,
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
  const dict = state.dict;
  const data = state.jobDemandManager;
  return {
    dictData: dict.data,
    dictLoading: dict.loading,
    table: data.table.data,
    searchData: data.table.searchData,
    loading: data.table.loading,
  }
}

const methods = JOBDEMAND_MANAGER;

const mapDispatchToProps = {
  tableGet: methods.tableGet,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersJobDemandManagerSearch)