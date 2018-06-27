import React, { Component } from 'react';
import { Form, Input, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import CommonFormModal from '@/components/common/FormModal';

const FormItem = Form.Item;
const { TextArea } = Input;

class ComponentsRoleManagerForm extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    formData: PropTypes.object.isRequired,
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
    return (
      <CommonFormModal {...this.props} width={500}>
        <Form style={{ margin: '8px 16px' }}>
          <Row>
            <Col span={24}>
              <FormItem label={'角色名称'} {...formItemLayout}>
                {getFieldDecorator('name', {
                  rules: [{
                    required: true,
                    message: '请输入名称!',
                  }, {
                    max: 8,
                    message: '不能超过8个字'
                  }],
                })(
                  <Input placeholder={'例如：超级管理员'} />
                )}
              </FormItem>
            </Col>
            <Col span={24}>
              <FormItem label={'备注'} {...formItemLayout}>
                {getFieldDecorator('remarks', {
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
})(ComponentsRoleManagerForm);
