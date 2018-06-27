import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Divider, Icon, Switch } from 'antd';
import PagesTable from '@/components/common/PagesTable';

class ContainersCropManagerTable extends Component {
  static propTypes  = {
    table: PropTypes.array.isRequired,
    get: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
  }
  render() {
    let columns = [{
      title: '名称',
      dataIndex: 'name',
      render: (text, record) => (
        record.icon ?
          <React.Fragment><Icon type={record.icon} /><span style={{ marginLeft: 6 }}>{text}</span></React.Fragment> :
          text
      )
    }, {
      title: '状态',
      dataIndex: 'status',
      align: 'center',
      render: (text, record) => (
        <Switch size="small" loading={record.loading} checked={text === 'ENABLE' ? true : false} onChange={this.props.toggle.bind(this, record)} />
      )
    }, {
      title: '排序',
      dataIndex: 'sort',
      align: 'right',
    }, {
      title: '操作',
      render: (text, record) => (
        <span>
          <a onClick={this.props.get.bind(this, record)}>编辑 一 {record.name}</a>
          <Divider type="vertical" />
          <a onClick={this.props.remove.bind(this, record)}>删除</a>
        </span>
      ),
    }]
    return <PagesTable {...this.props} columns={columns} loading={this.props.loading || this.props.table.some(t => t.loading)} />
  }
}

export default ContainersCropManagerTable;