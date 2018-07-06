import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { COLLECT_WITHDRAW_APPLY } from '@/actions';
import ThisSearchForm from '@/components/withdraw/collectWithdrawApply/searchForm';

class ContainersCollectWithdrawApplySearch extends Component {
  static propTypes = {
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
  const data = state.withdraw.collectWithdrawApply;
  return {
    table: data.table.data,
    searchData: data.table.searchData,
    loading: data.table.loading,
  }
}

const methods = COLLECT_WITHDRAW_APPLY;

const mapDispatchToProps = {
  tableGet: methods.tableGet,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersCollectWithdrawApplySearch)