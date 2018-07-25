import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { HANDLE_WITHDRAW } from '@/actions';
import ThisTable from '@/components/withdraw/handleWithdraw/table';

class ContainersHandleWithdrawTable extends Component {
  static propTypes = {
    dictData: PropTypes.object.isRequired,
    table: PropTypes.array.isRequired,
    count: PropTypes.number.isRequired,
    searchData: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    tableGet: PropTypes.func.isRequired,
    tableDetailGet: PropTypes.func.isRequired,
    tableCancel: PropTypes.func.isRequired,
    tableHandle: PropTypes.func.isRequired,
    setReset: PropTypes.func.isRequired,
    failureFormReset: PropTypes.func.isRequired,
    failureFormShow: PropTypes.func.isRequired,
    failureFormSetData: PropTypes.func.isRequired,
  }
  get(record) {
    this.props.failureFormReset();
    this.props.failureFormShow('失败');
    this.props.failureFormSetData(record);
  }
  onExpand(isOpen, record) {
    if (isOpen && !this.props.table.find(t => t.id === record.id).detail.data.length) {
      this.props.tableDetailGet({
        id: record.id,
        version: record.version,
      });
    }
  }
  onHandle(record) {
    this.props.tableHandle({
      id: record.id,
      version: record.version,
      handleDetail: JSON.stringify(record.data.map(t => ({
        id: t.id,
        applyId: t.applyId,
        handleStatus: t.success ? 'SUCCESS' : 'FAIL',
        comment: t.comment,
      }))),
    }).then(() => {
      this.props.tableGet(this.props.searchData);
      this.props.tableDetailGet({
        id: record.id,
        version: record.version,
      });
    });
  }
  onCancel(record) {
    this.props.tableCancel({
      id: record.id,
      version: record.version,
    }).then(() => {
      this.props.tableGet(this.props.searchData);
    })
  }
  render() {
    return <ThisTable {...this.props} onExpand={this.onExpand.bind(this)} get={this.get} onCancel={this.onCancel} onHandle={this.onHandle} />
  }
};

const mapStateToProps = state => {
  const dict = state.dict;
  const data = state.withdraw.handleWithdraw;
  return {
    dictData: dict.data,
    table: data.table.data,
    count: data.table.count,
    searchData: data.table.searchData,
    loading: data.table.loading,
  }
}

const methods = HANDLE_WITHDRAW;

const mapDispatchToProps = {
  tableGet: methods.tableGet,
  tableDetailGet: methods.tableDetailGet,
  tableCancel: methods.tableCancel,
  tableHandle: methods.tableHandle,
  setSuccess: methods.tableDetailRowSuccess,
  setReset: methods.tableDetailRowReset,
  failureFormReset: methods.detailRowFailureFormReset,
  failureFormSetData: methods.detailRowFailureFormSetData,
  failureFormShow: methods.detailRowFailureFormShow,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersHandleWithdrawTable)