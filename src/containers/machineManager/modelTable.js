import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import { MACHINE_MANAGER } from '@/actions';
import ThisTable from '@/components/machineManager/modelTable';

const confirm = Modal.confirm;

class ContainersMachineManagerModelTable extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
    formData: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    tableGet: PropTypes.func.isRequired,
    tableRemove: PropTypes.func.isRequired,
    formSetData: PropTypes.func.isRequired,
    formReset: PropTypes.func.isRequired,
    formShow: PropTypes.func.isRequired,
  }
  get(record) {
    const machineId = this.props.formData.machineId;
    this.props.formReset();
    this.props.formSetData({ ...record, machineId });
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
    table: data.modelTable.data,
    formData: data.modelForm.data,
    loading: data.modelTable.loading,
  }
}

const methods = MACHINE_MANAGER;

const mapDispatchToProps = {
  tableGet: methods.modelTableGet,
  tableRemove: methods.modelTableRemove,
  formSetData: methods.modelFormSetData,
  formReset: methods.modelFormReset,
  formShow: methods.modelFormShow,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersMachineManagerModelTable);