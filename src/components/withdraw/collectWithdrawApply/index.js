import React from 'react';
import { Divider } from 'antd';
import ThisSearchForm from '@/containers/withdraw/collectWithdrawApply/searchForm';
import ThisTable from '@/containers/withdraw/collectWithdrawApply/table';

const ComponentsCollectWithdrawApply = () => (
  <React.Fragment>
    <ThisSearchForm />
    <Divider style={{ margin: '0 0 -1px 0' }} />
    <ThisTable />
  </React.Fragment>
)

export default ComponentsCollectWithdrawApply;
