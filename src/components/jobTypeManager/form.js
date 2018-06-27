import React, { Component } from 'react';
import { Form, Input, Row, Col, Select } from 'antd';
import PropTypes from 'prop-types';
import CommonFormModal from '@/components/common/FormModal';

const FormItem = Form.Item;
const { TextArea } = Input;
const { Option } = Select;

class ComponentsJobTypeManager extends Component {
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
        sm: { span: 12 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
    };
    const formSingleItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 },
      },
    };
    return (
      <CommonFormModal {...this.props} width={600}>
        <Form style={{ margin: '8px 16px' }}>
          <Row>
            <Col span={24}>
              <FormItem label={'名称'} {...formSingleItemLayout}>
                {getFieldDecorator('name', {
                  rules: [{
                    required: true,
                    message: '请输入作业类型名称!',
                  }, {
                    max: 20,
                    message: '不能超过20个字'
                  }],
                })(
                  <Input placeholder={'例如：耕地'} />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label={'每亩作业保证金'} {...formItemLayout}>
                {getFieldDecorator('unitDeposit', {
                  rules: [{
                    required: true,
                    message: '请输入每亩作业保证金!',
                  }],
                })(
                  <Input type="number" placeholder={'例如: 200'} />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label={'每亩介绍人返利'} {...formItemLayout}>
                {getFieldDecorator('unitRebate', {
                  rules: [{
                    required: true,
                    message: '请输入每亩介绍人返利!',
                  }],
                })(
                  <Input type="number" placeholder={'例如: 20'} />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label={'指导价低'} {...formItemLayout}>
                {getFieldDecorator('guidePriceMin', {
                  rules: [{
                    required: true,
                    message: '请输入指导价低!',
                  }],
                })(
                  <Input type="number" placeholder={'例如: 180'} />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label={'指导价高'} {...formItemLayout}>
                {getFieldDecorator('guidePriceMax', {
                  rules: [{
                    required: true,
                    message: '请输入指导价高!',
                  }],
                })(
                  <Input type="number" placeholder={'例如: 220'} />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label={'每天作业数量'} {...formItemLayout}>
                {getFieldDecorator('dailyQuantity', {
                  rules: [{
                    required: true,
                    message: '请输入每天作业数量!',
                  }]
                })(
                  <Input type="number" placeholder={'例如: 30'} />
                )}
              </FormItem>
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
})(ComponentsJobTypeManager);
