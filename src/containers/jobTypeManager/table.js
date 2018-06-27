import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import { JOBTYPE_MANAGER } from '@/actions';
import ThisTable from '@/components/jobTypeManager/table';

const confirm = Modal.confirm;

class ContainersJobTypeManagerTable extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
    searchData: PropTypes.object.isRequired,
    count: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    machineFormData: PropTypes.object.isRequired,
    machineTableVisible: PropTypes.bool.isRequired,
    jobPoundageTableVisible: PropTypes.bool.isRequired,
    jobPoundageSearchData: PropTypes.object.isRequired,
    tableGet: PropTypes.func.isRequired,
    tableToggle: PropTypes.func.isRequired,
    formReset: PropTypes.func.isRequired,
    formGet: PropTypes.func.isRequired,
    formShow: PropTypes.func.isRequired,
    tableRemove: PropTypes.func.isRequired,
    machineTableGet: PropTypes.func.isRequired,
    machineTableShow: PropTypes.func.isRequired,
    machineTableHide: PropTypes.func.isRequired,
    machineFormSetData: PropTypes.func.isRequired,
    jobPoundageTableReset: PropTypes.func.isRequired,
    jobPoundageTableGet: PropTypes.func.isRequired,
    jobPoundageTableShow: PropTypes.func.isRequired,
    jobPoundageTableHide: PropTypes.func.isRequired,
    jobPoundageTableDisableEdit: PropTypes.func.isRequired,
  }
  get(record) {
    this.props.formReset();
    this.props.formShow(`编辑 一 ${record.name}`);
    this.props.formGet({ id: record.id });
  }
  toggle(record, bool) {
    this.props.tableToggle({
      id: record.id,
      status: bool ? 'ENABLE' : 'DISABLE',
    })
  }
  remove(record) {
    confirm({
      title: `确认删除 一 ${record.name}`,
      content: '',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      maskClosable: true,
      onOk: () => {
        this.props.tableRemove({
          id: record.id
        }).then(() => {
          const searchData = {...this.props.searchData};
          if (this.props.table.length === 1 && searchData.currentPage !== 1) { searchData.currentPage -= 1 };
          this.props.tableGet(searchData);
        });
      },
    });
  }
  machineRead(record) {
    this.props.jobPoundageTableHide();
    this.props.jobPoundageTableDisableEdit();
    this.props.machineTableReset();
    this.props.machineTableShow();
    this.props.machineTableGet({ id: record.id });
    this.props.machineFormSetData({ jobTypeId: record.id });
  }
  jobPoundageRead(record) {
    this.props.machineTableHide();
    this.props.jobPoundageTableDisableEdit();
    this.props.jobPoundageTableReset();
    this.props.jobPoundageTableShow();
    this.props.jobPoundageTableGet({ id: record.id });
  }
  render() {
    return <ThisTable {...this.props} get={this.get} toggle={this.toggle} remove={this.remove} machineRead={this.machineRead} jobPoundageRead={this.jobPoundageRead} />
  }
};

const mapStateToProps = state => {
  const data = state.jobTypeManager;
  return {
    table: data.table.data,
    searchData: data.table.searchData,
    count: data.table.count,
    loading: data.table.loading,
    machineFormData: data.machineForm.data,
    machineTableVisible: data.machineTable.visible,
    jobPoundageTableVisible: data.jobPoundageTable.visible,
    jobPoundageSearchData: data.jobPoundageTable.searchData,
  }
}

const methods = JOBTYPE_MANAGER;

const mapDispatchToProps = {
  tableGet: methods.tableGet,
  tableToggle: methods.tableStatusToggle,
  formReset: methods.formReset,
  formGet: methods.formGet,
  formShow: methods.formShow,
  tableRemove: methods.tableRemove,
  machineTableReset: methods.machineTableReset,
  machineTableGet: methods.machineTableGet,
  machineTableShow: methods.machineTableShow,
  machineTableHide: methods.machineTableHide,
  machineFormSetData: methods.machineFormSetData,
  jobPoundageTableReset: methods.jobPoundageTableReset,
  jobPoundageTableGet: methods.jobPoundageTableGet,
  jobPoundageTableShow: methods.jobPoundageTableShow,
  jobPoundageTableHide: methods.jobPoundageTableHide,
  jobPoundageTableDisableEdit: methods.jobPoundageTableDisableEdit,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersJobTypeManagerTable)