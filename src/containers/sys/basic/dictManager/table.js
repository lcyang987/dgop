import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DICT_MANAGER } from '@/actions';
import ThisTable from '@/components/sys/basic/dictManager/table';

class ContainersDictManagerTable extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    childFormData: PropTypes.object.isRequired,
    childTableVisible: PropTypes.bool.isRequired,
    tableGet: PropTypes.func.isRequired,
    formGetMenuTree: PropTypes.func.isRequired,
    formReset: PropTypes.func.isRequired,
    formGet: PropTypes.func.isRequired,
    formShow: PropTypes.func.isRequired,
    childTableGet: PropTypes.func.isRequired,
    childTableShow: PropTypes.func.isRequired,
    childFormSetData: PropTypes.func.isRequired,
  }
  componentWillMount() {
    this.props.tableGet();
  }
  get(record) {
    this.props.formGetMenuTree({
      originTree: this.props.table,
      formId: record.id,
    })
    this.props.formReset();
    this.props.formShow(`编辑 一 ${record.typeName}`);
    this.props.formGet({ id: record.id });
  }
  read(record) {
    this.props.childTableReset();
    this.props.childTableShow();
    this.props.childTableGet({ codeType: record.typeValue });
    this.props.childFormSetData({ codeType: record.typeValue });
  }
  render() {
    return <ThisTable {...this.props} get={this.get} read={this.read} />
  }
};

const mapStateToProps = state => {
  const data = state.sys.basic.dictManager;
  return {
    table: data.table.data,
    loading: data.table.loading,
    childFormData: data.childForm.data,
    childTableVisible: data.childTable.visible,
  }
}

const methods = DICT_MANAGER;

const mapDispatchToProps = {
  tableGet: methods.tableGet,
  formGetMenuTree: methods.formGetMenuTree,
  formReset: methods.formReset,
  formGet: methods.formGet,
  formShow: methods.formShow,
  childTableReset: methods.childTableReset,
  childTableGet: methods.childTableGet,
  childTableShow: methods.childTableShow,
  childFormSetData: methods.childFormSetData,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersDictManagerTable);