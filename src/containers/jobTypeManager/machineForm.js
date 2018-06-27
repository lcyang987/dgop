import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { JOBTYPE_MANAGER } from '@/actions';
import ThisForm from '@/components/jobTypeManager/machineForm';

class ContainersJobTypeManagerMachineForm extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
    visible: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    machineList: PropTypes.array.isRequired,
    machineListLoading: PropTypes.bool.isRequired,
    machineComponentList: PropTypes.array.isRequired,
    machineComponentListLoading: PropTypes.bool.isRequired,
    formData: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    hide: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
    tableGet: PropTypes.func.isRequired,
    formSetData: PropTypes.func.isRequired,
    machineListGet: PropTypes.func.isRequired,
    machineComponentListGet: PropTypes.func.isRequired,
  }
  onSelect(id) {
    this.props.formSetData({
      ...this.props.form.getFieldsValue(),
      machineId: id,
      machineComponentId: 0,
    })
    this.props.machineComponentListGet({ id });
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
          this.props.tableGet({ id: this.props.formData.jobTypeId });
          this.props.hide();
        });
      }
    });
  }
  render() {
    return <ThisForm ref="form" {...this.props} onSelect={this.onSelect} handleSubmit={this.handleSubmit.bind(this)} />
  }
};

const mapStateToProps = state => {
  const data = state.jobTypeManager;
  return {
    table: data.machineTable.data,
    formData: data.machineForm.data,
    visible: data.machineForm.visible,
    loading: data.machineForm.loading,
    title: data.machineForm.title,
    machineList: data.machineForm.machine.data,
    machineListLoading: data.machineForm.machine.loading,
    machineComponentList: data.machineForm.machine.component.data,
    machineComponentListLoading: data.machineForm.machine.component.loading,
  };
};

const methods = JOBTYPE_MANAGER;

const mapDispatchToProps = {
  hide: methods.machineFormHide,
  submit: methods.machineFormSubmit,
  tableGet: methods.machineTableGet,
  formSetData: methods.machineFormSetData,
  machineListGet: methods.machineFormMachineListGet,
  machineComponentListGet: methods.machineFormMachineComponentListGet,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainersJobTypeManagerMachineForm);