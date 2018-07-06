import React from 'react';
import { Divider } from 'antd';
import ThisSearchForm from '@/containers/withdraw/handleWithdraw/searchForm';
import ThisTable from '@/containers/withdraw/handleWithdraw/table';
import ThisDetailRowForm from '@/containers/withdraw/handleWithdraw/detailRowFailureForm';

const ComponentsHandleWithdraw = () => (
  <React.Fragment>
    <ThisSearchForm />
    <Divider style={{ margin: '0 0 -1px 0' }} />
    <ThisTable />
    <ThisDetailRowForm />
  </React.Fragment>
)

export default ComponentsHandleWithdraw;
