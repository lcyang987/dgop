import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TASKCLAIM_MANAGER } from '@/actions';
import ThisSearchForm from '@/components/taskClaimManager/searchForm';

class ContainersTaskClaimManagerSearch extends Component {
  static propTypes = {
    dictData: PropTypes.object.isRequired,
    table: PropTypes.array.isRequired,
    searchData: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    tableGet: PropTypes.func.isRequired,
    jobRewardTableHide: PropTypes.func.isRequired,
  }
  tableGet(searchData) {
    this.props.tableGet(searchData);
    this.props.jobRewardTableHide();
  }
  render() {
    return <ThisSearchForm {...this.props} tableGet={this.tableGet.bind(this)} />
  }
};

const mapStateToProps = state => {
  const dict = state.dict;
  const data = state.taskClaimManager;
  return {
    dictData: dict.data,
    table: data.table.data,
    searchData: data.table.searchData,
    loading: data.table.loading,
  }
}

const methods = TASKCLAIM_MANAGER;

const mapDispatchToProps = {
  tableGet: methods.tableGet,
  jobRewardTableHide: methods.jobRewardTableHide,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersTaskClaimManagerSearch)