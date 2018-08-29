import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MEMBER_MANAGER } from '@/actions';
import ThisForm from '@/components/memberManager/rebateForm';

class ContainersMemberManagerRebateForm extends Component {
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
          this.props.tableGet({ id: this.props.formData.id });
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
  const data = state.memberManager;
  return {
    table: data.rebateTable.data,
    formData: data.rebateForm.data,
    visible: data.rebateForm.visible,
    loading: data.rebateForm.loading,
    title: data.rebateForm.title,
  };
};

const methods = MEMBER_MANAGER;

const mapDispatchToProps = {
  hide: methods.rebateFormHide,
  submit: methods.rebateFormSubmit,
  tableGet: methods.rebateTableGet,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainersMemberManagerRebateForm);