import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import { ROLE_MANAGER } from '@/actions';
import ThisTable from '@/components/sys/roleManager/table';

const confirm = Modal.confirm;

class ContainersRoleManagerTable extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
    searchData: PropTypes.object.isRequired,
    count: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    tableGet: PropTypes.func.isRequired,
    formReset: PropTypes.func.isRequired,
    formGet: PropTypes.func.isRequired,
    formShow: PropTypes.func.isRequired,
    tableRemove: PropTypes.func.isRequired,
    configFormGetAllMenu: PropTypes.func.isRequired,
    configFormGetMenuByRole: PropTypes.func.isRequired,
    configFormReset: PropTypes.func.isRequired,
    configFormShow: PropTypes.func.isRequired,
    configFormHide: PropTypes.func.isRequired,
    configFormSetData: PropTypes.func.isRequired,
    configFormOpenLoading: PropTypes.func.isRequired,
    configFormCloseLoading: PropTypes.func.isRequired,
  }
  get(record) {
    this.props.formReset();
    this.props.formShow(`编辑 一 ${record.name}`);
    this.props.formGet({ id: record.id });
  }
  getConfig(record) {
    this.props.configFormReset();
    this.props.configFormShow(`配置菜单 一 ${record.name}`);
    this.props.configFormOpenLoading()
    this.props.configFormSetData({ roleId: record.id });
    Promise.all([
      this.props.configFormGetAllMenu(),
      this.props.configFormGetMenuByRole({ roleId: record.id }),
    ])
      .then(() => {
        this.props.configFormCloseLoading();
      }, () => {
        this.props.configFormHide();
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
  render() {
    return <ThisTable {...this.props} get={this.get} getConfig={this.getConfig} remove={this.remove} />
  }
};

const mapStateToProps = state => {
  const data = state.sys.roleManager;
  return {
    table: data.table.data,
    searchData: data.table.searchData,
    count: data.table.count,
    loading: data.table.loading,
  }
}

const methods = ROLE_MANAGER;

const mapDispatchToProps = {
  tableGet: methods.tableGet,
  formReset: methods.formReset,
  formGet: methods.formGet,
  formShow: methods.formShow,
  tableRemove: methods.tableRemove,
  configFormReset: methods.configFormReset,
  configFormShow: methods.configFormShow,
  configFormHide: methods.configFormHide,
  configFormSetData: methods.configFormSetData,
  configFormGetAllMenu: methods.configFormGetAllMenu,
  configFormGetMenuByRole: methods.configFormGetMenuByRole,
  configFormOpenLoading: methods.configFormOpenLoading,
  configFormCloseLoading: methods.configFormCloseLoading,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersRoleManagerTable)