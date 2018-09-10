import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PagesTable from '@/components/common/PagesTable';

class ComponentsDepositManagerFlowTable extends Component {
  static propTypes = {
    dictData: PropTypes.object.isRequired,
    table: PropTypes.array.isRequired,
    flowTableVisible: PropTypes.bool.isRequired,
    flowTableSearchData: PropTypes.object.isRequired,
  }
  render() {
    let columns = [{
      title: '变动资金',
      dataIndex: 'changeFund',
      align: 'right',
      render: text => `￥${text}`,
    }, {
      title: '资金方向',
      dataIndex: 'direction',
      render: text => this.props.dictData.depositManager_direction[text],
    }, {
      title: '类型',
      dataIndex: 'changeType',
      render: text => this.props.dictData.depositManager_changeType[text],
    }, {
      title: '备注',
      dataIndex: 'comment',
    }]
    return <PagesTable columns={columns} {...this.props} />
  }
};

export default ComponentsDepositManagerFlowTable;