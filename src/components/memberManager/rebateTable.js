import React, { Component } from 'react';
import { Spin } from 'antd';
import PropTypes from 'prop-types';
import SingleTable from '@/components/common/SingleTable';

class ComponentsMemberManagerRebateTable extends Component {
  static propTypes = {
    get: PropTypes.func.isRequired, 
  }
  render() {
    let columns = [{
      title: '作业类型名称',
      dataIndex: 'jobTypeName',
    }, {
      title: '每亩作业返利金额',
      dataIndex: 'unitRebate',
    }, {
      title: '备注',
      dataIndex: 'comment',
    }, {
      title: '操作',
      render: (text, record) => (
        <span>
          <Spin spinning={record.loading} >
            <a onClick={this.props.get.bind(this, record)}>编辑</a>
          </Spin>
        </span>
      ),
    }]
    return <SingleTable columns={columns} {...this.props} />
  }
};

export default ComponentsMemberManagerRebateTable;