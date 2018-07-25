import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import { AUDIT_MEMBER } from '@/actions';
import ThisTable from '@/components/audit/auditMember/table';

const confirm = Modal.confirm;

class ContainersAuditMemberTable extends Component {
  static propTypes = {
    dictData: PropTypes.object.isRequired,
    table: PropTypes.array.isRequired,
    searchData: PropTypes.object.isRequired,
    count: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    tableGet: PropTypes.func.isRequired,
    formSetData: PropTypes.func.isRequired,
    formReset: PropTypes.func.isRequired,
    formShow: PropTypes.func.isRequired,
    tableSuccess: PropTypes.func.isRequired,
    carouselReset: PropTypes.func.isRequired,
    carouselSetData: PropTypes.func.isRequired,
    carouselShow: PropTypes.func.isRequired,
  }
  get(record) {
    this.props.formReset();
    this.props.formShow(`审核不通过 一 ${record.name}`);
    this.props.formSetData({ authenticationId: record.id });
  }
  success(record) {
    confirm({
      title: `确认审核通过 一 ${record.name}`,
      content: '',
      okText: 'Yes',
      okType: 'waning',
      cancelText: 'No',
      maskClosable: true,
      onOk: () => {
        this.props.tableSuccess({
          authenticationId: record.id
        }).then(() => {
          const searchData = {...this.props.searchData};
          if (this.props.table.length === 1 && searchData.currentPage !== 1) { searchData.currentPage -= 1 };
          this.props.tableGet(searchData);
        });
      },
    });
  }
  show(text, record) {
    this.props.carouselReset();
    this.props.carouselSetData(text);
    this.props.carouselShow(`身份证件展示 一 ${record.name}`);
  }
  render() {
    return <ThisTable {...this.props} get={this.get} success={this.success} show={this.show} />
  }
};

const mapStateToProps = state => {
  const dict = state.dict;
  const data = state.audit.auditMember;
  return {
    dictData: dict.data,
    table: data.table.data,
    searchData: data.table.searchData,
    count: data.table.count,
    loading: data.table.loading,
  }
}

const methods = AUDIT_MEMBER;

const mapDispatchToProps = {
  tableGet: methods.tableGet,
  formSetData: methods.formSetData,
  formReset: methods.formReset,
  formShow: methods.formShow,
  tableSuccess: methods.tableSuccess,
  carouselReset: methods.carouselReset,
  carouselSetData: methods.carouselSetData,
  carouselShow: methods.carouselShow,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersAuditMemberTable)