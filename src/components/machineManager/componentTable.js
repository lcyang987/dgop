import React, { Component } from 'react';
import { Spin, Divider } from 'antd';
import PropTypes from 'prop-types';
import SingleTable from '@/components/common/SingleTable';

class ComponentsMachineManagerComponentTable extends Component {
  static propTypes = {
    get: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
  }
  render() {
    let columns = [{
      title: '组件名称',
      dataIndex: 'name',
    }, {
      title: '注释',
      dataIndex: 'comment',
    }, {
      title: '排序',
      dataIndex: 'sort',
      align: 'right',
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

export default ComponentsMachineManagerComponentTable;