import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Popconfirm } from 'antd';
import PagesTable from '@/components/common/PagesTable';

class ContainersCollectWithdrawApplyTable extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
    batchApply: PropTypes.array.isRequired,
    apply: PropTypes.func.isRequired,
    tableSetBatchApply: PropTypes.func.isRequired,
  }
  render() {
    let rowSelection = {
      onChange: (ids) => { this.props.tableSetBatchApply(ids) },
      selectedRowKeys: this.props.batchApply,
    }
    let columns = [{
      title: '提现单号',
      dataIndex: 'withdrawNo',
    }, {
      title: '会员名称',
      dataIndex: 'memberName',
    }, {
      title: '会员手机',
      dataIndex: 'memberPhone',
    }, {
      title: '提现金额',
      dataIndex: 'withdrawAmount',
      align: 'right',
      render: text => `￥${text}`,
    }, {
      title: '手续费',
      dataIndex: 'poundageAmount',
      align: 'right',
      render: text => `￥${text}`,
    }, {
      title: '实际金额',
      dataIndex: 'actualAmount',
      align: 'right',
      render: text => `￥${text}`,
    }, {
      title: '银行账户名称',
      dataIndex: 'accountName',
    }, {
      title: '银行名称',
      dataIndex: 'bankName',
    }, {
      title: '支行名称',
      dataIndex: 'bankBranchName',
    }, {
      title: '银行卡卡号',
      dataIndex: 'bankCardNo',
    }, {
      title: '操作',
      render: (text, record) => (
        <span>
          <Popconfirm
            title="确认汇总?"
            onConfirm={this.props.apply.bind(this, `[${record.id}]`)}
          >
            <a>汇总</a>
          </Popconfirm>
        </span>
      ),
    }]
    return <PagesTable {...this.props} rowSelection={rowSelection} columns={columns} loading={this.props.loading} />
  }
}

export default ContainersCollectWithdrawApplyTable;