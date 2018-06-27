import React, { Component } from 'react';
import { Form, Input, Row, Col, Select } from 'antd';
import PropTypes from 'prop-types';
import CommonFormModal from '@/components/common/FormModal';

const FormItem = Form.Item;
const { Option } = Select;

class ComponentsBankConfigForm extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    formData: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 19 },
      },
    };
    const formSmallItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 10 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    return (
      <CommonFormModal {...this.props} width={380}>
        <Form style={{ margin: '8px 16px' }}>
          <Row>
            <Col span={24}>
              <FormItem label={'名称'} {...formItemLayout}>
                {getFieldDecorator('bankName', {
                  rules: [{
                    required: true,
                    message: '请输入名称!',
                  }, {
                    max: 20,
                    message: '不能超过20个字'
                  }],
                })(
                  <Input placeholder={'例如：招商银行'} />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label={'状态'} {...formSmallItemLayout}>
                {getFieldDecorator('status', {
                  rules: [{
                    required: true,
                    message: '请选择状态!',
                  }],
                })(
                  <Select>
                    <Option value="ENABLE">启用</Option>
                    <Option value="DISABLE">停用</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label={'排序'} {...formSmallItemLayout}>
                {getFieldDecorator('sort', {
                  rules: [{
                    required: true,
                    message: '请输入排序!',
                  }, {
                    max: 2,
                    message: '不能超过两位数',
                  }],
                })(
                  <Input type="number" placeholder={'例如: 21'} />
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
})(ComponentsBankConfigForm);
