import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MENU_MANAGER } from '@/actions';
import ThisForm from '@/components/sys/menuManager/form';

class ContainersMenuManagerForm extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
    visible: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    formData: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    menuTree: PropTypes.array.isRequired,
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
          this.props.tableGet();
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
  const data = state.sys.menuManager;
  return {
    table: data.table.data,
    visible: data.form.visible,
    loading: data.form.loading,
    formData: data.form.data,
    title: data.form.title,
    menuTree: data.form.menuTree,
  };
};

const methods = MENU_MANAGER;

const mapDispatchToProps = {
  hide: methods.formHide,
  submit: methods.formSubmit,
  tableGet: methods.tableGet,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainersMenuManagerForm);