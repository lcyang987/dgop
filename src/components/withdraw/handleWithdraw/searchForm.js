import React, { Component } from 'react';
import { Form, Select } from 'antd';
import PropTypes from 'prop-types';
import CommonSearchForm from '@/components/common/SearchForm';

const FormItem = Form.Item;
const { Option } = Select;

class ComponentsHandleWithdrawSearchForm extends Component {
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
        <div style={{ display: 'inline-block' }}>
          <FormItem label={'状态'}>
            {getFieldDecorator('status')(
              <Select style={{ minWidth: 72 }}>
                {
                  [['', '所有']].concat(Object.entries(this.props.dictData.handleWithDrawStatus)).map(t => <Option key={t[0]} value={t[0]}>{t[1]}</Option>)
                }
              </Select>
            )}
          </FormItem>
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
