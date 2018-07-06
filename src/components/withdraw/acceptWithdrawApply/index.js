import React from 'react';
import { Divider } from 'antd';
import ThisSearchForm from '@/containers/withdraw/acceptWithdrawApply/searchForm';
import ThisTable from '@/containers/withdraw/acceptWithdrawApply/table';

const ComponentsAcceptWithdrawApply = () => (
  <React.Fragment>
    <ThisSearchForm />
    <Divider style={{ margin: '0 0 -1px 0' }} />
    <ThisTable />
  </React.Fragment>
)

export default ComponentsAcceptWithdrawApply;
