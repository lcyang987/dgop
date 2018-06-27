import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { USER_MANAGER } from '@/actions';
import ThisTable from '@/components/sys/userManager/table';

class ContainersUserManagerTable extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
    searchData: PropTypes.object.isRequired,
    count: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    tableGet: PropTypes.func.isRequired,
    tableToggle: PropTypes.func.isRequired,
    formReset: PropTypes.func.isRequired,
    formGet: PropTypes.func.isRequired,
    formShow: PropTypes.func.isRequired,
    passwordFormSetData: PropTypes.func.isRequired,
    passwordFormReset: PropTypes.func.isRequired,
    passwordFormShow: PropTypes.func.isRequired,
  }
  get(record) {
    this.props.formReset();
    this.props.formShow(`编辑 一 ${record.loginName}`);
    this.props.formGet({ id: record.id });
  }
  getPassword(record) {
    this.props.passwordFormReset();
    this.props.passwordFormSetData({ id: record.id });
    this.props.passwordFormShow(`修改密码 一 ${record.loginName}`);
  }
  toggle(record, bool) {
    this.props.tableToggle({
      id: record.id,
      status: bool ? 'y' : 'n',
    })
  }
  render() {
    return <ThisTable {...this.props} get={this.get} getPassword={this.getPassword} toggle={this.toggle} />
  }
};

const mapStateToProps = state => {
  const data = state.sys.userManager;
  return {
    table: data.table.data,
    searchData: data.table.searchData,
    count: data.table.count,
    loading: data.table.loading,
  }
}

const methods = USER_MANAGER;

const mapDispatchToProps = {
  tableGet: methods.tableGet,
  tableToggle: methods.tableStatusToggle,
  formReset: methods.formReset,
  formGet: methods.formGet,
  formShow: methods.formShow,
  passwordFormSetData: methods.passwordFormSetData,
  passwordFormReset: methods.passwordFormReset,
  passwordFormShow: methods.passwordFormShow,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersUserManagerTable)