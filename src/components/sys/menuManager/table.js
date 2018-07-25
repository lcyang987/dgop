import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Divider } from 'antd';
import SingleTable from '@/components/common/SingleTable';

class ComponentsMenuManagerTable extends Component {
  static propTypes = {
    get: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    addChild: PropTypes.func.isRequired,
  }
  render() {
    let columns = [{
      title: '菜单名称',
      dataIndex: 'name',
      render: (text, record) => (
        record.icon ? <React.Fragment><Icon type={record.icon} /><span style={{ marginLeft: 6 }}>{text}</span></React.Fragment> :
          text
      )
    }, {
      title: 'url',
      dataIndex: 'url',
    }, {
      title: '是否叶子',
      dataIndex: 'isLeaf',
      align: 'center',
      render: text => text === 'y' ? '是' : '否',
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
          {
            record.isLeaf === 'n' ?
              <React.Fragment>
                <Divider type="vertical" />
                <a onClick={this.props.addChild.bind(this, record)}>新增</a>
              </React.Fragment> : ''
          }
        </span>
      ),
    }]
    return <SingleTable columns={columns} {...this.props} />
  }
};

export default ComponentsMenuManagerTable;