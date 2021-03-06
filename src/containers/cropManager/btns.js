import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { CROP_MANAGER } from '@/actions';

class ContainersCropManagerBtns extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    reset: PropTypes.func.isRequired,
    show: PropTypes.func.isRequired,
  }
  onClick() {
    this.props.reset();
    this.props.show('新增农作物');
  }
  render() {
    return (
      <div style={{ margin: '8px 0 10px 6px' }}>
        <Button onClick={this.onClick.bind(this)} loading={this.props.loading || this.props.table.some(t => t.loading)}>新增</Button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const data = state.cropManager;
  return {
    table: data.table.data,
    loading: data.table.loading,
  }
}

const methods = CROP_MANAGER;

const mapDispatchToProps = {
  reset: methods.formReset,
  show: methods.formShow,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersCropManagerBtns);