import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'antd';
import PagesTable from '@/components/common/PagesTable';
import SingleTable from '@/components/common/SingleTable';

class ComponentsDepositManagerDetailTable extends Component {
  static propTypes = {
    dictData: PropTypes.object.isRequired,
    table: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    flowTableVisible: PropTypes.bool.isRequired,
    flowTableSearchData: PropTypes.object.isRequired,
    get: PropTypes.func.isRequired,
    hide: PropTypes.func.isRequired,
    refund: PropTypes.func.isRequired,
  }
  render() {
    let columns = [{
      title: '保证金类型',
      dataIndex: 'depositType',
      render: text => this.props.dictData.depositManager_depositType[text],
    }, {
      title: '保证金金额',
      dataIndex: 'depositAmount',
      align: 'right',
      render: text => `￥${text}`,
    }, {
      title: '剩余金额',
      dataIndex: 'surplusAmount',
      align: 'right',
      render: text => `￥${text}`,
    }, {
      title: '保证金状态',
      dataIndex: 'status',
      render: text => this.props.dictData.depositManager_status[text],
    }, {
      title: '备注',
      dataIndex: 'comment',
    }, {
      title: '操作',
      render: (text, record) => (
        <span>
          {
            this.props.flowTableVisible ?
              <a onClick={this.props.hide.bind(this)}>关闭流水列表</a> :
              <a onClick={this.props.get.bind(this, record)}>查看流水列表</a>
          }
          <Divider type="vertical" />
          <a onClick={this.props.refund.bind(this, record)}>扣除</a>
        </span>
      ),
    }]
    return (
      <React.Fragment>
        {
          this.props.flowTableVisible ?
            <SingleTable {...this.props} table={this.props.table.filter(t => t.id === this.props.flowTableSearchData.detailId)} columns={columns} scroll={{ x: true }} className="tablexscroll" /> :
            <PagesTable {...this.props} columns={columns} scroll={{ x: true }} className="tablexscroll" />
        }
      </React.Fragment>
    )
  }
};

export default ComponentsDepositManagerDetailTable;