import React, { Component } from 'react';
import { Form, Input, Row, Col, Select, TreeSelect } from 'antd';
import PropTypes from 'prop-types';
import CommonFormModal from '@/components/common/FormModal';

const FormItem = Form.Item;
const Option = Select.Option;

class ComponentsMenuManagerForm extends Component {
  static propTypes = {
    dictData: PropTypes.object.isRequired,
    menuTree: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    formData: PropTypes.object.isRequired,
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
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
      <CommonFormModal {...this.props} width={700}>
        <Form style={{ margin: '8px 16px' }}>
          <Row>
            <Col span={12}>
              <FormItem label={'名称'} {...formItemLayout}>
                {getFieldDecorator('name', {
                  rules: [{
                    required: true,
                    message: '请输入名称!',
                  }, {
                    max: 8,
                    message: '不能超过8个字'
                  }],
                })(
                  <Input placeholder={'例如：菜单管理'} />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label={'url'} {...formItemLayout}>
                {getFieldDecorator('url', {
                  rules: [{
                    required: true,
                    message: '请输入url!',
                  }, {
                    pattern: this.props.form.getFieldValue('isLeaf') === 'y' ? /^[A-Z][a-z|A-Z]+$/ : /^[a-z][a-z|A-Z]+$/,
                    message: this.props.form.getFieldValue('isLeaf') === 'y' ? '必须是英文！首字母大写' : '必须是英文！首字母小写',
                  }, {
                    max: 20,
                    message: '不能超过20个字'
                  }],
                })(
                  <Input placeholder={'叶子:Menu,非叶子:menu'} />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label={'图标'} {...formItemLayout}>
                {getFieldDecorator('icon', {
                  rules: [{
                    pattern: /^[a-z|-]+$/,
                    message: '必须是英文或-!',
                  }, {
                    max: 20,
                    message: '不能超过20个字'
                  }],
                })(
                  <Input placeholder={'例如：appstore'} />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label={'是否叶子'} {...formItemLayout}>
                {getFieldDecorator('isLeaf', {
                  rules: [{
                    required: true,
                    message: '请选择是否叶子!',
                  }],
                })(
                  <Select onChange={() => setTimeout(() => this.props.form.validateFields(['url'], { force: true }), 0)}>
                    {
                      Object.entries(this.props.dictData.yorn).map(t => <Option key={t[0]} value={t[0]}>{t[1]}</Option>)
                    }
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label={'父节点'} {...formItemLayout}>
                {getFieldDecorator('parentId', {
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
})(ComponentsMenuManagerForm);
