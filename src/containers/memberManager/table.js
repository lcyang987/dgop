import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MEMBER_MANAGER } from '@/actions';
import ThisTable from '@/components/memberManager/table';

class ContainersMemberManagerTable extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
    searchData: PropTypes.object.isRequired,
    count: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    addressTableVisible: PropTypes.bool.isRequired,
    addressTableParams: PropTypes.object.isRequired,
    bankTableVisible: PropTypes.bool.isRequired,
    bankTableParams: PropTypes.object.isRequired,
    introducerTableVisible: PropTypes.bool.isRequired,
    introducerTableParams: PropTypes.object.isRequired,
    rebateTableVisible: PropTypes.bool.isRequired,
    rebateTableParams: PropTypes.object.isRequired,
    auditInfoReset: PropTypes.func.isRequired,
    auditInfoGet: PropTypes.func.isRequired,
    auditInfoShow: PropTypes.func.isRequired,
    recommendInfoReset: PropTypes.func.isRequired,
    recommendInfoGet: PropTypes.func.isRequired,
    recommendInfoShow: PropTypes.func.isRequired,
    addressTableReset: PropTypes.func.isRequired,
    addressTableGet: PropTypes.func.isRequired,
    addressTableSet: PropTypes.func.isRequired,
    addressTableShow: PropTypes.func.isRequired,
    addressTableHide: PropTypes.func.isRequired,
    bankTableReset: PropTypes.func.isRequired,
    bankTableGet: PropTypes.func.isRequired,
    bankTableSet: PropTypes.func.isRequired,
    bankTableShow: PropTypes.func.isRequired,
    bankTableHide: PropTypes.func.isRequired,
    introducerTableReset: PropTypes.func.isRequired,
    introducerTableGet: PropTypes.func.isRequired,
    introducerTableSet: PropTypes.func.isRequired,
    introducerTableShow: PropTypes.func.isRequired,
    introducerTableHide: PropTypes.func.isRequired,
    rebateTableReset: PropTypes.func.isRequired,
    rebateTableGet: PropTypes.func.isRequired,
    rebateTableSet: PropTypes.func.isRequired,
    rebateTableShow: PropTypes.func.isRequired,
    rebateTableHide: PropTypes.func.isRequired,
    carouselReset: PropTypes.func.isRequired,
    carouselSetData: PropTypes.func.isRequired,
    carouselShow: PropTypes.func.isRequired,
  }
  show(text, record, title) {
    this.props.carouselReset();
    this.props.carouselSetData(text);
    this.props.carouselShow(`${title}展示 一 ${record.loginName}`);
  }
  audit(record) {
    this.props.auditInfoReset();
    this.props.auditInfoShow(`查看审核信息 一 ${record.loginName}`);
    this.props.auditInfoGet({ id: record.id });
  }
  recommend(record) {
    this.props.recommendInfoReset();
    this.props.recommendInfoShow(`查看介绍人信息 一 ${record.loginName}`);
    this.props.recommendInfoGet({ id: record.id });
  }
  address(record) {
    this.props.bankTableHide();
    this.props.introducerTableHide();
    this.props.rebateTableHide();
    this.props.addressTableReset();
    this.props.addressTableShow();
    this.props.addressTableGet({ id: record.id });
    this.props.addressTableSet({ id: record.id });
  }
  bank(record) {
    this.props.addressTableHide();
    this.props.introducerTableHide();
    this.props.rebateTableHide();
    this.props.bankTableReset();
    this.props.bankTableShow();
    this.props.bankTableGet({ id: record.id });
    this.props.bankTableSet({ id: record.id });
  }
  introducer(record) {
    this.props.addressTableHide();
    this.props.bankTableHide();
    this.props.introducerTableReset();
    this.props.rebateTableHide();
    this.props.introducerTableShow();
    this.props.introducerTableGet({ id: record.id });
    this.props.introducerTableSet({ id: record.id });
  }
  rebate(record) {
    this.props.addressTableHide();
    this.props.bankTableHide();
    this.props.introducerTableHide();
    this.props.rebateTableReset();
    this.props.rebateTableShow();
    this.props.rebateTableGet({ id: record.id });
    this.props.rebateTableSet({ id: record.id });
  }
  render() {
    return <ThisTable {...this.props} show={this.show} audit={this.audit} recommend={this.recommend} address={this.address} bank={this.bank} introducer={this.introducer} rebate={this.rebate} />
  }
};

const mapStateToProps = state => {
  const data = state.memberManager;
  return {
    table: data.table.data,
    searchData: data.table.searchData,
    count: data.table.count,
    loading: data.table.loading,
    addressTableVisible: data.addressTable.visible,
    addressTableParams: data.addressTable.params,
    bankTableVisible: data.bankTable.visible,
    bankTableParams: data.bankTable.params,
    introducerTableVisible: data.introducerTable.visible,
    introducerTableParams: data.introducerTable.params,
    rebateTableVisible: data.rebateTable.visible,
    rebateTableParams: data.rebateTable.params,
  }
}

const methods = MEMBER_MANAGER;

const mapDispatchToProps = {
  tableGet: methods.tableGet,
  auditInfoReset: methods.auditInfoReset,
  auditInfoGet: methods.auditInfoGet,
  auditInfoShow: methods.auditInfoShow,
  recommendInfoReset: methods.recommendInfoReset,
  recommendInfoGet: methods.recommendInfoGet,
  recommendInfoShow: methods.recommendInfoShow,
  addressTableReset: methods.addressTableReset,
  addressTableGet: methods.addressTableGet,
  addressTableSet: methods.addressTableSet,
  addressTableShow: methods.addressTableShow,
  addressTableHide: methods.addressTableHide,
  bankTableReset: methods.bankTableReset,
  bankTableGet: methods.bankTableGet,
  bankTableSet: methods.bankTableSet,
  bankTableShow: methods.bankTableShow,
  bankTableHide: methods.bankTableHide,
  introducerTableReset: methods.introducerTableReset,
  introducerTableGet: methods.introducerTableGet,
  introducerTableSet: methods.introducerTableSet,
  introducerTableShow: methods.introducerTableShow,
  introducerTableHide: methods.introducerTableHide,
  rebateTableReset: methods.rebateTableReset,
  rebateTableGet: methods.rebateTableGet,
  rebateTableSet: methods.rebateTableSet,
  rebateTableShow: methods.rebateTableShow,
  rebateTableHide: methods.rebateTableHide,
  carouselReset: methods.carouselReset,
  carouselSetData: methods.carouselSetData,
  carouselShow: methods.carouselShow,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersMemberManagerTable)