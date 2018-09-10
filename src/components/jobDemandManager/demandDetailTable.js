import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SingleTable from '@/components/common/SingleTable';

class ComponentsJobDemandManagerDemandDetailTable extends Component {
  static propTypes = {
    dictData: PropTypes.object.isRequired,
    table: PropTypes.array.isRequired,
    taskClaimTableVisible: PropTypes.bool.isRequired,
    taskClaimTableSearchData: PropTypes.object.isRequired,
    get: PropTypes.func.isRequired,
    hide: PropTypes.func.isRequired,
    depositDetailGet: PropTypes.func.isRequired,
  }
  render() {
    let columns = [{
      title: '作业类型名称',
      dataIndex: 'jobTypeName',
    }, {
      title: '每天作业数量',
      dataIndex: 'dailyQuantity',
      align: 'right',
    }, {
      title: '作业数量(亩数)',
      dataIndex: 'totalQuantity',
      align: 'right',
    }, {
      title: '每亩作业单价',
      dataIndex: 'unitPrice',
      align: 'right',
      render: text => `￥${text}`,
    }, {
      title: '每亩作业保证金',
      dataIndex: 'unitDeposit',
      align: 'right',
      render: text => `￥${text}`,
    }, {
      title: '保证金金额',
      dataIndex: 'depositAmount',
      align: 'right',
      render: (text, record) => <a onClick={this.props.depositDetailGet.bind(this, record)}>￥{text}</a>,
    }, {
      title: '已分配数量',
      dataIndex: 'allocateQuantity',
      align: 'right',
    }, {
      title: '剩余数量',
      dataIndex: 'surplusQuantity',
      align: 'right',
    }, {
      title: '备注',
      dataIndex: 'comment',
    }, {
      title: '操作',
      render: (text, record) => (
        <span>
        {
          this.props.taskClaimTableVisible ?
            <a onClick={this.props.hide.bind(this)}>关闭接单列表</a> :
            <a onClick={this.props.get.bind(this, record)}>查看接单列表</a>
        }
        </span>
      ),
    }]
    return <SingleTable columns={columns} table={this.props.table.filter(t => t.id === this.props.taskClaimTableSearchData.id)} {...this.props} />
  }
};

export default ComponentsJobDemandManagerDemandDetailTable;