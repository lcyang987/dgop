import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { JOBDEMAND_MANAGER } from '@/actions';
import ThisSearchForm from '@/components/jobDemandManager/searchForm';

class ContainersJobDemandManagerSearch extends Component {
  static propTypes = {
    dictData: PropTypes.object.isRequired,
    table: PropTypes.array.isRequired,
    searchData: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    tableGet: PropTypes.func.isRequired,
    demandDetailTableHide: PropTypes.func.isRequired,
    taskClaimTableHide: PropTypes.func.isRequired,
    jobRewardTableHide: PropTypes.func.isRequired,
  }
  tableGet(searchData) {
    this.props.tableGet(searchData);
    this.props.demandDetailTableHide();
    this.props.taskClaimTableHide();
    this.props.jobRewardTableHide();
  }
  render() {
    return <ThisSearchForm {...this.props} tableGet={this.tableGet.bind(this)} />
  }
};

const mapStateToProps = state => {
  const dict = state.dict;
  const data = state.jobDemandManager;
  return {
    dictData: dict.data,
    table: data.table.data,
    searchData: data.table.searchData,
    loading: data.table.loading,
  }
}

const methods = JOBDEMAND_MANAGER;

const mapDispatchToProps = {
  tableGet: methods.tableGet,
  demandDetailTableHide: methods.demandDetailTableHide,
  taskClaimTableHide: methods.taskClaimTableHide,
  jobRewardTableHide: methods.jobRewardTableHide,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersJobDemandManagerSearch)