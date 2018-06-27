import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Spin, Button } from 'antd';
import PropTypes from 'prop-types';
import { CROP_MANAGER } from '@/actions';
import ThisForm from '@/components/cropManager/form';

class form extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
    searchData: PropTypes.object.isRequired,
    visible: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    formData: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    hide: PropTypes.func.isRequired,
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
    return (
      <Modal
        width={500}
        title={this.props.title}
        visible={this.props.visible}
        onCancel={this.props.hide}
        footer={[
          <Button key="back" onClick={this.props.hide}>返回</Button>,
          <Button key="submit" type="primary" loading={this.props.loading} onClick={this.handleSubmit.bind(this)}>提交</Button>,
        ]}
      >
        <Spin spinning={this.props.loading}>
          <ThisForm ref="form" {...this.props} />
        </Spin>
      </Modal>
    )
  }
};

const mapStateToProps = state => {
  const data = state.cropManager;
  return {
    table: data.table.data,
    searchData: data.table.searchData,
    visible: data.form.visible,
    loading: data.form.loading,
    formData: data.form.data,
    title: data.form.title,
  };
};

const methods = CROP_MANAGER;

const mapDispatchToProps = {
  hide: methods.formHide,
  submit: methods.formSubmit,
  tableGet: methods.tableGet,
};

export default connect(mapStateToProps, mapDispatchToProps)(form)