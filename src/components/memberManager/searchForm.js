import React, { Component } from 'react';
import { Form, Input } from 'antd';
import PropTypes from 'prop-types';
import CommonSearchForm from '@/components/common/SearchForm';

const FormItem = Form.Item;

class ComponentsMemberManagerSearchForm extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
    searchData: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    tableGet: PropTypes.func.isRequired,
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <CommonSearchForm {...this.props} loading={this.props.loading || this.props.table.some(t => t.loading)}>
        <FormItem label={'名称'}>
          {getFieldDecorator('name', {
            rules: [{
              max: 20,
              message: '不能超过20个字'
            }],
          })(
            <Input placeholder={'例如：张三'} />
          )}
        </FormItem>
        <FormItem label={'手机'}>
          {getFieldDecorator('contactPhone', {
            rules: [{
              pattern: /^1[3-9][0-9]{9}$/,
              message: '请输入正确格式',
            }],
          })(
            <Input type="number" />
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
})(ComponentsMemberManagerSearchForm);
