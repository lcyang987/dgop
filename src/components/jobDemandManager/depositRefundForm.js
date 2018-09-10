import React, { Component } from 'react';
import { Form, Input, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import CommonFormContainer from '@/components/common/FormContainer';

const FormItem = Form.Item;
const { TextArea } = Input;

class ComponentsJobDemandManagerDepositRefundForm extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    formData: PropTypes.object.isRequired,
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formSingleItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 3 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 21 },
      },
    };
    return (
      <CommonFormContainer {...this.props}>
        <Form style={{ margin: '8px 16px' }}>
          <Row>
            <Col span={24}>
              <FormItem label={'扣除金额'} {...formSingleItemLayout}>
                {getFieldDecorator('amount', {
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
      </CommonFormContainer>
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
})(ComponentsJobDemandManagerDepositRefundForm);
