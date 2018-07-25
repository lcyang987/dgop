import React from 'react';
import { Divider } from 'antd';
import ThisSearchForm from '@/containers/order/searchForm';
import ThisTable from '@/containers/order/table';

const ComponentsOrder = () => (
  <React.Fragment>
    <ThisSearchForm />
    <Divider style={{ margin: '0 0 -1px 0' }} />
    <ThisTable />
  </React.Fragment>
);

export default ComponentsOrder;