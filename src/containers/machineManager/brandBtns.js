import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { MACHINE_MANAGER } from '@/actions';

class ContainersMachineManagerBrandBtns extends Component {
  static propTypes = {
    dictData: PropTypes.object.isRequired,
    dictLoading: PropTypes.bool.isRequired,
    table: PropTypes.array.isRequired,
    formData: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    hide: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    show: PropTypes.func.isRequired,
  }
  onClick() {
    const machineId = this.props.formData.machineId;
    const machineName = this.props.formData.machineName;
    this.props.reset();
    this.props.setData({ machineId, machineName });
    this.props.show('新增品牌');
  }
  render() {
    const BRANDFilter = this.props.dictData.BRAND.filter(t => !this.props.table.map(t => t.code).includes(t.value));
    return (
      <div style={{ margin: 6 }}>
        <Button onClick={this.onClick.bind(this)} loading={this.props.loading || this.props.table.some(t => t.loading)} disabled={!BRANDFilter.length}>{BRANDFilter.length ? '新增品牌' : '品牌已用完'}</Button>
        <Button onClick={this.props.hide} style={{ margin: '0 6px' }} type="danger">关闭</Button>
        一 {this.props.formData.machineName}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const dict = state.dict;
  const data = state.machineManager;
  return {
    dictData: dict.data,
    dictLoading: dict.loading,
    table: data.brandTable.data,
    formData: data.brandForm.data,
    loading: data.brandTable.loading,
  }
}

const methods = MACHINE_MANAGER;

const mapDispatchToProps = {
  setData: methods.brandFormSetData,
  hide: methods.brandTableHide,
  reset: methods.brandFormReset,
  show: methods.brandFormShow,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersMachineManagerBrandBtns);