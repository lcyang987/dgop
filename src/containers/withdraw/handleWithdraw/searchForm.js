import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { HANDLE_WITHDRAW } from '@/actions';
import ThisSearchForm from '@/components/withdraw/handleWithdraw/searchForm';

class ContainersHandleWithdrawSearch extends Component {
  static propTypes = {
    dictData: PropTypes.object.isRequired,
    table: PropTypes.array.isRequired,
    searchData: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    tableGet: PropTypes.func.isRequired,
  }
  render() {
    return <ThisSearchForm {...this.props} />
  }
};

const mapStateToProps = state => {
  const dict = state.dict;
  const data = state.withdraw.handleWithdraw;
  return {
    dictData: dict.data,
    table: data.table.data,
    searchData: data.table.searchData,
    loading: data.table.loading,
  }
}

const methods = HANDLE_WITHDRAW;

const mapDispatchToProps = {
  tableGet: methods.tableGet,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersHandleWithdrawSearch)