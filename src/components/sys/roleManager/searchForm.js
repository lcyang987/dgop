import React, { Component } from 'react';
import { Form, Input } from 'antd';
import PropTypes from 'prop-types';
import CommonSearchForm from '@/components/common/SearchForm';

const FormItem = Form.Item;

class ComponentsRoleManagerSearchForm extends Component {
  static propTypes = {
    searchData: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    tableGet: PropTypes.func.isRequired,
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <CommonSearchForm {...this.props}>
        <FormItem label={'名称'}>
          {getFieldDecorator('name', {
            rules: [{
              max: 20,
              message: '不能超过20个字'
            }],
          })(
            <Input placeholder={'例如：超级管理员'} />
          )}
        </FormItem>
      </CommonSearchForm>
    )
  }
};

export default Form.create({
  mapPropsToFields(props) {
    const values = {};
    for (var v in props.searchData) {
      values[v] = Form.createFormField({
        value: props.searchData[v],
      })
    }
    return values;
  }
})(ComponentsRoleManagerSearchForm);
