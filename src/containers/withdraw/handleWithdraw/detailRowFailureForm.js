import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { HANDLE_WITHDRAW } from '@/actions';
import ThisForm from '@/components/withdraw/handleWithdraw/detailRowFailureform';

class ContainersHandleWithDrawDetailFailureForm extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
    visible: PropTypes.bool.isRequired,
    formData: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    hide: PropTypes.func.isRequired,
    setFailure: PropTypes.func.isRequired,
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
        this.props.setFailure(formData);
        this.props.hide();
      }
    });
  }
  render() {
    return <ThisForm ref="form" {...this.props} handleSubmit={this.handleSubmit.bind(this)} />
  }
};

const mapStateToProps = state => {
  const data = state.withdraw.handleWithdraw;
  return {
    table: data.table.data,
    searchData: data.table.searchData,
    visible: data.detailRowFailureForm.visible,
    formData: data.detailRowFailureForm.data,
    title: data.detailRowFailureForm.title,
  };
};

const methods = HANDLE_WITHDRAW;

const mapDispatchToProps = {
  hide: methods.detailRowFailureFormHide,
  setFailure: methods.detailRowFormFailure,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainersHandleWithDrawDetailFailureForm)