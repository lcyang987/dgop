import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PagesTable from '@/components/common/PagesTable';

class ComponentsOrderTable extends Component {
  static propTypes = {
    dictData: PropTypes.object.isRequired,
    table: PropTypes.array.isRequired,
  }
  render() {
    let columns = [{
      title: '会员名称',
      dataIndex: 'memberName',
    }, {
      title: '会员电话',
      dataIndex: 'memberPhone',
    }, {
      title: '订单号',
      dataIndex: 'orderNo',
    }, {
      title: '订单类型',
      dataIndex: 'orderType',
      render: text => this.props.dictData.order_type[text],
    }, {
      title: '支付金额',
      dataIndex: 'paymentAmount',
      align: 'right',
      render: text => `￥${text}`,
    }, {
      title: '状态',
      dataIndex: 'status',
      render: text => this.props.dictData.order_status[text],
    }]
    return <PagesTable {...this.props} columns={columns} loading={this.props.loading} />
  }
}

export default ComponentsOrderTable;