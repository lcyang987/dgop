import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { JOBDEMAND_MANAGER } from '@/actions';
import ThisTable from '@/components/jobDemandManager/demandDetailTable';

class ContainersMachineManagerDemandDetailTable extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    searchData: PropTypes.object.isRequired,
    taskClaimTableVisible: PropTypes.bool.isRequired,
    taskClaimTableSearchData: PropTypes.object.isRequired,
    tableGet: PropTypes.func.isRequired,
    taskClaimTableGet: PropTypes.func.isRequired,
    taskClaimTableShow: PropTypes.func.isRequired,
    taskClaimTableHide: PropTypes.func.isRequired,
  }
  get(record) {
    this.props.taskClaimTableShow();
    this.props.taskClaimTableGet({ id: record.id, demandNo: this.props.searchData.demandNo });
  }
  render() {
    return <ThisTable {...this.props} get={this.get} />
  }
};

const mapStateToProps = state => {
  const data = state.jobDemandManager;
  return {
    table: data.demandDetailTable.data,
    loading: data.demandDetailTable.loading,
    searchData: data.demandDetailTable.searchData,
    taskClaimTableVisible: data.taskClaimTable.visible,
    taskClaimTableSearchData: data.taskClaimTable.searchData,
  }
}

const methods = JOBDEMAND_MANAGER;

const mapDispatchToProps = {
  tableGet: methods.demandDetailTableGet,
  taskClaimTableGet: methods.taskClaimTableGet,
  taskClaimTableShow: methods.taskClaimTableShow,
  taskClaimTableHide: methods.taskClaimTableHide,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersMachineManagerDemandDetailTable);