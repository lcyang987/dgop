import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Divider, Icon, Switch } from 'antd';
import PagesTable from '@/components/common/PagesTable';

class ComponentsJobTypeManagerTable extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
    machineTableVisible: PropTypes.bool.isRequired,
    jobPoundageTableVisible: PropTypes.bool.isRequired,
    machineFormData: PropTypes.object.isRequired,
    get: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    machineRead: PropTypes.func.isRequired,
    jobPoundageRead: PropTypes.func.isRequired,
  }
  render() {
    let childVisible = !this.props.machineTableVisible && !this.props.jobPoundageTableVisible;
    let columns = [{
      title: '名称',
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
          <a onClick={this.props.get.bind(this, record)}>{childVisible ? `编辑 一 ${record.name}` : '编辑'}</a>
          <Divider type="vertical" />
          {
            this.props.machineTableVisible ?
              this.props.machineFormData.jobTypeId === record.id ?
                <span><Icon type="folder-open" /> 当前农机...</span> :
                <a onClick={this.props.machineRead.bind(this, record)}>切换农机</a> :
              <a onClick={this.props.machineRead.bind(this, record)}>查看农机</a>
          }
          <Divider type="vertical" />
          {
            this.props.jobPoundageTableVisible ?
              this.props.jobPoundageSearchData.id === record.id ?
                <span><Icon type="folder-open" /> 当前手续费标准...</span> :
                <a onClick={this.props.jobPoundageRead.bind(this, record)}>切换手续费标准</a> :
              <a onClick={this.props.jobPoundageRead.bind(this, record)}>查看手续费标准</a>
          }
          <Divider type="vertical" />
          <a onClick={this.props.remove.bind(this, record)}>删除</a>
        </span>
      ),
    }]
    if (childVisible) {
      columns.splice(columns.length - 1, 0, {
        title: '每亩作业保证金',
        dataIndex: 'unitDeposit',
      }, {
          title: '每亩介绍人返利',
          dataIndex: 'unitRebate',
        }, {
          title: '指导价低',
          dataIndex: 'guidePriceMin',
        }, {
          title: '指导价高',
          dataIndex: 'guidePriceMax',
        }, {
          title: '每天作业数量',
          dataIndex: 'dailyQuantity',
        }, {
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

export default ComponentsJobTypeManagerTable;