import React, { Component } from 'react';
import { Form, Input, Select } from 'antd';
import PropTypes from 'prop-types';
import CommonSearchForm from '@/components/common/SearchForm';

const FormItem = Form.Item;
const { Option } = Select;

class ComponentsUserManagerSearchForm extends Component {
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
        <FormItem label={'帐号'}>
          {getFieldDecorator('loginName', {
            rules: [{
              max: 20,
              message: '不能超过20个字'
            }],
          })(
            <Input placeholder={'例如：sys'} />
          )}
        </FormItem>
        <FormItem label={'昵称'}>
          {getFieldDecorator('nickname', {
            rules: [{
              max: 20,
              message: '不能超过20个字'
            }],
          })(
            <Input placeholder={'例如：超级管理员'} />
          )}
        </FormItem>
        <FormItem label={'真实姓名'}>
          {getFieldDecorator('realName', {
            rules: [{
              max: 20,
              message: '不能超过20个字'
            }],
          })(
            <Input placeholder={'例如：张三'} />
          )}
        </FormItem>
        <FormItem label={'是否使用'}>
          {getFieldDecorator('status')(
            <Select style={{ minWidth: 72 }}>
              {
                [['', '所有']].concat(Object.entries(this.props.dictData.yorn)).map(t => <Option key={t[0]} value={t[0]}>{t[1]}</Option>)
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
})(ComponentsUserManagerSearchForm);
