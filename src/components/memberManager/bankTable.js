import React, { Component } from 'react';
import SingleTable from '@/components/common/SingleTable';

class ComponentsMemberManagerBankTable extends Component {
  render() {
    let columns = [{
      title: '账户名',
      dataIndex: 'accountName',
    }, {
      title: '银行名称',
      dataIndex: 'bankName',
    }, {
      title: '支行名称',
      dataIndex: 'bankBranchName',
    }, {
      title: '银行卡卡号',
      dataIndex: 'bankCardNo',
    }, {
      title: '是否默认',
      dataIndex: 'isDefault',
      render: text => text === 'y' ? '是' : '否', 
    }]
    return <SingleTable columns={columns} {...this.props} />
  }
};

export default ComponentsMemberManagerBankTable;