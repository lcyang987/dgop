import React, { Component } from 'react';
import { Form, Input, Select } from 'antd';
import PropTypes from 'prop-types';
import CommonSearchForm from '@/components/common/SearchForm';

const FormItem = Form.Item;
const { Option } = Select;

class ComponentsCropManagerSearchForm extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
    tableGet: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    searchData: PropTypes.object.isRequired,
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
            <Input placeholder={'例如：小麦'} />
          )}
        </FormItem>
        <FormItem label={'状态'}>
          {getFieldDecorator('status')(
            <Select style={{ minWidth: 72 }}>
              <Option value="">所有</Option>
              <Option value="ENABLE">启用</Option>
              <Option value="DISABLE">停用</Option>
            </Select>
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
})(ComponentsCropManagerSearchForm);
