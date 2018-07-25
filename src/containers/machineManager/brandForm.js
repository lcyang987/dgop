import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MACHINE_MANAGER } from '@/actions';
import ThisForm from '@/components/machineManager/brandForm';

class ContainersMachineManagerBrandForm extends Component {
  static propTypes = {
    dictData: PropTypes.object.isRequired,
    table: PropTypes.array.isRequired,
    visible: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    formData: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    hide: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
    tableGet: PropTypes.func.isRequired,
  }
  handleSubmit() {
    this.refs.form.validateFields((err, values) => {
      if (!err) {
        const formData = {
          ...this.props.formData,
          ...values,
          name: this.props.dictData.BRAND[values.code],
        };
        for (var v in formData) {
          formData[v] = formData[v] === undefined ? '' : formData[v];
        };
        this.props.submit(formData).then(() => {
          this.props.tableGet({ id: this.props.formData.machineId });
          this.props.hide();
        });
      }
    });
  }
  render() {
    const BRANDFilter = Object.entries(this.props.dictData.BRAND).filter(v => !this.props.table.map(t => t.code).includes(v[0]));
    return <ThisForm ref="form" {...this.props} handleSubmit={this.handleSubmit.bind(this)} BRANDFilter={BRANDFilter} />
  }
};

const mapStateToProps = state => {
  const dict = state.dict;
  const data = state.machineManager;
  return {
    dictData: dict.data,
    table: data.brandTable.data,
    formData: data.brandForm.data,
    visible: data.brandForm.visible,
    loading: data.brandForm.loading,
    title: data.brandForm.title,
  };
};

const methods = MACHINE_MANAGER;

const mapDispatchToProps = {
  hide: methods.brandFormHide,
  submit: methods.brandFormSubmit,
  tableGet: methods.brandTableGet,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainersMachineManagerBrandForm);