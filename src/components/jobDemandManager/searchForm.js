import React, { Component } from 'react';
import { Form, Input, Select } from 'antd';
import PropTypes from 'prop-types';
import CommonSearchForm from '@/components/common/SearchForm';

const FormItem = Form.Item;
const { Option } = Select;

class ComponentsJobDemandManagerSearchForm extends Component {
  static propTypes = {
    dictData: PropTypes.object.isRequired,
    table: PropTypes.array.isRequired,
    tableGet: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    searchData: PropTypes.object.isRequired,
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <CommonSearchForm {...this.props} loading={this.props.loading || this.props.table.some(t => t.loading)}>
        <FormItem label={'联系人姓名'}>
          {getFieldDecorator('contactName', {
            rules: [{
              max: 20,
              message: '不能超过20个字'
            }],
          })(
            <Input placeholder={'例如：李四'} />
          )}
        </FormItem>
        <FormItem label={'总状态'}>
          {getFieldDecorator('status')(
            <Select style={{ minWidth: 72 }}>
              {
                [['', '所有']].concat(Object.entries(this.props.dictData.jobDemandManager_status)).map(t => <Option key={t[0]} value={t[0]}>{t[1]}</Option>)
              }
            </Select>
          )}
        </FormItem>
        <FormItem label={'审核状态'}>
          {getFieldDecorator('auditStatus')(
            <Select style={{ minWidth: 94 }}>
              {
                [['', '所有']].concat(Object.entries(this.props.dictData.jobDemandManager_auditStatus)).map(t => <Option key={t[0]} value={t[0]}>{t[1]}</Option>)
              }
            </Select>
          )}
        </FormItem>
        <FormItem label={'保证金状态'}>
          {getFieldDecorator('depositStatus')(
            <Select style={{ minWidth: 72 }}>
              {
                [['', '所有']].concat(Object.entries(this.props.dictData.jobDemandManager_depositStatus)).map(t => <Option key={t[0]} value={t[0]}>{t[1]}</Option>)
              }
            </Select>
          )}
        </FormItem>
        <FormItem label={'发布状态'}>
          {getFieldDecorator('publishStatus')(
            <Select style={{ minWidth: 72 }}>
              {
                [['', '所有']].concat(Object.entries(this.props.dictData.jobDemandManager_publishStatus)).map(t => <Option key={t[0]} value={t[0]}>{t[1]}</Option>)
              }
            </Select>
          )}
        </FormItem>
        <FormItem label={'作业状态'}>
          {getFieldDecorator('jobStatus')(
            <Select style={{ minWidth: 72 }}>
              {
                [['', '所有']].concat(Object.entries(this.props.dictData.jobDemandManager_jobStatus)).map(t => <Option key={t[0]} value={t[0]}>{t[1]}</Option>)
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
})(ComponentsJobDemandManagerSearchForm);
