import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SingleTable from '@/components/common/SingleTable';

class ComponentsMachineManagerTaskClaimTable extends Component {
  static propTypes = {
    dictData: PropTypes.object.isRequired,
    table: PropTypes.array.isRequired,
    jobRewardTableVisible: PropTypes.bool.isRequired,
    jobRewardTableSearchData: PropTypes.object.isRequired,
    get: PropTypes.func.isRequired,
    jobRewardTableHide: PropTypes.func.isRequired,
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
      title: '机手质量保证金余额',
      dataIndex: 'qualityDepositAmount',
      align: 'right',
      render: text => `￥${text}`,
    }, {
      title: '状态',
      dataIndex: 'status',
      render: text => this.props.dictData.jobDemandManager_taskStatus[text],
    }, {
      title: '操作',
      render: (text, record) => (
        <span>
          {
            this.props.jobRewardTableVisible ?
              <a onClick={this.props.jobRewardTableHide}>关闭结算单列表</a> :
              <a onClick={this.props.get.bind(this, record)}>查看结算单列表</a>
          }
        </span>
      ),
    }]
    return <SingleTable columns={columns} {...this.props} />
  }
};

export default ComponentsMachineManagerTaskClaimTable;