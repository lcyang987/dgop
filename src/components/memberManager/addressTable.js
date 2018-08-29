import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SingleTable from '@/components/common/SingleTable';

class ComponentsMemberManagerAddressTable extends Component {
  static propTypes = {
    showMap: PropTypes.func.isRequired,
  }
  render() {
    let columns = [{
      title: '联系人姓名',
      dataIndex: 'contactName',
    }, {
      title: '联系人电话',
      dataIndex: 'contactPhone',
    }, {
      title: '省市区',
      render: (text, record,) => `${record.province}-${record.city}-${record.county}`,
    }, {
      title: '地址',
      dataIndex: 'address',
      render: (text, record) => (
        <a onClick={this.props.showMap.bind(this, record)} >{text}</a>
      ),
    }, {
      title: '是否默认',
      dataIndex: 'isDefault',
      render: text => text === 'y' ? '是' : '否', 
    }]
    return <SingleTable columns={columns} {...this.props} />
  }
};

export default ComponentsMemberManagerAddressTable;