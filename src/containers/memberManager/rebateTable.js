import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MEMBER_MANAGER } from '@/actions';
import ThisTable from '@/components/memberManager/rebateTable';

class ContainersMemberManagerRebateTable extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    params: PropTypes.object.isRequired,
    tableGet: PropTypes.func.isRequired,
    formSetData: PropTypes.func.isRequired,
    formReset: PropTypes.func.isRequired,
    formShow: PropTypes.func.isRequired,
  }
  get(record) {
    this.props.formReset();
    const params = { ...record };
    delete params.loading;
    this.props.formSetData({
      ...params,
      id: this.props.params.id,
    });
    this.props.formShow(`编辑 一 ${record.jobTypeName}`);
  }
  render() {
    return <ThisTable {...this.props} get={this.get} />
  }
};

const mapStateToProps = state => {
  const data = state.memberManager;
  return {
    table: data.rebateTable.data,
    loading: data.rebateTable.loading,
    params: data.rebateTable.params,
  }
}

const methods = MEMBER_MANAGER;

const mapDispatchToProps = {
  tableGet: methods.rebateTableGet,
  formSetData: methods.rebateFormSetData,
  formReset: methods.rebateFormReset,
  formShow: methods.rebateFormShow,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersMemberManagerRebateTable);