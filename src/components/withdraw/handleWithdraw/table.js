import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Popconfirm, Button, Divider, Tooltip } from 'antd';
import PagesExpandedRowTable from '@/components/common/PagesExpandedRowTable';
import SingleTable from '@/components/common/SingleTable';

class ComponentsHandleWithdrawTable extends Component {
  static propTypes = {
    dictData: PropTypes.object.isRequired,
    table: PropTypes.array.isRequired,
    onExpand: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
  }
  render() {
    let expandedRowRender = record => {
      const columns = [{
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
        title: '备注',
        dataIndex: 'comment',
      }];
      if (record.status === 'PENDING') {
        columns.push({
          title: '操作',
          render: (text, record) => (
            <div>
              {
                record.isCompleted ?
                  <Popconfirm
                    title="确认重新选择?"
                    onConfirm={this.props.setReset.bind(this, record)}
                  >
                    <a>重新选择</a>
                  </Popconfirm> :
                  <span>
                    <Popconfirm
                      title="确认成功?"
                      onConfirm={this.props.setSuccess.bind(this, record)}
                    >
                      <a>成功</a>
                    </Popconfirm>
                    <Divider type="vertical" />
                    <a onClick={this.props.get.bind(this, record)}>失败</a>
                  </span>
              }
            </div>
          )
        })
      }
      return (
        <React.Fragment>
          <SingleTable columns={columns} table={record.detail.data || []} loading={record.detail.loading} defaultExpandAllRows={false} />
          {
            record.status === 'PENDING' ?
              <div style={{ marginTop: 6, float: 'right' }}>
                {
                  record.detail.data && record.detail.data.length ?
                    record.detail.data.some(t => !t.isCompleted) ?
                      <Tooltip placement="left" title={`还有${record.detail.data.filter(t => !t.isCompleted).length}条未处理`}>
                        <Button loading={record.detail.loading} disabled={true}>提交汇总单处理</Button>
                      </Tooltip> :
                      <Popconfirm
                        title="确认提交汇总单处理?"
                        onConfirm={this.props.onHandle.bind(this, record.detail)}
                      >
                        <Button loading={record.detail.loading}>提交汇总单处理</Button>
                      </Popconfirm> : ''
                }
                <Popconfirm
                  title="确认刷新?"
                  onConfirm={this.props.tableDetailGet.bind(this, {
                    id: record.id,
                    version: record.version,
                  })}
                >
                  <Button loading={record.detail.loading} style={{ marginLeft: 6 }}>刷新</Button>
                </Popconfirm>
              </div> : ''
          }
        </React.Fragment>
      )
    };
    let columns = [{
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
      title: '提现申请数量',
      dataIndex: 'applyCount',
      align: 'right',
    }, {
      title: '提现成功数量',
      dataIndex: 'successCount',
      align: 'right',
    }, {
      title: '提现失败数量',
      dataIndex: 'failCount',
      align: 'right',
    }, {
      title: '处理单状态',
      dataIndex: 'status',
      render: text => this.props.dictData.handleWithDrawStatus.find(t => t.value === text).name,
    }, {
      title: '处理人姓名',
      dataIndex: 'handleUserName',
    }, {
      title: '处理时间',
      dataIndex: 'handleTime',
    }, {
      title: '操作',
      render: (text, record) => (
        <span>
          {
            record.status === 'PENDING' ? 
              <Popconfirm
                title="确认撤销?"
                onConfirm={this.props.onCancel.bind(this, record)}
              >
                <a>撤销</a>
              </Popconfirm> : ''
          }
        </span>
      ),
    }]
    return <PagesExpandedRowTable {...this.props} columns={columns} expandedRowRender={expandedRowRender} className='components-table-demo-nested' />
  }
}

export default ComponentsHandleWithdrawTable;