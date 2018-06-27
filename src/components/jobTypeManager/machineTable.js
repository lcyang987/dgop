import React, { Component } from 'react';
import { Spin, Divider } from 'antd';
import PropTypes from 'prop-types';
import SingleTable from '@/components/common/SingleTable';

class ComponentsJobTypeManagerMachineTable extends Component {
  static propTypes = {
    get: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
  }
  render() {
    let columns = [{
      title: '农机',
      dataIndex: 'machineName',
    }, {
      title: '农机组件',
      dataIndex: 'machineComponentName',
      render: (text, record) => (<React.Fragment>{record.machineComponentId === 0 ? '无组件' : text}</React.Fragment>)
    }, {
      title: '备注',
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

export default ComponentsJobTypeManagerMachineTable;