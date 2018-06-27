import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Divider, Switch } from 'antd';
import PagesTable from '@/components/common/PagesTable';

class ContainersUserManagerTable extends Component {
  static propTypes  = {
    table: PropTypes.array.isRequired,
    get: PropTypes.func.isRequired,
    getPassword: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
  }
  render() {
    let columns = [{
      title: '帐号',
      dataIndex: 'loginName',
    }, {
      title: '昵称',
      dataIndex: 'nickname',
    }, {
      title: '真实姓名',
      dataIndex: 'realName',
    }, {
      title: '性别',
      dataIndex: 'sex',
      render: text => text === 'M' ? '男' : '女',
    }, {
      title: '是否使用',
      dataIndex: 'status',
      align: 'center',
      render: (text, record) => (
        <Switch size="small" loading={record.loading} checked={text === 'y' ? true : false} onChange={this.props.toggle.bind(this, record)} />
      )
    }, {
      title: '操作',
      render: (text, record) => (
        <span>
          <a onClick={this.props.get.bind(this, record)}>编辑 一 {record.loginName}</a>
          <Divider type="vertical" />
          <a onClick={this.props.getPassword.bind(this, record)}>修改密码</a>
        </span>
      ),
    }]
    return <PagesTable columns={columns} {...this.props} loading={this.props.loading || this.props.table.some(t => t.loading)} />
  }
}

export default ContainersUserManagerTable;