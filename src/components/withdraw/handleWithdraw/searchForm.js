import React, { Component } from 'react';
import { Form, Select, Spin } from 'antd';
import PropTypes from 'prop-types';
import CommonSearchForm from '@/components/common/SearchForm';

const FormItem = Form.Item;
const { Option } = Select;

class ComponentsHandleWithdrawSearchForm extends Component {
  static propTypes = {
    dictData: PropTypes.object.isRequired,
    dictLoading: PropTypes.bool.isRequired,
    table: PropTypes.array.isRequired,
    tableGet: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    searchData: PropTypes.object.isRequired,
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <CommonSearchForm {...this.props} loading={this.props.loading || this.props.table.some(t => t.loading)}>
        <div style={{ display: 'inline-block' }}>
          <Spin spinning={this.props.dictLoading}>
            <FormItem label={'状态'}>
              {getFieldDecorator('status')(
                <Select style={{ minWidth: 72 }}>
                  {
                    [{ value: '', name: '所有' }].concat(this.props.dictData.handleWithDrawStatus).map(t => <Option key={t.value} value={t.value}>{t.name}</Option>)
                  }
                </Select>
              )}
            </FormItem>
          </Spin>
        </div>
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
})(ComponentsHandleWithdrawSearchForm);
