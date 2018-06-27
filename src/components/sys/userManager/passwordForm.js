import React, { Component } from 'react';
import { Form, Row, Col, Input } from 'antd';
import PropTypes from 'prop-types';
import CommonFormModal from '@/components/common/FormModal';

const FormItem = Form.Item;

class ComponentsUserManagerPasswordForm extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    formData: PropTypes.object.isRequired,
  }
  handleConfirmPassword(rule, value, callback) {
    const { getFieldValue } = this.props.form
    if (value && value !== getFieldValue('password')) {
      callback('两次输入不一致！')
    }
    callback()
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    return (
      <CommonFormModal {...this.props} width={600}>
        <Form style={{ margin: '8px 16px' }}>
          <Row gutter={24}>
            <Col span={12}>
              <FormItem label={'密码'} {...formItemLayout}>
                {getFieldDecorator('password', {
                  rules: [{
                    required: true,
                    message: '请输入密码!',
                  }, {
                    max: 20,
                    message: '不能超过20个字'
                  }],
                })(
                  <Input type="password" />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label={'确认密码'} {...formItemLayout}>
                {getFieldDecorator('confirmPassword', {
                  rules: [{
                    required: true,
                    message: '请再次输入以确认新密码!',
                  }, {
                    validator: this.handleConfirmPassword.bind(this),
                  }],
                })(
                  <Input type="password" />
                )}
              </FormItem>
            </Col>
          </Row>
        </Form>
      </CommonFormModal>
    )
  }
};

export default Form.create({
  mapPropsToFields(props) {
    const values = {};
    for (var v in props.formData) {
      values[v] = Form.createFormField({
        value: props.formData[v],
      })
    }
    return values;
  }
})(ComponentsUserManagerPasswordForm);
