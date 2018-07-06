import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CROP_MANAGER } from '@/actions';
import ThisSearchForm from '@/components/cropManager/searchForm';

class ContainersCropManagerSearch extends Component {
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
  const data = state.cropManager;
  return {
    table: data.table.data,
    searchData: data.table.searchData,
    loading: data.table.loading,
  }
}

const methods = CROP_MANAGER;

const mapDispatchToProps = {
  tableGet: methods.tableGet,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersCropManagerSearch)