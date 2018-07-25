import React, { Component } from 'react';
import { Form, Input, Select } from 'antd';
import PropTypes from 'prop-types';
import CommonSearchForm from '@/components/common/SearchForm';

const FormItem = Form.Item;
const { Option } = Select;

class ComponentsOrderSearchForm extends Component {
  static propTypes = {
    dictData: PropTypes.object.isRequired,
    table: PropTypes.array.isRequired,
    searchData: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    tableGet: PropTypes.func.isRequired,
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <CommonSearchForm {...this.props} loading={this.props.loading || this.props.table.some(t => t.loading)}>
        <FormItem label={'会员名称'}>
          {getFieldDecorator('memberName', {
            rules: [{
              max: 20,
              message: '不能超过20个字'
            }],
          })(
            <Input placeholder={'例如：王五'} />
          )}
        </FormItem>
        <FormItem label={'订单类型'}>
          {getFieldDecorator('orderType')(
            <Select style={{ minWidth: 94 }}>
              {
                [['', '所有']].concat(Object.entries(this.props.dictData.order_type)).map(t => <Option key={t[0]} value={t[0]}>{t[1]}</Option>)
              }
            </Select>
          )}
        </FormItem>
        <FormItem label={'订单状态'}>
          {getFieldDecorator('status')(
            <Select style={{ minWidth: 72 }}>
              {
                [['', '所有']].concat(Object.entries(this.props.dictData.order_status)).map(t => <Option key={t[0]} value={t[0]}>{t[1]}</Option>)
              }
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
})(ComponentsOrderSearchForm);
