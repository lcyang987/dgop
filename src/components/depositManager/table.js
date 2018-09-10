import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SingleTable from '@/components/common/SingleTable';
import PagesTable from '@/components/common/PagesTable';

class ComponentsDepositManagerTable extends Component {
  static propTypes = {
    dictData: PropTypes.object.isRequired,
    table: PropTypes.array.isRequired,
    detailTableVisible: PropTypes.bool.isRequired,
    detailTableSearchData: PropTypes.object.isRequired,
    get: PropTypes.func.isRequired,
    hide: PropTypes.func.isRequired,
  }
  render() {
    let columns = [{
      title: '质量保证金金额',
      dataIndex: 'qualityDepositAmount',
      align: 'right',
      render: (text, record) => <a onClick={this.props.get.bind(this, record, 'QUALITY_DEPOSIT')}>¥{text}</a>,
    }, {
      title: '需求保证金金额',
      dataIndex: 'demandDepositAmount',
      align: 'right',
      render: (text, record) => <a onClick={this.props.get.bind(this, record, 'DEMAND_DEPOSIT')}>¥{text}</a>,
    }, {
      title: '用户名',
      dataIndex: 'memberName',
    }, {
      title: '用户电话',
      dataIndex: 'memberPhone',
    }, {
      title: '操作',
      render: (text, record) => (
        <span>
          {
            this.props.detailTableVisible ? <a onClick={this.props.hide.bind(this)}>关闭详情列表</a> : ''
          }
        </span>
      ),
    }]
    return (
      <React.Fragment>
        {
          this.props.detailTableVisible ?
            <SingleTable {...this.props} table={this.props.table.filter(t => t.memberId === this.props.detailTableSearchData.memberId)} columns={columns} scroll={{ x: true }} className="tablexscroll" /> :
            <PagesTable {...this.props} columns={columns} scroll={{ x: true }} className="tablexscroll" />
        }
      </React.Fragment>
    )
  }
}

export default ComponentsDepositManagerTable;