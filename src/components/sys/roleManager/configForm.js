import React, { Component } from 'react';
import { Form, Row, Col, TreeSelect } from 'antd';
import PropTypes from 'prop-types';
import CommonFormModal from '@/components/common/FormModal';

const FormItem = Form.Item;

class ComponentsRoleManagerConfigForm extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    formData: PropTypes.object.isRequired,
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 },
      },
    };
    return (
      <CommonFormModal {...this.props} width={580}>
        <Form style={{ margin: '8px 16px' }}>
          <Row>
            <Col span={24}>
              <FormItem label={'菜单选择'} {...formItemLayout}>
                {getFieldDecorator('menuIds')(
                  <TreeSelect
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    treeData={this.props.allMenu}
                    multiple
                  />
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
})(ComponentsRoleManagerConfigForm);
