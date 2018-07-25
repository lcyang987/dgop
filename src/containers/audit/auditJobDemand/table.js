import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import { AUDIT_JOBDEMAND } from '@/actions';
import ThisTable from '@/components/audit/auditJobDemand/table';

const confirm = Modal.confirm;

class ContainersAuditJobDemandTable extends Component {
  static propTypes = {
    dictData: PropTypes.object.isRequired,
    table: PropTypes.array.isRequired,
    searchData: PropTypes.object.isRequired,
    count: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    tableGet: PropTypes.func.isRequired,
    formSetData: PropTypes.func.isRequired,
    formReset: PropTypes.func.isRequired,
    formShow: PropTypes.func.isRequired,
    tableSuccess: PropTypes.func.isRequired,
    mapReset: PropTypes.func.isRequired,
    mapSetData: PropTypes.func.isRequired,
    mapShow: PropTypes.func.isRequired,
  }
  get(record) {
    this.props.formReset();
    this.props.formShow(`审核不通过 一 ${record.title}`);
    this.props.formSetData({ demandId: record.id });
  }
  success(record) {
    confirm({
      title: `确认审核通过 一 ${record.title}`,
      content: '',
      okText: 'Yes',
      okType: 'waning',
      cancelText: 'No',
      maskClosable: true,
      onOk: () => {
        this.props.tableSuccess({
          demandId: record.id
        }).then(() => {
          const searchData = { ...this.props.searchData };
          if (this.props.table.length === 1 && searchData.currentPage !== 1) { searchData.currentPage -= 1 };
          this.props.tableGet(searchData);
        });
      },
    });
  }
  showMap(record) {
    this.props.mapReset();
    this.props.mapSetData({ longitude: record.longitude, latitude: record.latitude });
    this.props.mapShow(`${record.title} 一 ${record.address}`);
  }
  render() {
    return <ThisTable {...this.props} get={this.get} success={this.success} showMap={this.showMap} />
  }
};

const mapStateToProps = state => {
  const dict = state.dict;
  const data = state.audit.auditJobDemand;
  return {
    dictData: dict.data,
    table: data.table.data,
    searchData: data.table.searchData,
    count: data.table.count,
    loading: data.table.loading,
  }
}

const methods = AUDIT_JOBDEMAND;

const mapDispatchToProps = {
  tableGet: methods.tableGet,
  formSetData: methods.formSetData,
  formReset: methods.formReset,
  formShow: methods.formShow,
  tableSuccess: methods.tableSuccess,
  mapReset: methods.mapReset,
  mapSetData: methods.mapSetData,
  mapShow: methods.mapShow,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersAuditJobDemandTable)