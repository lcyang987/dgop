import React, { Component } from 'react';
import { Popconfirm } from 'antd';
import PropTypes from 'prop-types';
import SingleTable from '@/components/common/SingleTable';

class ComponentsMachineManagerJobRewardTable extends Component {
  static propTypes = {
    dictData: PropTypes.object.isRequired,
    table: PropTypes.array.isRequired,
    frozen: PropTypes.func.isRequired,
    unfrozen: PropTypes.func.isRequired,
  }
  render() {
    let columns = [{
      title: '结算单号',
      dataIndex: 'settlementNo',
    }, {
      title: '单价',
      dataIndex: 'unitPrice',
      align: 'right',
      render: text => `￥${text}`,
    }, {
      title: '支付金额',
      dataIndex: 'paymentAmount',
      align: 'right',
      render: text => `￥${text}`,
    }, {
      title: '状态',
      dataIndex: 'status',
      render: text => this.props.dictData.jobDemandManager_rewardStatus[text],
    }, {
      title: '是否支付',
      dataIndex: 'isPay',
      render: text => this.props.dictData.yorn[text],
    }, {
      title: '支付时间',
      dataIndex: 'payTime',
    }, {
      title: '是否结算',
      dataIndex: 'isSettle',
      render: text => this.props.dictData.yorn[text],
    }, {
      title: '结算时间',
      dataIndex: 'settleTime',
    }, {
      title: '操作',
      render: (text, record) => (
        <span>
          {
            record.status === 'PAID' || record.status === 'UNFROZEN' ?
              <Popconfirm
                title="确认冻结?"
                onConfirm={this.props.frozen.bind(this, record)}
              >
                <a>冻结</a>
              </Popconfirm> : ''
          }
          {
            record.status === 'FROZEN' ?
              <Popconfirm
                title="确认解冻?"
                onConfirm={this.props.unfrozen.bind(this, record)}
              >
                <a>解冻</a>
              </Popconfirm> : ''
          }
        </span>
      ),
    }]
    return <SingleTable columns={columns} {...this.props} />
  }
};

export default ComponentsMachineManagerJobRewardTable;