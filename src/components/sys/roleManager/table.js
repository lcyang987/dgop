import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Divider, Icon } from 'antd';
import PagesTable from '@/components/common/PagesTable';

class ContainersRoleManagerTable extends Component {
  static propTypes  = {
    get: PropTypes.func.isRequired,
    getConfig: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
  }
  render() {
    let columns = [{
      title: '角色名称',
      dataIndex: 'name',
      render: (text, record) => (
        record.icon ?
          <React.Fragment><Icon type={record.icon} /><span style={{ marginLeft: 6 }}>{text}</span></React.Fragment> :
          text
      )
    }, {
      title: '备注',
      dataIndex: 'remarks',
    }, {
      title: '操作',
      render: (text, record) => (
        <span>
          <a onClick={this.props.get.bind(this, record)}>编辑 一 {record.name}</a>
          <Divider type="vertical" />
          <a onClick={this.props.getConfig.bind(this, record)}>配置菜单</a>
          <Divider type="vertical" />
          <a onClick={this.props.remove.bind(this, record)}>删除</a>
        </span>
      ),
    }]
    return <PagesTable columns={columns} {...this.props} />
  }
}

export default ContainersRoleManagerTable;