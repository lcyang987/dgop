import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Divider, Icon, Switch } from 'antd';
import PagesTable from '@/components/common/PagesTable';

class ComponentsMachineManagerTable extends Component {
  static propTypes  = {
    table: PropTypes.array.isRequired,
    brandTableVisible: PropTypes.bool.isRequired,
    brandTableSearchData: PropTypes.object.isRequired,
    componentTableVisible: PropTypes.bool.isRequired,
    componentTableSearchData: PropTypes.object.isRequired,
    modelTableVisible: PropTypes.bool.isRequired,
    modelTableSearchData: PropTypes.object.isRequired,
    get: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    brandRead: PropTypes.func.isRequired,
    componentRead: PropTypes.func.isRequired,
    modelRead: PropTypes.func.isRequired,
  }
  render() {
    let childVisible = !this.props.brandTableVisible && !this.props.componentTableVisible && !this.props.modelTableVisible;
    let columns = [{
      title: '农机名称',
      dataIndex: 'name',
    }, {
      title: '状态',
      dataIndex: 'status',
      align: 'center',
      render: (text, record) => (
        <Switch size="small" loading={record.loading} checked={text === 'ENABLE' ? true : false} onChange={this.props.toggle.bind(this, record)} />
      )
    }, {
      title: '操作',
      render: (text, record) => (
        <span>
          <a onClick={this.props.get.bind(this, record)}>{childVisible ? `编辑 一 ${record.name}`: '编辑' }</a>
          <Divider type="vertical" />
          {
            this.props.brandTableVisible ?
            this.props.brandTableSearchData.id === record.id ?
            <span><Icon type="folder-open" /> 当前品牌...</span> :
            <a onClick={this.props.brandRead.bind(this, record)}>切换品牌</a> :
            <a onClick={this.props.brandRead.bind(this, record)}>查看品牌</a>
          }
          <Divider type="vertical" />
          {
            this.props.componentTableVisible ?
            this.props.componentTableSearchData.id === record.id ?
            <span><Icon type="folder-open" /> 当前组件...</span> :
            <a onClick={this.props.componentRead.bind(this, record)}>切换组件</a> :
            <a onClick={this.props.componentRead.bind(this, record)}>查看组件</a>
          }
          <Divider type="vertical" />
          {
            this.props.modelTableVisible ?
            this.props.modelTableSearchData.id === record.id ?
            <span><Icon type="folder-open" /> 当前型号...</span> :
            <a onClick={this.props.modelRead.bind(this, record)}>切换型号</a> :
            <a onClick={this.props.modelRead.bind(this, record)}>查看型号</a>
          }
          <Divider type="vertical" />
          <a onClick={this.props.remove.bind(this, record)}>删除</a>
        </span>
      ),
    }]
    if (childVisible) {
      columns.splice(columns.length - 1, 0, {
        title: '备注',
        dataIndex: 'comment',
      }, {
        title: '排序',
        dataIndex: 'sort',
        align: 'right',
      })
    }
    return <PagesTable {...this.props} columns={columns} loading={this.props.loading || this.props.table.some(t => t.loading)} />
  }
}

export default ComponentsMachineManagerTable;