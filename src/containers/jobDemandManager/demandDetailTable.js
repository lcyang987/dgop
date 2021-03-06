import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { JOBDEMAND_MANAGER } from '@/actions';
import ThisTable from '@/components/jobDemandManager/demandDetailTable';

class ContainersJobDemandManagerDemandDetailTable extends Component {
  static propTypes = {
    dictData: PropTypes.object.isRequired,
    table: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    searchData: PropTypes.object.isRequired,
    taskClaimTableVisible: PropTypes.bool.isRequired,
    taskClaimTableSearchData: PropTypes.object.isRequired,
    depositDetailTableSearchData: PropTypes.object.isRequired,
    tableGet: PropTypes.func.isRequired,
    taskClaimTableGet: PropTypes.func.isRequired,
    taskClaimTableShow: PropTypes.func.isRequired,
    taskClaimTableHide: PropTypes.func.isRequired,
    jobRewardTableHide: PropTypes.func.isRequired,
    depositModalShow: PropTypes.func.isRequired,
    depositDetailTableGet: PropTypes.func.isRequired,
    depositDetailTableShow: PropTypes.func.isRequired,
    depositFlowTableHide: PropTypes.func.isRequired,
    depositRefundFormHide: PropTypes.func.isRequired,
  }
  get(record) {
    this.props.taskClaimTableShow();
    this.props.taskClaimTableGet({ id: record.id, demandNo: this.props.searchData.demandNo });
  }
  hide() {
    this.props.depositModalHide();
    this.props.taskClaimTableHide();
    this.props.jobRewardTableHide();
  }
  depositDetailGet(record) {
    this.props.depositModalShow(`${record.jobTypeName} - 保证金额详情`);
    this.props.depositDetailTableShow();
    this.props.depositFlowTableHide();
    this.props.depositRefundFormHide();
    this.props.depositDetailTableGet({ ...this.props.depositDetailTableSearchData, currentPage: 1, pageSize: 10, demandId: record.id, depositType: 'DEMAND_DEPOSIT' });
  }
  render() {
    return <ThisTable {...this.props} get={this.get} hide={this.hide} depositDetailGet={this.depositDetailGet}/>
  }
};

const mapStateToProps = state => {
  const dict = state.dict;
  const data = state.jobDemandManager;
  return {
    dictData: dict.data,
    table: data.demandDetailTable.data,
    loading: data.demandDetailTable.loading,
    searchData: data.demandDetailTable.searchData,
    taskClaimTableVisible: data.taskClaimTable.visible,
    taskClaimTableSearchData: data.taskClaimTable.searchData,
    depositDetailTableSearchData: data.depositDetailTable.searchData,
  }
}

const methods = JOBDEMAND_MANAGER;

const mapDispatchToProps = {
  tableGet: methods.demandDetailTableGet,
  taskClaimTableGet: methods.taskClaimTableGet,
  taskClaimTableShow: methods.taskClaimTableShow,
  taskClaimTableHide: methods.taskClaimTableHide,
  jobRewardTableHide: methods.jobRewardTableHide,
  depositModalShow: methods.depositModalShow,
  depositModalHide: methods.depositModalHide,
  depositDetailTableGet: methods.depositDetailTableGet,
  depositDetailTableShow: methods.depositDetailTableShow,
  depositFlowTableHide: methods.depositFlowTableHide,
  depositRefundFormHide: methods.depositRefundFormHide,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersJobDemandManagerDemandDetailTable);