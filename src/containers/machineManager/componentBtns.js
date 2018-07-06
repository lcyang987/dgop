import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { MACHINE_MANAGER } from '@/actions';

class ContainersMachineManagerComponentBtns extends Component {
  static propTypes = {
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
    this.props.show('新增组件');
  }
  render() {
    return (
      <div style={{ margin: 6 }}>
        <Button onClick={this.onClick.bind(this)} loading={this.props.loading || this.props.table.some(t => t.loading)}>新增组件</Button>
        <Button onClick={this.props.hide} style={{ margin: '0 6px' }} type="danger">关闭</Button>
        一 {this.props.searchData.name}
      </div>
    )
  }
}

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
  setData: methods.componentFormSetData,
  hide: methods.componentTableHide,
  reset: methods.componentFormReset,
  show: methods.componentFormShow,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersMachineManagerComponentBtns);