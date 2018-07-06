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
    loading: PropTypes.bool.isRequired,
    searchData: PropTypes.object.isRequired,
    hide: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    show: PropTypes.func.isRequired,
  }
  onClick() {
    this.props.reset();
    this.props.setData({
      machineId: this.props.searchData.id,
      machineName: this.props.searchData.name,
    });
    this.props.show('新增品牌');
  }
  render() {
    const BRANDFilter = this.props.dictData.BRAND.filter(t => !this.props.table.map(t => t.code).includes(t.value));
    return (
      <div style={{ margin: 6 }}>
        <Button onClick={this.onClick.bind(this)} loading={this.props.loading || this.props.table.some(t => t.loading)} disabled={!BRANDFilter.length}>{BRANDFilter.length ? '新增品牌' : '品牌已用完'}</Button>
        <Button onClick={this.props.hide} style={{ margin: '0 6px' }} type="danger">关闭</Button>
        一 {this.props.searchData.name}
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
    loading: data.brandTable.loading,
    searchData: data.brandTable.searchData,
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