import React, { Component } from 'react';
import PagesTable from '@/components/common/PagesTable';

class ComponentsMemberManagerIntroducerTable extends Component {
  render() {
    let columns = [{
      title: '用户手机号',
      dataIndex: 'memberPhone',
    }, {
      title: '返点开始日期',
      dataIndex: 'startDate',
    }, {
      title: '返点结束日期',
      dataIndex: 'endDate',
    }]
    return <PagesTable {...this.props} columns={columns} loading={this.props.loading || this.props.table.some(t => t.loading)} />
  }
};

export default ComponentsMemberManagerIntroducerTable;