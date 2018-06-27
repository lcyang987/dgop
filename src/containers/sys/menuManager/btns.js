import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { MENU_MANAGER } from '@/actions';

class ContainersMenuManagerBtns extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    reset: PropTypes.func.isRequired,
    show: PropTypes.func.isRequired,
    formGetMenuTree: PropTypes.func.isRequired,
  }
  onClick() {
    this.props.reset();
    this.props.formGetMenuTree({
      originTree: this.props.table,
      formId: -1,
    });
    this.props.show('新增菜单');
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
  const data = state.sys.menuManager;
  return {
    table: data.table.data,
    loading: data.table.loading,
  }
}

const methods = MENU_MANAGER;

const mapDispatchToProps = {
  reset: methods.formReset,
  show: methods.formShow,
  formGetMenuTree: methods.formGetMenuTree,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersMenuManagerBtns);