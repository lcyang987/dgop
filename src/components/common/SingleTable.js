import React from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';

const SingleTable = ({ className, scroll, rowSelection, columns, table, loading }) => (
  <React.Fragment>
    {
      table && table.length ?
        <Table
          rowKey="id"
          className={className || undefined}
          scroll={scroll || undefined}
          rowSelection={rowSelection ? rowSelection : undefined}
          columns={columns}
          dataSource={table}
          loading={loading}
          size="middle"
          defaultExpandAllRows={true}
          pagination={false}
        /> :
        <div><Table columns={columns} size="middle" locale={{ emptyText: !table.length && !loading ? '数据为空' : '正在加载' }} /></div>
    }
  </React.Fragment>
);

SingleTable.propTypes = {
  columns: PropTypes.array.isRequired,
  table: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default SingleTable;
