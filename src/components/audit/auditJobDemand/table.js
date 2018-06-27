import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Divider, Popover } from 'antd';
import PagesExpandedRowTable from '@/components/common/PagesExpandedRowTable';
import SingleTable from '@/components/common/SingleTable';

class ComponentsAuditJobDemandTable extends Component {
  static propTypes = {
    dictData: PropTypes.object.isRequired,
    dictLoading: PropTypes.bool.isRequired,
    get: PropTypes.func.isRequired,
    success: PropTypes.func.isRequired,
    showMap: PropTypes.func.isRequired,
  }
  render() {
    let expandedRowRender = record => {
      const columns = [{
        title: '审核结果',
        dataIndex: 'auditResult',
        render: text => this.props.dictData.auditResult.find(t => t.value === text).name,
      }, {
        title: '审核时间',
        dataIndex: 'auditTime',
      }, {
        title: '备注',
        dataIndex: 'comment',
      }];
      return <SingleTable columns={columns} table={record.auditHistoryList || []} loading={this.props.dictLoading} defaultExpandAllRows={false} />;
    };
    let columns = [{
      title: '标题',
      dataIndex: 'title',
    }, {
      title: '会员名称',
      dataIndex: 'memberName',
    }, {
      title: '会员手机号码',
      dataIndex: 'memberPhone',
    }, {
      title: '省市区',
      render: (text, record) => (`${record.province}-${record.city}-${record.county}`),
    }, {
      title: '详细地址',
      dataIndex: 'address',
      render: (text, record) => (
        <a onClick={this.props.showMap.bind(this, record)}>{text}</a>
      ),
    }, {
      title: '作业作物名称',
      render: (text, record) => (
        record.demandDetail.map((item, i, arr) => (
          <Popover title={`${item.jobTypeName} - 详情`} trigger="click" key={i} content={(
            <div>
              <p>每天作业数量: {item.dailyQuantity}</p>
              <p>每亩作业数量: {item.totalQuantity}</p>
              <p>每亩作业单价: {item.unitPrice}</p>
              <p>每亩作业保证金: {item.unitDeposit}</p>
              <p>保证金金额: {item.depositAmount}</p>
              <p>备注: {item.comment}</p>
            </div>
          )}>
            <a>{item.jobTypeName}</a> {arr[i + 1] ? <Divider type="vertical" /> : ''}
          </Popover>
        ))
      ),
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
    }, {
      title: '操作',
      render: (text, record) => (
        <span>
          <a onClick={this.props.success.bind(this, record)}>审核通过</a>
          <Divider type="vertical" />
          <a onClick={this.props.get.bind(this, record)}>审核不通过</a>
        </span>
      ),
    }];
    return <PagesExpandedRowTable {...this.props} columns={columns} expandedRowRender={expandedRowRender} />
  }
}

export default ComponentsAuditJobDemandTable;