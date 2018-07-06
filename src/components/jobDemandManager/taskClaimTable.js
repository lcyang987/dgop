import React, { Component } from 'react';
import { Popover, Popconfirm } from 'antd';
import PropTypes from 'prop-types';
import SingleTable from '@/components/common/SingleTable';

class ComponentsMachineManagerTaskClaimTable extends Component {
  static propTypes = {
    dictData: PropTypes.object.isRequired,
    dictLoading: PropTypes.bool.isRequired,
    table: PropTypes.array.isRequired,
    frozen: PropTypes.func.isRequired,
    unfrozen: PropTypes.func.isRequired,
  }
  render() {
    let columns = [{
      title: '机手名称',
      dataIndex: 'memberName',
    }, {
      title: '机手手机',
      dataIndex: 'memberPhone',
    }, {
      title: '任务编号',
      dataIndex: 'taskNo',
    }, {
      title: '作业类型名称',
      dataIndex: 'jobTypeName',
    }, {
      title: '作业时间',
      render: (text, record) => (
        `${record.startDateStr} 至 ${record.endDateStr}`
      ),
    }, {
      title: '作业数量',
      dataIndex: 'jobQuantity',
      align: 'right',
    }, {
      title: '每亩单价',
      dataIndex: 'unitPrice',
      align: 'right',
      render: text => `￥${text}`,
    }, {
      title: '每亩手续费',
      dataIndex: 'unitPoundage',
      align: 'right',
      render: text => `￥${text}`,
    }, {
      title: '状态',
      dataIndex: 'status',
      render: text => this.props.dictData.jobDemandManager_taskStatus.find(t => t.value === text).name,
    }, {
      title: '机手质量保证金余额',
      dataIndex: 'qualityDepositAmount',
      align: 'right',
      render: text => `￥${text}`,
    }, {
      title: '报酬结算详情',
      dataIndex: 'jobRewardSettlement',
      render: text => (
        <React.Fragment>
          {
            text ?
              <Popover placement="bottom" title={`报酬结算详情`} trigger="click" content={(
                <div>
                  <p>结算单号: {text.settlementNo}</p>
                  <p>单价: ￥{text.unitPrice}</p>
                  <p>状态: {this.props.dictData.jobDemandManager_rewardStatus.find(t => t.value === text.status).name}</p>
                  <p>是否支付: {this.props.dictData.yorn.find(t => t.value === text.isPay).name}</p>
                  <p>支付时间: {text.payTime}</p>
                  <p>是否结算: {this.props.dictData.yorn.find(t => t.value === text.isSettle).name}</p>
                  <p>结算时间: {text.settleTime}</p>
                  <p>备注: {text.comment}</p>
                </div>
              )}>
                <a>查看</a>
              </Popover> : ''
          }
        </React.Fragment>
      ),
    }, {
      title: '操作',
      render: (text, record) => (
        <span>
          {
            record.jobRewardSettlement && (record.jobRewardSettlement.status === 'PAID' || record.jobRewardSettlement.status === 'UNFROZEN') ?
              <Popconfirm
                title="确认冻结?"
                onConfirm={this.props.frozen.bind(this, record)}
              >
                <a>冻结</a>
              </Popconfirm> : ''
          }
          {
            record.jobRewardSettlement && record.jobRewardSettlement.status === 'FROZEN' ?
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

export default ComponentsMachineManagerTaskClaimTable;