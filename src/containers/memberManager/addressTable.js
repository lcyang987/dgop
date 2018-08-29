import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { MEMBER_MANAGER } from '@/actions';
import ThisTable from '@/components/memberManager/addressTable';

class ContainersMemberManagerAddressTable extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    mapReset: PropTypes.func.isRequired,
    mapSetData: PropTypes.func.isRequired,
    mapShow: PropTypes.func.isRequired,
  }
  showMap(record) {
    this.props.mapReset();
    this.props.mapSetData({ longitude: record.longitude, latitude: record.latitude });
    this.props.mapShow(`${record.contactName} 一 ${record.address}`);
  }
  render() {
    return <ThisTable {...this.props} showMap={this.showMap} />
  }
};

const mapStateToProps = state => {
  const data = state.memberManager;
  return {
    table: data.addressTable.data,
    loading: data.addressTable.loading,
  }
}

const methods = MEMBER_MANAGER;

const mapDispatchToProps = {
  mapReset: methods.mapReset,
  mapSetData: methods.mapSetData,
  mapShow: methods.mapShow,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersMemberManagerAddressTable);