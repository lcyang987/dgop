import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Divider } from 'antd';
import SingleTable from '@/components/common/SingleTable';

class ComponentsDictManagerTable extends Component {
  static propTypes = {
    childTableVisible: PropTypes.bool.isRequired,
    childTableSearchData: PropTypes.object.isRequired,
    get: PropTypes.func.isRequired,
    read: PropTypes.func.isRequired,
    addChild: PropTypes.func.isRequired,
  }
  render() {
    let columns = [{
      title: '类型名称',
      dataIndex: 'typeName',
    }, {
      title: '类型代码',
      dataIndex: 'typeValue',
    }, {
      title: '操作',
      render: (text, record) => (
        <span>
          <a onClick={this.props.get.bind(this, record)}>{!this.props.childTableVisible ? `编辑 一 ${record.typeName}` : '编辑'}</a>
          <Divider type="vertical" />
          <a onClick={this.props.addChild.bind(this, record)}>新增</a>
          <Divider type="vertical" />
          {
            this.props.childTableVisible ?
              this.props.childTableSearchData.codeType === record.typeValue ?
                <span><Icon type="folder-open" /> 当前字典...</span> :
                <a onClick={this.props.read.bind(this, record)}>切换字典</a> :
              <a onClick={this.props.read.bind(this, record)}>查看字典</a>
          }
        </span>
      ),
    }]
    if (!this.props.childTableVisible) {
      columns.splice(columns.length - 1, 0, {
        title: '描述',
        dataIndex: 'content',
      })
    }
    return <SingleTable columns={columns} {...this.props} />
  }
};

export default ComponentsDictManagerTable;