import React, { Component } from 'react';
import { Form, Input, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import CommonFormModal from '@/components/common/FormModal';

const FormItem = Form.Item;
const { TextArea } = Input;

class ComponentsMemberManagerRebateForm extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    formData: PropTypes.object.isRequired,
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formSingleItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 17 },
      },
    };
    return (
      <CommonFormModal {...this.props} width={600}>
        <Form style={{ margin: '8px 16px' }}>
          <Row>
            <Col span={24}>
              <FormItem label={'作业类型名称'} {...formSingleItemLayout}>
                {getFieldDecorator('jobTypeName', {
                  rules: [{
                    required: true,
                    message: '请输入作业类型名称!',
                  }],
                })(
                  <Input placeholder={'例如：稻子'} />
                )}
              </FormItem>
            </Col>
            <Col span={24}>
              <FormItem label={'每亩作业返利金额'} {...formSingleItemLayout}>
                {getFieldDecorator('unitRebate', {
                  rules: [{
                    required: true,
                    message: '请输入每亩作业返利金额!',
                  }, {
                    pattern: /^[0-9]+[.]?[0-9]{0,2}[0]*$/,
                    message: '最多两位小数'
                  }],
                })(
                  <Input type="number" placeholder={'例如：98'} />
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
})(ComponentsMemberManagerRebateForm);
