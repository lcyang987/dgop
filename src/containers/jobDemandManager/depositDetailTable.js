import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { JOBDEMAND_MANAGER } from '@/actions';
import ThisTable from '@/components/jobDemandManager/depositDetailTable';

class ContainersJobDemandManagerDepositDetailTable extends Component {
  static propTypes = {
    dictData: PropTypes.object.isRequired,
    table: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    searchData: PropTypes.object.isRequired,
    flowTableVisible: PropTypes.bool.isRequired,
    flowTableSearchData: PropTypes.object.isRequired,
    refundFormVisible: PropTypes.bool.isRequired,
    refundFormData: PropTypes.object.isRequired,
    tableGet: PropTypes.func.isRequired,
    flowTableGet: PropTypes.func.isRequired,
    flowTableShow: PropTypes.func.isRequired,
    flowTableHide: PropTypes.func.isRequired,
    formSetData: PropTypes.func.isRequired,
    formReset: PropTypes.func.isRequired,
    formShow: PropTypes.func.isRequired,
    formHide: PropTypes.func.isRequired,
  }
  get(record) {
    this.props.formHide();
    this.props.flowTableShow();
    this.props.flowTableGet({ ...this.props.flowTableSearchData, detailId: record.id });
  }
  hide() {
    this.props.flowTableHide();
  }
  refund(record) {
    this.props.flowTableHide();
    this.props.formReset();
    this.props.formSetData({
      detailId: record.id,
    });
    this.props.formShow('扣除');
  }
  render() {
    return <ThisTable {...this.props} get={this.get} hide={this.hide} refund={this.refund} />
  }
};

const mapStateToProps = state => {
  const dict = state.dict;
  const data = state.jobDemandManager;
  return {
    dictData: dict.data,
    table: data.depositDetailTable.data,
    count: data.depositDetailTable.count,
    loading: data.depositDetailTable.loading,
    searchData: data.depositDetailTable.searchData,
    flowTableVisible: data.depositFlowTable.visible,
    flowTableSearchData: data.depositFlowTable.searchData,
    refundFormVisible: data.depositRefundForm.visible,
    refundFormData: data.depositRefundForm.data,
  }
}

const methods = JOBDEMAND_MANAGER;

const mapDispatchToProps = {
  tableGet: methods.depositDetailTableGet,
  flowTableGet: methods.depositFlowTableGet,
  flowTableShow: methods.depositFlowTableShow,
  flowTableHide: methods.depositFlowTableHide,
  formSetData: methods.depositRefundFormSetData,
  formReset: methods.depositRefundFormReset,
  formShow: methods.depositRefundFormShow,
  formHide: methods.depositRefundFormHide,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersJobDemandManagerDepositDetailTable);