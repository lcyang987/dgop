import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { JOBDEMAND_MANAGER } from '@/actions';
import ThisTable from '@/components/depositManager/flowTable';

class ContainersJobDemandManagerDepisitFlowTable extends Component {
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
  const data = state.jobDemandManager;
  return {
    dictData: dict.data,
    table: data.depositFlowTable.data,
    count: data.depositFlowTable.count,
    loading: data.depositFlowTable.loading,
    searchData: data.depositFlowTable.searchData,
    flowTableSearchData: data.depositFlowTable.searchData,
    flowTableVisible: data.depositFlowTable.visible,
  }
}

const methods = JOBDEMAND_MANAGER;

const mapDispatchToProps = {
  tableGet: methods.depositFlowTableGet,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersJobDemandManagerDepisitFlowTable);