import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Divider, Icon, Avatar } from 'antd';
import PagesTable from '@/components/common/PagesTable';

class ComponentsMemberManagerTable extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
    addressTableVisible: PropTypes.bool.isRequired,
    bankTableVisible: PropTypes.bool.isRequired,
    introducerTableVisible: PropTypes.bool.isRequired,
    rebateTableVisible: PropTypes.bool.isRequired,
    show: PropTypes.func.isRequired,
    audit: PropTypes.func.isRequired,
    recommend: PropTypes.func.isRequired,
    address: PropTypes.func.isRequired,
    bank: PropTypes.func.isRequired,
    introducer: PropTypes.func.isRequired,
    rebate: PropTypes.func.isRequired,
  }
  render() {
    let childVisible = !this.props.addressTableVisible && !this.props.bankTableVisible && !this.props.introducerTableVisible && !this.props.rebateTableVisible;
    let columns = [{
      title: '头像',
      dataIndex: 'headPortrait',
      render: (text, record) => (
        text ? <span>
          <a onClick={this.props.show.bind(this, text, record, '头像')}>
            {
              text.map((t, i) => <Avatar key={i} src={t} />)
            }
          </a>
        </span> : '暂无'
      )
    }, {
      title: '登录名',
      dataIndex: 'loginName',
    }, {
      title: '操作',
      render: (text, record) => (
        <span>
          <a onClick={this.props.audit.bind(this, record)}>审核信息</a>
          <Divider type="vertical" />
          <a onClick={this.props.recommend.bind(this, record)}>介绍人</a>
          <Divider type="vertical" />
          {
            this.props.addressTableVisible ?
              this.props.addressTableParams.id === record.id ?
                <span><Icon type="folder-open" /> 当前地址...</span> :
                <a onClick={this.props.address.bind(this, record)}>切换地址</a> :
              <a onClick={this.props.address.bind(this, record)}>地址</a>
          }
          <Divider type="vertical" />
          {
            this.props.bankTableVisible ?
              this.props.bankTableParams.id === record.id ?
                <span><Icon type="folder-open" /> 当前账户...</span> :
                <a onClick={this.props.bank.bind(this, record)}>切换账户</a> :
              <a onClick={this.props.bank.bind(this, record)}>账户</a>
          }
          <Divider type="vertical" />
          {
            this.props.introducerTableVisible ?
              this.props.introducerTableParams.id === record.id ?
                <span><Icon type="folder-open" /> 当前被介绍人...</span> :
                <a onClick={this.props.introducer.bind(this, record)}>切换被介绍人</a> :
              <a onClick={this.props.introducer.bind(this, record)}>被介绍人</a>
          }
          <Divider type="vertical" />
          {
            this.props.rebateTableVisible ?
              this.props.rebateTableParams.id === record.id ?
                <span><Icon type="folder-open" /> 当前返利...</span> :
                <a onClick={this.props.rebate.bind(this, record)}>切换返利</a> :
              <a onClick={this.props.rebate.bind(this, record)}>返利</a>
          }
        </span>
      ),
    }]
    if (childVisible) {
      columns.splice(columns.length - 1, 0, {
        title: '手机',
        dataIndex: 'phone',
      }, {
          title: '昵称',
          dataIndex: 'nickname',
        }, {
          title: '性别',
          dataIndex: 'sex',
          render: text => {
            if (text === 'M') {
              return '男'
            } else if (text === 'F') {
              return '女'
            }
          }
        }, {
          title: '姓名',
          dataIndex: 'name',
        })
    }
    return <PagesTable {...this.props} columns={columns} loading={this.props.loading || this.props.table.some(t => t.loading)} />
  }
}

export default ComponentsMemberManagerTable;