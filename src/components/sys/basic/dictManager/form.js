import React, { Component } from 'react';
import { Form, Input, Row, Col, TreeSelect } from 'antd';
import PropTypes from 'prop-types';
import CommonFormModal from '@/components/common/FormModal';

const FormItem = Form.Item;
const { TextArea } = Input;

class ComponentsDictManagerForm extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
    menuTree: PropTypes.array.isRequired,
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
      <CommonFormModal {...this.props} width={700}>
        <Form style={{ margin: '8px 16px' }}>
          <Row>
            <Col span={12}>
              <FormItem label={'类型名称'} {...formItemLayout}>
                {getFieldDecorator('typeName', {
                  rules: [{
                    required: true,
                    message: '请输入类型名称!',
                  }, {
                    max: 20,
                    message: '不能超过20个字'
                  }],
                })(
                  <Input placeholder={'例如：职业类型'} />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label={'类型代码'} {...formItemLayout}>
                {getFieldDecorator('typeValue', {
                  rules: [{
                    required: true,
                    message: '请输入类型代码!',
                  }, {
                    max: 30,
                    message: '不能超过30个字'
                  }],
                })(
                  <Input placeholder={'例如：code'} />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label={'父节点'} {...formItemLayout}>
                {getFieldDecorator('pid', {
                  rules: [{
                    required: true,
                    message: '请选择父节点!',
                  }],
                })(
                  <TreeSelect
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    treeData={this.props.menuTree}
                  />
                )}
              </FormItem>
            </Col>
            <Col span={24}>
              <FormItem label={'描述'} {...sigleItemLayout}>
                {getFieldDecorator('content', {
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
})(ComponentsDictManagerForm);
