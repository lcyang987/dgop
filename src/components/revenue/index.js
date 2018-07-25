import React from 'react';
import { Divider } from 'antd';
import ThisSearchForm from '@/containers/revenue/searchForm';
import ThisTable from '@/containers/revenue/table';

const ComponentsRevenue = () => (
  <React.Fragment>
    <ThisSearchForm />
    <Divider style={{ margin: '0 0 -1px 0' }} />
    <ThisTable />
  </React.Fragment>
);

export default ComponentsRevenue;