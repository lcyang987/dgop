import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import { MACHINE_MANAGER } from '@/actions';
import ThisTable from '@/components/machineManager/componentTable';

const confirm = Modal.confirm;

class ContainersMachineManagerComponentTable extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    searchData: PropTypes.object.isRequired,
    tableGet: PropTypes.func.isRequired,
    tableRemove: PropTypes.func.isRequired,
    formSetData: PropTypes.func.isRequired,
    formReset: PropTypes.func.isRequired,
    formShow: PropTypes.func.isRequired,
  }
  get(record) {
    this.props.formReset();
    this.props.formSetData({
      ...record,
      machineId: this.props.searchData.id,
      machineName: this.props.searchData.name,
      sort: '' + record.sort,
    });
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
          this.props.tableGet({ id: this.props.searchData.id });
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
    table: data.componentTable.data,
    loading: data.componentTable.loading,
    searchData: data.componentTable.searchData,
  }
}

const methods = MACHINE_MANAGER;

const mapDispatchToProps = {
  tableGet: methods.componentTableGet,
  tableRemove: methods.componentTableRemove,
  formSetData: methods.componentFormSetData,
  formReset: methods.componentFormReset,
  formShow: methods.componentFormShow,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersMachineManagerComponentTable);