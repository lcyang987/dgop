import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { JOBDEMAND_MANAGER } from '@/actions';
import ThisForm from '@/components/jobDemandManager/depositRefundForm';

class ContainersJobDemandManagerDepositRefundForm extends Component {
  static propTypes = {
    // table: PropTypes.array.isRequired,
    visible: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    formData: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    detailTableSearchData: PropTypes.object.isRequired,
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
        });
      }
    });
  }
  render() {
    return <ThisForm ref="form" {...this.props} handleSubmit={this.handleSubmit.bind(this)} />
  }
};

const mapStateToProps = state => {
  const data = state.jobDemandManager;
  return {
    // table: data.refundTable.data,
    formData: data.depositRefundForm.data,
    visible: data.depositRefundForm.visible,
    loading: data.depositRefundForm.loading,
    title: data.depositRefundForm.title,
    detailTableSearchData: data.depositDetailTable.searchData,
  };
};

const methods = JOBDEMAND_MANAGER;

const mapDispatchToProps = {
  hide: methods.depositRefundFormHide,
  submit: methods.depositRefundFormSubmit,
  detailTableGet: methods.depositDetailTableGet,
  flowTableGet: methods.depositFlowTableGet,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainersJobDemandManagerDepositRefundForm);