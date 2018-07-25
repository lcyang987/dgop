import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { JOBTYPE_MANAGER } from '@/actions';

class ContainersJobTypeManagerMachinBtns extends Component {
  static propTypes = {
    dictData: PropTypes.object.isRequired,
    table: PropTypes.array.isRequired,
    formData: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    hide: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    show: PropTypes.func.isRequired,
    machineListGet: PropTypes.func.isRequired,
  }
  onClick() {
    const jobTypeId = this.props.formData.jobTypeId;
    this.props.reset();
    this.props.setData({ jobTypeId });
    this.props.machineListGet();
    this.props.show('新增农机');
  }
  render() {
    return (
      <div style={{ margin: 6 }}>
        <Button onClick={this.onClick.bind(this)} loading={this.props.loading || this.props.table.some(t => t.loading)}>新增</Button>
        <Button onClick={this.props.hide} style={{ margin: '0 6px' }} type="danger">关闭</Button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const dict = state.dict;
  const data = state.jobTypeManager;
  return {
    dictData: dict.data,
    table: data.machineTable.data,
    formData: data.machineForm.data,
    loading: data.machineTable.loading,
  }
}

const methods = JOBTYPE_MANAGER;

const mapDispatchToProps = {
  setData: methods.machineFormSetData,
  hide: methods.machineTableHide,
  reset: methods.machineFormReset,
  show: methods.machineFormShow,
  machineListGet: methods.machineFormMachineListGet,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersJobTypeManagerMachinBtns);