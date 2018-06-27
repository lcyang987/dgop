import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import { MACHINE_MANAGER } from '@/actions';
import ThisTable from '@/components/machineManager/brandTable';

const confirm = Modal.confirm;

class ContainersMachineManagerBrandTable extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
    formData: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    tableGet: PropTypes.func.isRequired,
    tableToggle: PropTypes.func.isRequired,
    tableRemove: PropTypes.func.isRequired,
    formSetData: PropTypes.func.isRequired,
    formReset: PropTypes.func.isRequired,
    formShow: PropTypes.func.isRequired,
  }
  get(record) {
    const machineId = this.props.formData.machineId;
    const machineName = this.props.formData.machineName;
    this.props.formReset();
    this.props.formSetData({ ...record, machineId, machineName });
    this.props.formShow(`编辑 一 ${record.name}`);
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
          this.props.tableGet({ id: this.props.formData.machineId });
        });
      },
    });
  }
  render() {
    return <ThisTable {...this.props} get={this.get} toggle={this.toggle} remove={this.remove} />
  }
};

const mapStateToProps = state => {
  const data = state.machineManager;
  return {
    table: data.brandTable.data,
    formData: data.brandForm.data,
    loading: data.brandTable.loading,
  }
}

const methods = MACHINE_MANAGER;

const mapDispatchToProps = {
  tableGet: methods.brandTableGet,
  tableToggle: methods.brandTableStatusToggle,
  tableRemove: methods.brandTableRemove,
  formSetData: methods.brandFormSetData,
  formReset: methods.brandFormReset,
  formShow: methods.brandFormShow,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersMachineManagerBrandTable);