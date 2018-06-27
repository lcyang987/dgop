import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { ROLE_MANAGER } from '@/actions';

class ContainersRoleManagerBtns extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    reset: PropTypes.func.isRequired,
    show: PropTypes.func.isRequired,
  }
  onClick() {
    this.props.reset();
    this.props.show('新增角色');
  }
  render() {
    return (
      <div style={{ margin: 6 }}>
        <Button onClick={this.onClick.bind(this)} loading={this.props.loading}>新增</Button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const data = state.sys.roleManager;
  return {
    loading: data.table.loading,
  }
}

const methods = ROLE_MANAGER;

const mapDispatchToProps = {
  reset: methods.formReset,
  show: methods.formShow,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersRoleManagerBtns);