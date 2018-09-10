import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { JOBREWARD_MANAGER, JOBDEMAND_MANAGER } from '@/actions';
import ThisTable from '@/components/jobRewardManager/table';

class ContainersJobRewardManagerTable extends Component {
  static propTypes = {
    dictData: PropTypes.object.isRequired,
    table: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    count: PropTypes.number.isRequired,
    searchData: PropTypes.object.isRequired,
    tableGet: PropTypes.func.isRequired,
    tableFrozen: PropTypes.func.isRequired,
    tableUnfrozen: PropTypes.func.isRequired,
    jobDemandManagerTableGet: PropTypes.func.isRequired,
    jobDemandManagerDemandDetailTableHide: PropTypes.func.isRequired,
    jobDemandManagerTaskClaimTableHide: PropTypes.func.isRequired,
    jobDemandManagerJobRewardTableHide: PropTypes.func.isRequired,
  }
  frozen(record) {
    this.props.tableFrozen({
      id: record.id
    }).then(() => {
      this.props.tableGet(this.props.searchData)
    })
  }
  unfrozen(record) {
    this.props.tableUnfrozen({
      id: record.id
    }).then(() => {
      this.props.tableGet(this.props.searchData)
    })
  }
  jobDemandManagerShow(record) {
    this.props.history.push('JobDemandManager');
    this.props.jobDemandManagerTableGet({ ...this.props.jobDemandManagerTableSearchData, demandNo: record.demandNo });
    this.props.jobDemandManagerDemandDetailTableHide();
    this.props.jobDemandManagerTaskClaimTableHide();
    this.props.jobDemandManagerJobRewardTableHide();
  }
  render() {
    return <ThisTable {...this.props} frozen={this.frozen} unfrozen={this.unfrozen} jobDemandManagerShow={this.jobDemandManagerShow} />
  }
};

const mapStateToProps = state => {
  const dict = state.dict;
  const data = state.jobRewardManager;
  const jobDemandManagerData = state.jobDemandManager;
  return {
    dictData: dict.data,
    table: data.table.data,
    loading: data.table.loading,
    count: data.table.count,
    searchData: data.table.searchData,
    jobDemandManagerTableSearchData: jobDemandManagerData.table.searchData,
  }
}

const methods = JOBREWARD_MANAGER;
const jobDemandMethods = JOBDEMAND_MANAGER;

const mapDispatchToProps = {
  tableGet: methods.tableGet,
  tableFrozen: methods.tableFrozen,
  tableUnfrozen: methods.tableUnfrozen,
  jobDemandManagerTableGet: jobDemandMethods.tableGet,
  jobDemandManagerDemandDetailTableHide: jobDemandMethods.demandDetailTableHide,
  jobDemandManagerTaskClaimTableHide: jobDemandMethods.taskClaimTableHide,
  jobDemandManagerJobRewardTableHide: jobDemandMethods.jobRewardTableHide,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersJobRewardManagerTable);