import React, { Component } from 'react';
import { Form, Input, Row, Col, Select, Spin } from 'antd';
import PropTypes from 'prop-types';
import CommonFormModal from '@/components/common/FormModal';

const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;

class ComponentsMachineManagerBrandForm extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    formData: PropTypes.object.isRequired,
    BRANDFilter: PropTypes.array.isRequired,
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
    if (this.props.formData.id) {
      this.props.BRANDFilter.push({name: this.props.formData.name, value: this.props.formData.code })
    }
    return (
      <CommonFormModal {...this.props} width={700}>
        <Form style={{ margin: '8px 16px' }}>
          <Row>
            <Col span={12}>
              <Spin spinning={this.props.dictLoading}>
                <FormItem label={'品牌'} {...formItemLayout}>
                  {getFieldDecorator('code', {
                    rules: [{
                      required: true,
                      message: '请选择品牌!',
                    }],
                  })(
                    <Select>
                      {
                        this.props.BRANDFilter.map(t => <Option key={t.value} value={t.value}>{t.name}</Option>)
                      }
                    </Select>
                  )}
                </FormItem>
              </Spin>
            </Col>
            {
              !this.props.formData.id ? '' :
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
            }
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
})(ComponentsMachineManagerBrandForm);
