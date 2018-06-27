import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import { CROP_MANAGER } from '@/actions';
import ThisTable from '@/components/cropManager/table';

const confirm = Modal.confirm;

class table extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
    count: PropTypes.number.isRequired,
    searchData: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    tableGet: PropTypes.func.isRequired,
    tableToggle: PropTypes.func.isRequired,
    formReset: PropTypes.func.isRequired,
    formGet: PropTypes.func.isRequired,
    formShow: PropTypes.func.isRequired,
    tableRemove: PropTypes.func.isRequired,
  }
  get(record) {
    this.props.formReset();
    this.props.formShow(`编辑 一 ${record.name}`);
    this.props.formGet({ id: record.id });
  }
  toggle(record, bool) {
    this.props.tableToggle({
      id: record.id,
      status: bool ? 'ENABLE' : 'DISABLE',
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
    return <ThisTable {...this.props} get={this.get} toggle={this.toggle} remove={this.remove} />
  }
};

const mapStateToProps = state => {
  const data = state.cropManager;
  return {
    table: data.table.data,
    count: data.table.count,
    searchData: data.table.searchData,
    loading: data.table.loading,
  }
}

const methods = CROP_MANAGER;

const mapDispatchToProps = {
  tableGet: methods.tableGet,
  tableToggle: methods.tableStatusToggle,
  formReset: methods.formReset,
  formGet: methods.formGet,
  formShow: methods.formShow,
  tableRemove: methods.tableRemove,
}

export default connect(mapStateToProps, mapDispatchToProps)(table)