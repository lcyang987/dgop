import React, { Component } from 'react';
import { Form, Button } from 'antd';
import PropTypes from 'prop-types';

const FormItem = Form.Item;

class SearchForm extends Component {
  static propTypes = {
    searchData: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    tableGet: PropTypes.func.isRequired,
  }  
  componentWillMount() {
    this.searchSubmit();
  }  
  handleSubmit = e => {
    e.preventDefault();
    this.searchSubmit();
  }
  searchSubmit() {    
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const searchData = {
          ...this.props.searchData,
          ...values,
          currentPage: 1,
        };
        for (var v in searchData) {
          searchData[v] = searchData[v] === undefined ? '' : searchData[v];
        };
        this.props.tableGet(searchData);
      }
    });
  }
  render() {
    return (
      <Form layout="inline" onSubmit={this.handleSubmit} style={{ margin: 6 }}>
        {this.props.children}
        <FormItem>
          <Button type="primary" htmlType="submit" loading={this.props.loading}>搜索</Button>
          <Button style={{ marginLeft: 8 }} onClick={() => { this.props.form.resetFields() }}>
            清空
          </Button>
        </FormItem>
      </Form>
    )
  }
};

export default Form.create()(SearchForm);
