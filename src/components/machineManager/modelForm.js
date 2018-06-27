import React, { Component } from 'react';
import { Form, Input, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import CommonFormModal from '@/components/common/FormModal';

const FormItem = Form.Item;
const { TextArea } = Input;

class ComponentsMachineManagerModelForm extends Component {
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
    const formSingleItemLayout = {
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
      <CommonFormModal {...this.props} width={700}>
        <Form style={{ margin: '8px 16px' }}>
          <Row>
            <Col span={12}>
              <FormItem label={'名称'} {...formItemLayout}>
                {getFieldDecorator('name', {
                  rules: [{
                    required: true,
                    message: '请输入型号名称!',
                  }],
                })(
                  <Input placeholder={'例如：型号1'} />
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
              <FormItem label={'注释'} {...formSingleItemLayout}>
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
})(ComponentsMachineManagerModelForm);
