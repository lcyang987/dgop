import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import { MENU_MANAGER } from '@/actions';
import ThisTable from '@/components/sys/menuManager/table';

const confirm = Modal.confirm;

class ContainersMenuManagerTable extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    tableGet: PropTypes.func.isRequired,
    formGetMenuTree: PropTypes.func.isRequired,
    formReset: PropTypes.func.isRequired,
    formSetData: PropTypes.func.isRequired,
    formGet: PropTypes.func.isRequired,
    formShow: PropTypes.func.isRequired,
    tableRemove: PropTypes.func.isRequired,
  }
  componentDidMount() {
    this.props.tableGet();
  }
  addChild(record) {
    this.props.formGetMenuTree({
      originTree: this.props.table,
      formId: -1,
    });
    this.props.formReset();
    this.props.formShow(`新增菜单`);
    this.props.formSetData({ parentId: '' + record.id });
  }
  get(record) {
    this.props.formGetMenuTree({
      originTree: this.props.table,
      formId: record.id,
    });
    this.props.formReset();
    this.props.formShow(`编辑 一 ${record.name}`);
    this.props.formGet({ id: record.id });
  }
  remove(record) {
    const _this = this;
    confirm({
      title: `确认删除 一 ${record.name}`,
      content: '',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      maskClosable: true,
      onOk() {
        _this.props.tableRemove({
          id: record.id
        }).then(() => {
          _this.props.tableGet();
        });
      },
    });
  }
  render() {
    return <ThisTable {...this.props} addChild={this.addChild} get={this.get} remove={this.remove} />
  }
};

const mapStateToProps = state => {
  const data = state.sys.menuManager;
  return {
    table: data.table.data,
    loading: data.table.loading,
  }
}

const methods = MENU_MANAGER;

const mapDispatchToProps = {
  tableGet: methods.tableGet,
  formGetMenuTree: methods.formGetMenuTree,
  formReset: methods.formReset,
  formSetData: methods.formSetData,
  formGet: methods.formGet,
  formShow: methods.formShow,
  tableRemove: methods.tableRemove,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersMenuManagerTable)