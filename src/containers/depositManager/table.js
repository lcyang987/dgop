import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DEPOSIT_MANAGER } from '@/actions';
import ThisTable from '@/components/depositManager/table';

class ContainersDepositManagerTable extends Component {
  static propTypes = {
    dictData: PropTypes.object.isRequired,
    table: PropTypes.array.isRequired,
    count: PropTypes.number.isRequired,
    searchData: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    detailTableVisible: PropTypes.bool.isRequired,
    detailTableSearchData: PropTypes.object.isRequired,
    tableGet: PropTypes.func.isRequired,
    detailTableGet: PropTypes.func.isRequired,
    detailTableShow: PropTypes.func.isRequired,
    detailTableHide: PropTypes.func.isRequired,
    flowTableHide: PropTypes.func.isRequired,
  }
  componentDidMount() {
    this.props.tableGet(this.props.searchData);
  }
  get(record, depositType) {
    this.props.flowTableHide();
    this.props.detailTableShow();
    this.props.detailTableGet({...this.props.detailTableSearchData, memberId: record.memberId, depositType: depositType });
  }
  hide() {
    this.props.detailTableHide();
    this.props.flowTableHide();
  }
  render() {
    return <ThisTable {...this.props} get={this.get} hide={this.hide} />
  }
};

const mapStateToProps = state => {
  const dict = state.dict;
  const data = state.depositManager;
  return {
    dictData: dict.data,
    table: data.table.data,
    count: data.table.count,
    searchData: data.table.searchData,
    loading: data.table.loading,
    detailTableVisible: data.detailTable.visible,
    detailTableSearchData: data.detailTable.searchData,
  }
}

const methods = DEPOSIT_MANAGER;

const mapDispatchToProps = {
  tableGet: methods.tableGet,
  detailTableGet: methods.detailTableGet,
  detailTableShow: methods.detailTableShow,
  detailTableHide: methods.detailTableHide,
  flowTableHide: methods.flowTableHide,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersDepositManagerTable)