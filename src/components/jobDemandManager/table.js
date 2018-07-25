import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SingleTable from '@/components/common/SingleTable';
import PagesTable from '@/components/common/PagesTable';

class ComponentsJobDemandManagerTable extends Component {
  static propTypes = {
    dictData: PropTypes.object.isRequired,
    table: PropTypes.array.isRequired,
    demandDetailTableVisible: PropTypes.bool.isRequired,
    demandDetailTableSearchData: PropTypes.object.isRequired,
    get: PropTypes.func.isRequired,
    demandDetailTableHide: PropTypes.func.isRequired,
  }
  render() {
    let columns = [{
      title: '标题',
      dataIndex: 'title',
    }, {
      title: '会员名称',
      dataIndex: 'memberName',
    }, {
      title: '会员手机',
      dataIndex: 'memberPhone',
    }, {
      title: '省市区',
      render: (text, record) => (`${record.province}-${record.city}-${record.county}`),
    }, {
      title: '详细地址',
      dataIndex: 'address',
      render: (text, record) => (
        <a onClick={this.props.showMap.bind(this, record)} >{text}</a>
      ),
    }, {
      title: '作业作物名称',
      dataIndex: 'jobCropName',
    }, {
      title: '截止日期',
      dataIndex: 'cutoffDateStr',
    }, {
      title: '作业时间',
      render: (text, record) => (
        `${record.startDateStr} 至 ${record.endDateStr}`
      ),
    }, {
      title: '联系人',
      dataIndex: 'contactName',
    }, {
      title: '联系人手机',
      dataIndex: 'contactPhone',
    }, {
      title: '总数量',
      dataIndex: 'totalQuantity',
      align: 'right',
    }, {
      title: '分配数量',
      dataIndex: 'allocateQuantity',
      align: 'right',
    }, {
      title: '剩余数量',
      dataIndex: 'surplusQuantity',
      align: 'right',
    }, {
      title: '保证金金额',
      dataIndex: 'depositAmount',
      align: 'right',
      render: text => `￥${text}`,
    }, {
      title: '总状态',
      dataIndex: 'status',
      render: text => this.props.dictData.jobDemandManager_status[text],
    }, {
      title: '审核状态',
      dataIndex: 'auditStatus',
      render: text => this.props.dictData.jobDemandManager_auditStatus[text],
    }, {
      title: '保证金状态',
      dataIndex: 'depositStatus',
      render: text => this.props.dictData.jobDemandManager_depositStatus[text],
    }, {
      title: '发布状态',
      dataIndex: 'publishStatus',
      render: text => this.props.dictData.jobDemandManager_publishStatus[text],
    }, {
      title: '作业状态',
      dataIndex: 'jobStatus',
      render: text => this.props.dictData.jobDemandManager_jobStatus[text],
    }, {
      title: '操作',
      fixed: 'right',
      render: (text, record) => (
        <span>
          {
            this.props.demandDetailTableVisible ?
              <a onClick={this.props.hide.bind(this)}>关闭需求列表</a> :
              <a onClick={this.props.get.bind(this, record)}>查看需求列表</a>
          }
        </span>
      ),
    }]
    return (
      <React.Fragment>
        {
          this.props.demandDetailTableVisible ?
            <SingleTable {...this.props} table={this.props.table.filter(t => t.id === this.props.demandDetailTableSearchData.id)} columns={columns} scroll={{ x: true }} className="tablexscroll" /> :
            <PagesTable {...this.props} columns={columns} scroll={{ x: true }} className="tablexscroll" />
        }
      </React.Fragment>
    )
  }
}

export default ComponentsJobDemandManagerTable;