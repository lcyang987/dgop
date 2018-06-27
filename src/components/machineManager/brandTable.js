import React, { Component } from 'react';
import { Spin, Switch, Divider } from 'antd';
import PropTypes from 'prop-types';
import SingleTable from '@/components/common/SingleTable';

class ComponentsMachineManagerBrandTable extends Component {
  static propTypes = {
    get: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
  }
  render() {
    let columns = [{
      title: '品牌名称',
      dataIndex: 'name',
    }, {
      title: '状态',
      dataIndex: 'status',
      align: 'center',
      render: (text, record) => (
        <Switch size="small" loading={record.loading} checked={text === 'ENABLE' ? true : false} onChange={this.props.toggle.bind(this, record)} />
      )
    }, {
      title: '注释',
      dataIndex: 'comment',
    }, {
      title: '操作',
      render: (text, record) => (
        <span>
          <Spin spinning={record.loading} >
            <a onClick={this.props.get.bind(this, record)}>编辑</a>
            <Divider type="vertical" />
            <a onClick={this.props.remove.bind(this, record)}>删除</a>
          </Spin>
        </span>
      ),
    }]
    return <SingleTable columns={columns} {...this.props} />
  }
};

export default ComponentsMachineManagerBrandTable;