import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BANK_CONFIG } from '@/actions';
import ThisForm from '@/components/sys/basic/bankConfig/form';

class ContainersBanckConfigForm extends Component {
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
          const searchData = {...this.props.searchData};
          searchData.currentPage = formData.id ? searchData.currentPage : 1;
          this.props.tableGet(searchData);
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
  const data = state.sys.basic.bankConfig;
  return {
    table: data.table.data,
    searchData: data.table.searchData,
    visible: data.form.visible,
    loading: data.form.loading,
    formData: data.form.data,
    title: data.form.title,
  };
};

const methods = BANK_CONFIG;

const mapDispatchToProps = {
  hide: methods.formHide,
  submit: methods.formSubmit,
  tableGet: methods.tableGet,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainersBanckConfigForm)