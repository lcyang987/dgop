import React, { Component } from 'react';
import { Form, Input, Row, Col, Select } from 'antd';
import PropTypes from 'prop-types';
import CommonFormModal from '@/components/common/FormModal';

const FormItem = Form.Item;
const { Option } = Select;

class ComponentsDictManagerChildForm extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
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
    return (
      <CommonFormModal {...this.props} width={700}>
        <Form style={{ margin: '8px 16px' }}>
          <Row>
            <Col span={12}>
              <FormItem label={'字典名称'} {...formItemLayout}>
                {getFieldDecorator('codeName', {
                  rules: [{
                    required: true,
                    message: '请输入字典名称!',
                  }, {
                    max: 20,
                    message: '不能超过20个字'
                  }],
                })(
                  <Input placeholder={'例如：锄头'} />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label={'字典代码'} {...formItemLayout}>
                {getFieldDecorator('codeValue', {
                  rules: [{
                    required: true,
                    message: '请输入字典代码!',
                  }, {
                    pattern: /^\w+$/,
                    message: '必须是英文数字下划线!',
                  }, {
                    max: 30,
                    message: '不能超过30个字'
                  }],
                })(
                  <Input placeholder={'例如：chutou'} />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label={'字典类型'} {...formItemLayout}>
                {getFieldDecorator('codeType', {
                  rules: [{
                    required: true,
                    message: '请输入字典类型!',
                  }],
                })(
                  <Input readOnly placeholder={'例如：code'} />
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
                    <Option value="y">启用</Option>
                    <Option value="n">停用</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
            {/* <Col span={12}>
              <FormItem label={'索引'} {...formItemLayout}>
                {getFieldDecorator('indexKey', {
                  rules: [{
                    max: 20,
                    message: '不能超过20个字'
                  }],
                })(
                  <Input placeholder={'例如：code'} />
                )}
              </FormItem>
            </Col> */}
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
})(ComponentsDictManagerChildForm);
