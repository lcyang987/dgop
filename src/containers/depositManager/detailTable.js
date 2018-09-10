import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DEPOSIT_MANAGER } from '@/actions';
import ThisTable from '@/components/depositManager/detailTable';

class ContainersdepositManagerDetailTable extends Component {
  static propTypes = {
    dictData: PropTypes.object.isRequired,
    table: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    searchData: PropTypes.object.isRequired,
    flowTableVisible: PropTypes.bool.isRequired,
    flowTableSearchData: PropTypes.object.isRequired,
    tableGet: PropTypes.func.isRequired,
    flowTableGet: PropTypes.func.isRequired,
    flowTableShow: PropTypes.func.isRequired,
    flowTableHide: PropTypes.func.isRequired,
    formSetData: PropTypes.func.isRequired,
    formReset: PropTypes.func.isRequired,
    formShow: PropTypes.func.isRequired,
  }
  get(record) {
    this.props.flowTableShow();
    this.props.flowTableGet({ ...this.props.flowTableSearchData, detailId: record.id });
  }
  hide() {
    this.props.flowTableHide();
  }
  refund(record) {
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
  const data = state.depositManager;
  return {
    dictData: dict.data,
    table: data.detailTable.data,
    count: data.detailTable.count,
    loading: data.detailTable.loading,
    searchData: data.detailTable.searchData,
    flowTableVisible: data.flowTable.visible,
    flowTableSearchData: data.flowTable.searchData,
  }
}

const methods = DEPOSIT_MANAGER;

const mapDispatchToProps = {
  tableGet: methods.detailTableGet,
  flowTableGet: methods.flowTableGet,
  flowTableShow: methods.flowTableShow,
  flowTableHide: methods.flowTableHide,
  formSetData: methods.refundFormSetData,
  formReset: methods.refundFormReset,
  formShow: methods.refundFormShow,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersdepositManagerDetailTable);