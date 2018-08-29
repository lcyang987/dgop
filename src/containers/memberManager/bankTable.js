import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ThisTable from '@/components/memberManager/bankTable';

class ContainersMemberManagerBankTable extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
  }
  render() {
    return <ThisTable {...this.props} />
  }
};

const mapStateToProps = state => {
  const data = state.memberManager;
  return {
    table: data.bankTable.data,
    loading: data.bankTable.loading,
  }
}

export default connect(mapStateToProps)(ContainersMemberManagerBankTable);