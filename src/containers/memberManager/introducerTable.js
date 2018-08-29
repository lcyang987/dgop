import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MEMBER_MANAGER } from '@/actions';
import ThisTable from '@/components/memberManager/introducerTable';

class ContainersMemberManagerIntroducerTable extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
    searchData: PropTypes.object.isRequired,
    count: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
  }
  render() {
    return <ThisTable {...this.props} />
  }
};

const mapStateToProps = state => {
  const data = state.memberManager;
  return {
    table: data.introducerTable.data,
    searchData: data.introducerTable.searchData,
    count: data.introducerTable.count,
    loading: data.introducerTable.loading,
  }
}

const methods = MEMBER_MANAGER;

const mapDispatchToProps = {
  tableGet: methods.introducerTableGet,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersMemberManagerIntroducerTable);