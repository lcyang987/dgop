import React from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';

const PagesTable = ({ className, scroll, rowSelection, columns, tableGet, table, count, searchData, loading }) => (
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
          pagination={{
            showSizeChanger: true, showQuickJumper: true, pageSizeOptions: ['2', '5', '10', '20', '30', '40'],
            current: searchData.currentPage, pageSize: searchData.pageSize, total: count,
            onChange: nextPage => {
              tableGet({
                ...searchData,
                currentPage: nextPage,
              });
            },
            onShowSizeChange: (currentPage, pageSize) => {
              tableGet({
                ...searchData,
                currentPage: 1,
                pageSize: pageSize,
              });
            }
          }}
        /> :
        <div><Table columns={columns} size="middle" locale={{ emptyText: !table.length && !loading ? '数据为空' : '正在加载' }} /></div>
    }
  </React.Fragment>
);

PagesTable.propTypes = {
  table: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
  searchData: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  tableGet: PropTypes.func.isRequired,
}

export default PagesTable;
