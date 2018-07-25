import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PagesTable from '@/components/common/PagesTable';

class ComponentsRevenueTable extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
  }
  render() {
    let columns = [{
      title: '用户名',
      dataIndex: 'memberName',
    }, {
      title: '用户电话',
      dataIndex: 'memberPhone',
    }, {
      title: '作业类型',
      dataIndex: 'jobTypeName',
    }, {
      title: '作业数量',
      dataIndex: 'jobQuantity',
      align: 'right',
    }, {
      title: '总收入',
      dataIndex: 'poundageAmount',
      align: 'right',
      render: text => `￥${text}`,
    }, {
      title: '手续费单价',
      dataIndex: 'unitPoundage',
      align: 'right',
      render: text => `￥${text}`,
    }]
    return <PagesTable {...this.props} columns={columns} loading={this.props.loading} />
  }
}

export default ComponentsRevenueTable;