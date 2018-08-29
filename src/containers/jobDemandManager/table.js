import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { JOBDEMAND_MANAGER } from '@/actions';
import ThisTable from '@/components/jobDemandManager/table';

class ContainersJobDemandManagerTable extends Component {
  static propTypes = {
    dictData: PropTypes.object.isRequired,
    table: PropTypes.array.isRequired,
    count: PropTypes.number.isRequired,
    searchData: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    demandDetailTableVisible: PropTypes.bool.isRequired,
    demandDetailTableSearchData: PropTypes.object.isRequired,
    tableGet: PropTypes.func.isRequired,
    demandDetailTableGet: PropTypes.func.isRequired,
    demandDetailTableShow: PropTypes.func.isRequired,
    demandDetailTableHide: PropTypes.func.isRequired,
    taskClaimTableHide: PropTypes.func.isRequired,
    jobRewardTableHide: PropTypes.func.isRequired,
    mapReset: PropTypes.func.isRequired,
    mapSetData: PropTypes.func.isRequired,
    mapShow: PropTypes.func.isRequired,
  }
  get(record) {
    this.props.demandDetailTableShow();
    this.props.demandDetailTableGet({ id: record.id, demandNo: record.demandNo });
  }
  hide() {
    this.props.demandDetailTableHide();
    this.props.taskClaimTableHide();
    this.props.jobRewardTableHide();
  }
  showMap(record) {
    this.props.mapReset();
    this.props.mapSetData({ longitude: record.longitude, latitude: record.latitude });
    this.props.mapShow(`${record.title} 一 ${record.address}`);
  }
  render() {
    return <ThisTable {...this.props} get={this.get} hide={this.hide} showMap={this.showMap} />
  }
};

const mapStateToProps = state => {
  const dict = state.dict;
  const data = state.jobDemandManager;
  return {
    dictData: dict.data,
    table: data.table.data,
    count: data.table.count,
    searchData: data.table.searchData,
    loading: data.table.loading,
    demandDetailTableVisible: data.demandDetailTable.visible,
    demandDetailTableSearchData: data.demandDetailTable.searchData,
  }
}

const methods = JOBDEMAND_MANAGER;

const mapDispatchToProps = {
  tableGet: methods.tableGet,
  demandDetailTableGet: methods.demandDetailTableGet,
  demandDetailTableShow: methods.demandDetailTableShow,
  demandDetailTableHide: methods.demandDetailTableHide,
  taskClaimTableHide: methods.taskClaimTableHide,
  jobRewardTableHide: methods.jobRewardTableHide,
  mapReset: methods.mapReset,
  mapSetData: methods.mapSetData,
  mapShow: methods.mapShow,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersJobDemandManagerTable)