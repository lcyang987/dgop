import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DEPOSIT_MANAGER } from '@/actions';
import ThisForm from '@/components/depositManager/refundForm';

class ContainersDepositManagerRefundForm extends Component {
  static propTypes = {
    // table: PropTypes.array.isRequired,
    visible: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    formData: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    detailTableSearchData: PropTypes.object.isRequired,
    flowTableVisible: PropTypes.bool.isRequired,
    flowTableSearchData: PropTypes.object.isRequired,
    hide: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
    detailTableGet: PropTypes.func.isRequired,
    flowTableGet: PropTypes.func.isRequired,
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
          this.props.detailTableGet(this.props.detailTableSearchData);
          this.props.hide();
          if (this.props.flowTableVisible) {
            this.props.flowTableGet(this.props.flowTableSearchData);
          }
        });
      }
    });
  }
  render() {
    return <ThisForm ref="form" {...this.props} handleSubmit={this.handleSubmit.bind(this)} />
  }
};

const mapStateToProps = state => {
  const data = state.depositManager;
  return {
    // table: data.refundTable.data,
    formData: data.refundForm.data,
    visible: data.refundForm.visible,
    loading: data.refundForm.loading,
    title: data.refundForm.title,
    detailTableSearchData: data.detailTable.searchData,
    flowTableVisible: data.flowTable.visible,
    flowTableSearchData: data.flowTable.searchData,
  };
};

const methods = DEPOSIT_MANAGER;

const mapDispatchToProps = {
  hide: methods.refundFormHide,
  submit: methods.refundFormSubmit,
  detailTableGet: methods.detailTableGet,
  flowTableGet: methods.flowTableGet,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainersDepositManagerRefundForm);