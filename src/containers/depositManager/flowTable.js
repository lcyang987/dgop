import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DEPOSIT_MANAGER } from '@/actions';
import ThisTable from '@/components/depositManager/flowTable';

class ContainersdepositManagerFlowTable extends Component {
  static propTypes = {
    dictData: PropTypes.object.isRequired,
    table: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    flowTableSearchData: PropTypes.object.isRequired,
    flowTableVisible: PropTypes.bool.isRequired,
    tableGet: PropTypes.func.isRequired,
  }
  render() {
    return <ThisTable {...this.props} />
  }
};

const mapStateToProps = state => {
  const dict = state.dict;
  const data = state.depositManager;
  return {
    dictData: dict.data,
    table: data.flowTable.data,
    count: data.flowTable.count,
    loading: data.flowTable.loading,
    searchData: data.flowTable.searchData,
    flowTableSearchData: data.flowTable.searchData,
    flowTableVisible: data.flowTable.visible,
  }
}

const methods = DEPOSIT_MANAGER;

const mapDispatchToProps = {
  tableGet: methods.flowTableGet,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersdepositManagerFlowTable);