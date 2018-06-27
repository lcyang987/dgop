import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { USER_MANAGER } from '@/actions';
import ThisForm from '@/components/sys/userManager/passwordForm';

class ContainersUserManagerPasswordForm extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
    visible: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    formData: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    hide: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
  }
  handleSubmit() {
    this.refs.form.validateFields((err, values) => {
      if (!err) {
        for (var v in values) {
          values[v] = values[v] === undefined ? '' : values[v];
        };
        this.props.submit(values).then(() => {
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
  const data = state.sys.userManager;
  return {
    table: data.table.data,
    visible: data.passwordForm.visible,
    loading: data.passwordForm.loading,
    formData: data.passwordForm.data,
    title: data.passwordForm.title,
  };
};

const methods = USER_MANAGER;

const mapDispatchToProps = {
  hide: methods.passwordFormHide,
  submit: methods.passwordFormSubmit,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainersUserManagerPasswordForm)