import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { JOBDEMAND_MANAGER } from '@/actions';
import ThisTable from '@/components/jobDemandManager/taskClaimTable';

class ContainersMachineManagerTaskClaimTable extends Component {
  static propTypes = {
    dictData: PropTypes.object.isRequired,
    table: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    searchData: PropTypes.object.isRequired,
    jobRewardTableVisible: PropTypes.bool.isRequired,
    jobRewardTableSearchData: PropTypes.object.isRequired,
    tableGet: PropTypes.func.isRequired,
    jobRewardTableGet: PropTypes.func.isRequired,
    jobRewardTableShow: PropTypes.func.isRequired,
    jobRewardTableHide: PropTypes.func.isRequired,
  }
  get(record) {
    this.props.jobRewardTableShow();
    this.props.jobRewardTableGet({ id: record.id });
  }
  render() {
    return <ThisTable {...this.props} get={this.get} />
  }
};

const mapStateToProps = state => {
  const dict = state.dict;
  const data = state.jobDemandManager;
  return {
    dictData: dict.data,
    table: data.taskClaimTable.data,
    loading: data.taskClaimTable.loading,
    searchData: data.taskClaimTable.searchData,
    jobRewardTableVisible: data.jobRewardTable.visible,
    jobRewardTableSearchData: data.jobRewardTable.searchData,
  }
}

const methods = JOBDEMAND_MANAGER;

const mapDispatchToProps = {
  tableGet: methods.taskClaimTableGet,
  jobRewardTableGet: methods.jobRewardTableGet,
  jobRewardTableShow: methods.jobRewardTableShow,
  jobRewardTableHide: methods.jobRewardTableHide,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersMachineManagerTaskClaimTable);