import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TASKCLAIM_MANAGER, JOBDEMAND_MANAGER } from '@/actions';
import ThisTable from '@/components/taskClaimManager/table';

class ContainersTaskClaimTable extends Component {
  static propTypes = {
    dictData: PropTypes.object.isRequired,
    table: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    count: PropTypes.number.isRequired,
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
  jobDemandManagerShow(record) {
    this.props.history.push('JobDemandManager');
    this.props.jobDemandManagerTableGet({ ...this.props.jobDemandManagerTableSearchData, demandNo: record.demandNo });
    this.props.jobDemandManagerDemandDetailTableHide();
    this.props.jobDemandManagerTaskClaimTableHide();
    this.props.jobDemandManagerJobRewardTableHide();
  }
  render() {
    return <ThisTable {...this.props} get={this.get} jobDemandManagerShow={this.jobDemandManagerShow} />
  }
};

const mapStateToProps = state => {
  const dict = state.dict;
  const data = state.taskClaimManager;
  const jobDemandManagerData = state.jobDemandManager;
  return {
    dictData: dict.data,
    table: data.table.data,
    loading: data.table.loading,
    count: data.table.count,
    searchData: data.table.searchData,
    jobRewardTableVisible: data.jobRewardTable.visible,
    jobRewardTableSearchData: data.jobRewardTable.searchData,
    jobDemandManagerTableSearchData: jobDemandManagerData.table.searchData,
  }
}

const methods = TASKCLAIM_MANAGER;
const jobDemandMethods = JOBDEMAND_MANAGER;

const mapDispatchToProps = {
  tableGet: methods.tableGet,
  jobRewardTableGet: methods.jobRewardTableGet,
  jobRewardTableShow: methods.jobRewardTableShow,
  jobRewardTableHide: methods.jobRewardTableHide,
  jobDemandManagerTableGet: jobDemandMethods.tableGet,
  jobDemandManagerDemandDetailTableHide: jobDemandMethods.demandDetailTableHide,
  jobDemandManagerTaskClaimTableHide: jobDemandMethods.taskClaimTableHide,
  jobDemandManagerJobRewardTableHide: jobDemandMethods.jobRewardTableHide,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersTaskClaimTable);