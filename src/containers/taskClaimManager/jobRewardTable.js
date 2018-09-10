import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TASKCLAIM_MANAGER } from '@/actions';
import ThisTable from '@/components/jobDemandManager/jobRewardTable';

class ContainersTaskClaimManagerJobRewardTable extends Component {
  static propTypes = {
    dictData: PropTypes.object.isRequired,
    table: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    searchData: PropTypes.object.isRequired,
    tableGet: PropTypes.func.isRequired,
    tableFrozen: PropTypes.func.isRequired,
    tableUnfrozen: PropTypes.func.isRequired,
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
  render() {
    return <ThisTable {...this.props} frozen={this.frozen} unfrozen={this.unfrozen} />
  }
};

const mapStateToProps = state => {
  const dict = state.dict;
  const data = state.taskClaimManager;
  return {
    dictData: dict.data,
    table: data.jobRewardTable.data,
    loading: data.jobRewardTable.loading,
    searchData: data.jobRewardTable.searchData,
  }
}

const methods = TASKCLAIM_MANAGER;

const mapDispatchToProps = {
  tableGet: methods.jobRewardTableGet,
  tableFrozen: methods.jobRewardTableFrozen,
  tableUnfrozen: methods.jobRewardTableUnfrozen,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersTaskClaimManagerJobRewardTable);