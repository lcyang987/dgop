import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SingleTable from '@/components/common/SingleTable';
import PagesTable from '@/components/common/PagesTable';

class ComponentsJobDemandManagerTaskClaimTable extends Component {
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
      title: '需求编号',
      dataIndex: 'demandNo',
      render: (text, record) => <a onClick={this.props.jobDemandManagerShow.bind(this, record)}>{text}</a>
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
    return (
      <React.Fragment>
        {
          this.props.jobRewardTableVisible ?
            <SingleTable {...this.props} table={this.props.table.filter(t => t.id === this.props.jobRewardTableSearchData.id)} columns={columns} scroll={{ x: true }} className="tablexscroll" /> :
            <PagesTable {...this.props} columns={columns} scroll={{ x: true }} className="tablexscroll" />
        }
      </React.Fragment>
    )
  }
};

export default ComponentsJobDemandManagerTaskClaimTable;