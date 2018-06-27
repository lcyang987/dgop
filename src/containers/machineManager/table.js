import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import { MACHINE_MANAGER } from '@/actions';
import ThisTable from '@/components/machineManager/table';

const confirm = Modal.confirm;

class ContainersMachineManagerTable extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
    searchData: PropTypes.object.isRequired,
    count: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    brandFormData: PropTypes.object.isRequired,
    brandTableVisible: PropTypes.bool.isRequired,
    componentFormData: PropTypes.object.isRequired,
    componentTableVisible: PropTypes.bool.isRequired,
    modelFormData: PropTypes.object.isRequired,
    modelTableVisible: PropTypes.bool.isRequired,
    tableGet: PropTypes.func.isRequired,
    tableToggle: PropTypes.func.isRequired,
    formReset: PropTypes.func.isRequired,
    formGet: PropTypes.func.isRequired,
    formShow: PropTypes.func.isRequired,
    tableRemove: PropTypes.func.isRequired,
    brandTableGet: PropTypes.func.isRequired,
    brandTableShow: PropTypes.func.isRequired,
    brandFormSetData: PropTypes.func.isRequired,
    componentTableGet: PropTypes.func.isRequired,
    componentTableShow: PropTypes.func.isRequired,
    componentFormSetData: PropTypes.func.isRequired,
    modelTableGet: PropTypes.func.isRequired,
    modelTableShow: PropTypes.func.isRequired,
    modelFormSetData: PropTypes.func.isRequired,
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
  brandRead(record) {
    this.props.brandTableReset();
    this.props.brandTableShow();
    this.props.brandTableGet({ id: record.id });
    this.props.brandFormSetData({ machineId: record.id, machineName: record.name });
  }
  componentRead(record) {
    this.props.componentTableReset();
    this.props.componentTableShow();
    this.props.componentTableGet({ id: record.id });
    this.props.componentFormSetData({ machineId: record.id, machineName: record.name });
  }
  modelRead(record) {
    this.props.modelTableReset();
    this.props.modelTableShow();
    this.props.modelTableGet({ id: record.id });
    this.props.modelFormSetData({ machineId: record.id, machineName: record.name });
  }
  render() {
    return <ThisTable {...this.props} get={this.get} toggle={this.toggle} remove={this.remove} brandRead={this.brandRead} componentRead={this.componentRead} modelRead={this.modelRead} />
  }
};

const mapStateToProps = state => {
  const data = state.machineManager;
  return {
    table: data.table.data,
    searchData: data.table.searchData,
    count: data.table.count,
    loading: data.table.loading,
    brandFormData: data.brandForm.data,
    brandTableVisible: data.brandTable.visible,
    componentFormData: data.componentForm.data,
    componentTableVisible: data.componentTable.visible,
    modelFormData: data.modelForm.data,
    modelTableVisible: data.modelTable.visible,
  }
}

const methods = MACHINE_MANAGER;

const mapDispatchToProps = {
  tableGet: methods.tableGet,
  tableToggle: methods.tableStatusToggle,
  formReset: methods.formReset,
  formGet: methods.formGet,
  formShow: methods.formShow,
  tableRemove: methods.tableRemove,
  brandTableReset: methods.brandTableReset,
  brandTableGet: methods.brandTableGet,
  brandTableShow: methods.brandTableShow,
  brandFormSetData: methods.brandFormSetData,
  componentTableReset: methods.componentTableReset,
  componentTableGet: methods.componentTableGet,
  componentTableShow: methods.componentTableShow,
  componentFormSetData: methods.componentFormSetData,
  modelTableReset: methods.modelTableReset,
  modelTableGet: methods.modelTableGet,
  modelTableShow: methods.modelTableShow,
  modelFormSetData: methods.modelFormSetData,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersMachineManagerTable)