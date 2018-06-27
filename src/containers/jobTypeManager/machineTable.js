import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import { JOBTYPE_MANAGER } from '@/actions';
import ThisTable from '@/components/jobTypeManager/machineTable';

const confirm = Modal.confirm;

class ContainersJobTypeManagerMachineTable extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
    formData: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    tableGet: PropTypes.func.isRequired,
    tableRemove: PropTypes.func.isRequired,
    formSetData: PropTypes.func.isRequired,
    formReset: PropTypes.func.isRequired,
    formShow: PropTypes.func.isRequired,
    machineListGet: PropTypes.func.isRequired,
    machineComponentListGet: PropTypes.func.isRequired,
  }
  get(record) {
    const jobTypeId = this.props.formData.jobTypeId;
    this.props.formReset();
    this.props.formSetData({ ...record, jobTypeId });
    this.props.machineListGet();
    if (record.machineId) { this.props.machineComponentListGet({ id: record.machineId }); };
    this.props.formShow(`编辑 一 ${record.machineName}`);
  }
  toggle(record, bool) {
    this.props.tableToggle({
      id: record.id,
      status: bool ? 'ENABLE' : 'DISABLE',
    })
  }
  remove(record) {
    confirm({
      title: `确认删除 一 ${record.machineName}`,
      content: '',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      maskClosable: true,
      onOk: () => {
        this.props.tableRemove({
          id: record.id
        }).then(() => {
          this.props.tableGet({ id: this.props.formData.jobTypeId });
        });
      },
    });
  }
  render() {
    return <ThisTable {...this.props} get={this.get} toggle={this.toggle} remove={this.remove} />
  }
};

const mapStateToProps = state => {
  const data = state.jobTypeManager;
  return {
    table: data.machineTable.data,
    formData: data.machineForm.data,
    loading: data.machineTable.loading,
  }
}

const methods = JOBTYPE_MANAGER;

const mapDispatchToProps = {
  tableGet: methods.machineTableGet,
  tableRemove: methods.machineTableRemove,
  formSetData: methods.machineFormSetData,
  formReset: methods.machineFormReset,
  formShow: methods.machineFormShow,
  machineListGet: methods.machineFormMachineListGet,
  machineComponentListGet: methods.machineFormMachineComponentListGet,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersJobTypeManagerMachineTable);