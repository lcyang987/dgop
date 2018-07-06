import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Divider, Avatar } from 'antd';
import PagesExpandedRowTable from '@/components/common/PagesExpandedRowTable';
import SingleTable from '@/components/common/SingleTable';

class ComponentsAuditMemberTable extends Component {
  static propTypes = {
    dictData: PropTypes.object.isRequired,
    dictLoading: PropTypes.bool.isRequired,
    get: PropTypes.func.isRequired,
    success: PropTypes.func.isRequired,
    show: PropTypes.func.isRequired,
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
      title: '证件照',
      dataIndex: 'credentialPictureList',
      align: 'center',
      render: (text, record) => (
        <span>
          <a onClick={this.props.show.bind(this, text, record)}>
            {
              text.map((t, i) => <Avatar key={i} src={t} />)
            }
          </a>
        </span>
      )
    }, {
      title: '名称',
      dataIndex: 'name',
    }, {
      title: '省市区',
      render: (text, record) => (
        `${record.province}-${record.city}-${record.county}`
      )
    }, {
      title: '详细地址',
      dataIndex: 'address',
    }, {
      title: '证件号码',
      dataIndex: 'authenticationType',
      render: (text, record) => `${this.props.dictData.authenticationType.find(t => t.value === text).name}: ${record.credentialNo}`,
    }, {
      title: '手机号码',
      dataIndex: 'contactPhone',
    }, {
      title: '邮箱',
      dataIndex: 'email',
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
    return <PagesExpandedRowTable {...this.props} columns={columns} expandedRowRender={expandedRowRender} className='components-table-demo-nested' />
  }
}

export default ComponentsAuditMemberTable;