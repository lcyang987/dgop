import React, { Component } from 'react';
import { Form, Input, Row, Col, Select } from 'antd';
import PropTypes from 'prop-types';

const FormItem = Form.Item;
const { TextArea } = Input;
const { Option } = Select;

class ComponentsCropManagerForm extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    formData: PropTypes.object.isRequired,
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
    const formItemTextAreaLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };
    return (
      <Form style={{ margin: '8px 16px' }}>
        <Row>
          <Col span={24}>
            <FormItem label={'名称'} {...formItemTextAreaLayout}>
              {getFieldDecorator('name', {
                rules: [{
                  required: true,
                  message: '请输入名称!',
                }, {
                  max: 20,
                  message: '不能超过20个字'
                }],
              })(
                <Input placeholder={'例如：小麦'} />
              )}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label={'状态'} {...formItemLayout}>
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
            <FormItem label={'排序'} {...formItemLayout}>
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
          <Col span={24}>
            <FormItem label={'备注'} {...formItemTextAreaLayout}>
              {getFieldDecorator('comment', {
                rules: [{
                  max: 100,
                  message: '不能超过100个字'
                }],
              })(
                <TextArea placeholder="不能超过100个字" autosize={{ minRows: 4 }} style={{ resize: 'none' }} />
              )}
            </FormItem>
          </Col>
        </Row>
      </Form>
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
})(ComponentsCropManagerForm);
