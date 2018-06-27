import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DICT_MANAGER } from '@/actions';
import ThisTable from '@/components/sys/basic/dictManager/childTable';


class ContainersDictManagerChildTable extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
    formData: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    tableGet: PropTypes.func.isRequired,
    tableToggle: PropTypes.func.isRequired,
    formSetData: PropTypes.func.isRequired,
    formReset: PropTypes.func.isRequired,
    formGet: PropTypes.func.isRequired,
    formShow: PropTypes.func.isRequired,
  }
  get(record) {
    const codeType = this.props.formData.codeType;
    this.props.formReset();
    this.props.formSetData({ codeType });
    this.props.formShow(`编辑 一 ${record.codeName}`);
    this.props.formGet({ id: record.id });
  }
  toggle(record, bool) {
    this.props.tableToggle({
      id: record.id,
      status: bool ? 'y' : 'n',
    })
  }
  render() {
    return <ThisTable {...this.props} get={this.get} toggle={this.toggle} />
  }
};

const mapStateToProps = state => {
  const data = state.sys.basic.dictManager;
  return {
    table: data.childTable.data,
    formData: data.childForm.data,
    loading: data.childTable.loading,
  }
}

const methods = DICT_MANAGER;

const mapDispatchToProps = {
  tableGet: methods.childTableGet,
  tableToggle: methods.childTableStatusToggle,
  formSetData: methods.childFormSetData,
  formReset: methods.childFormReset,
  formGet: methods.childFormGet,
  formShow: methods.childFormShow,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersDictManagerChildTable);