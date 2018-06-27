import React, { Component } from 'react';
import { Switch, Spin } from 'antd';
import PropTypes from 'prop-types';
import SingleTable from '@/components/common/SingleTable';

class ComponentsDictManagerChildTable extends Component {
  static propTypes = {
    get: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
  }
  render() {
    let columns = [{
      title: '名称',
      dataIndex: 'codeName',
    }, {
      title: '代码',
      dataIndex: 'codeValue',
    }, {
      title: '状态',
      dataIndex: 'status',
      align: 'center',
      render: (text, record) => (
        <Switch size="small" loading={record.loading} checked={text === 'y' ? true : false} onChange={this.props.toggle.bind(this, record)} />
      )
    }, {
      title: '排序',
      align: 'right',
      dataIndex: 'sort',
    }, {
      title: '操作',
      render: (text, record) => (
        <span>
          <Spin spinning={record.loading} >
            <a onClick={this.props.get.bind(this, record)}>编辑</a>
          </Spin>
        </span>
      ),
    }]
    return <SingleTable columns={columns} {...this.props} />
  }
};

export default ComponentsDictManagerChildTable;