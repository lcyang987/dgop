import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ROLE_MANAGER } from '@/actions';
import ThisForm from '@/components/sys/roleManager/configForm';

class ContainersRoleManagerConfigForm extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
    visible: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    formData: PropTypes.object.isRequired,
    allMenu: PropTypes.array.isRequired,
    roleMenu: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    hide: PropTypes.func.isRequired,
  }
  handleSubmit() {
    this.refs.form.validateFields((err, values) => {
      if (!err) {
        values.menuIds = '[' + values.menuIds.toString() + ']';
        const formData = {
          ...this.props.formData,
          ...values,
        };
        for (var v in formData) {
          formData[v] = formData[v] === undefined ? '' : formData[v];
        };
        this.props.submit(formData).then(() => {
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
  const data = state.sys.roleManager;
  return {
    table: data.table.data,
    visible: data.configForm.visible,
    loading: data.configForm.loading,
    formData: data.configForm.data,
    allMenu: data.configForm.allMenu,
    roleMenu: data.configForm.roleMenu,
    title: data.configForm.title,
  };
};

const methods = ROLE_MANAGER;

const mapDispatchToProps = {
  hide: methods.configFormHide,
  submit: methods.configFormSubmit,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainersRoleManagerConfigForm)