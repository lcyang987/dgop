import React, { Component } from 'react';
import { Form, Input, Row, Col, Select } from 'antd';
import PropTypes from 'prop-types';
import SingleUpload from '@/components/common/SingleUpload';
import CommonFormModal from '@/components/common/FormModal';

const FormItem = Form.Item;
const { TextArea } = Input;
const Option = Select.Option;

class ComponentsUserManagerForm extends Component {
  static propTypes = {
    dictData: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    formData: PropTypes.object.isRequired,
    formPicUpload: PropTypes.func.isRequired,
    formSetData: PropTypes.func.isRequired,
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
    const sigleItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    }
    return (
      <CommonFormModal {...this.props} width={600}>
        <Form style={{ margin: '8px 16px' }}>
          <Row>
            <Col span={24}>
              <FormItem label={'头像'} {...sigleItemLayout}>
                <SingleUpload
                  fileUrl="headPortraitUrl"
                  filePath="headPortrait"
                  {...this.props}
                />
              </FormItem>
            </Col>
            {
              this.props.formData.id ? '' :
                <Col span={12}>
                  <FormItem label={'帐号'} {...formItemLayout}>
                    {getFieldDecorator('loginName', {
                      rules: [{
                        required: true,
                        message: '请输入帐号!',
                      }, {
                        pattern: /\w/g,
                        message: '只能输入英文数字下划线'
                      }, {
                        pattern: /^[A-Z|a-z]/,
                        message: '必须英文字母开头'
                      }, {
                        max: 8,
                        message: '不能超过8个字'
                      }],
                    })(
                      <Input placeholder={'例如：sys'} />
                    )}
                  </FormItem>
                </Col>
            }
            <Col span={12}>
              <FormItem label={'昵称'} {...formItemLayout}>
                {getFieldDecorator('nickname', {
                  rules: [{
                    required: true,
                    message: '请输入昵称!',
                  }, {
                    max: 8,
                    message: '不能超过8个字'
                  }],
                })(
                  <Input placeholder={'例如：超级管理员'} />
                )}
              </FormItem>
            </Col>
          </Row>
          {
            this.props.formData.id ? '' :
              <Row>
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
          }
          <Row>
            <Col span={12}>
              <FormItem label={'真实姓名'} {...formItemLayout}>
                {getFieldDecorator('realName', {
                  rules: [{
                    required: true,
                    message: '请输入真实姓名!',
                  }, {
                    max: 20,
                    message: '不能超过20个字'
                  }],
                })(
                  <Input placeholder={'例如：张三'} />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label={'手机号码'} {...formItemLayout}>
                {getFieldDecorator('phone', {
                  rules: [{
                    required: true,
                    message: '请输入手机号码!',
                  }, {
                    pattern: /^1[3-9][0-9]{9}$/,
                    message: '请输入正确格式',
                  }],
                })(
                  <Input type="number" />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label={'工号'} {...formItemLayout}>
                {getFieldDecorator('jobNumber', {
                  rules: [{
                    pattern: /^[A-Z][0-9]{5}$/,
                    message: '请输入正确格式',
                  }],
                })(
                  <Input />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label={'性别'} {...formItemLayout}>
                {getFieldDecorator('sex', {
                  rules: [{
                    required: true,
                    message: '请选择性别!',
                  }],
                })(
                  <Select>
                    <Option value="M">男</Option>
                    <Option value="F">女</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label={'是否使用'} {...formItemLayout}>
                {getFieldDecorator('status', {
                  rules: [{
                    required: true,
                    message: '请选择是否使用!',
                  }],
                })(
                  <Select>
                    <Option value="y">是</Option>
                    <Option value="n">否</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label={'在职状态'} {...formItemLayout}>
                {getFieldDecorator('workStatus', {
                  rules: [{
                    required: true,
                    message: '请选择在职状态!',
                  }],
                })(
                  <Select>
                    {
                      Object.entries(this.props.dictData.workStatus).map(t => <Option key={t[0]} value={t[0]}>{t[1]}</Option>)
                    }
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label={'微信'} {...formItemLayout}>
                {getFieldDecorator('wechatNumber', {
                  // rules: [{
                  //   required: true,
                  //   message: '请选择在职状态!',
                  // }],
                })(
                  <Input />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label={'QQ'} {...formItemLayout}>
                {getFieldDecorator('qq', {
                  rules: [{
                    // type: 'integer',
                  }],
                })(
                  <Input type="number" />
                )}
              </FormItem>
            </Col>
            <Col span={24}>
              <FormItem label={'邮箱'} {...sigleItemLayout}>
                {getFieldDecorator('email', {
                  rules: [{
                    type: 'email',
                    message: '邮箱格式不正确',
                  }],
                })(
                  <Input />
                )}
              </FormItem>
            </Col>
            <Col span={24}>
              <FormItem label={'简介'} {...sigleItemLayout}>
                {getFieldDecorator('introduction', {
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
})(ComponentsUserManagerForm);
