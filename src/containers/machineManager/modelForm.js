import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MACHINE_MANAGER } from '@/actions';
import ThisForm from '@/components/machineManager/modelForm';

class ContainersMachineManagerModelForm extends Component {
  static propTypes = {
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
    return <ThisForm ref="form" {...this.props} handleSubmit={this.handleSubmit.bind(this)} />
  }
};

const mapStateToProps = state => {
  const data = state.machineManager;
  return {
    table: data.modelTable.data,
    formData: data.modelForm.data,
    visible: data.modelForm.visible,
    loading: data.modelForm.loading,
    title: data.modelForm.title,
  };
};

const methods = MACHINE_MANAGER;

const mapDispatchToProps = {
  hide: methods.modelFormHide,
  submit: methods.modelFormSubmit,
  tableGet: methods.modelTableGet,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainersMachineManagerModelForm);