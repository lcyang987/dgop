import React from 'react';
import { Divider } from 'antd';
import ThisSearchForm from '@/containers/sys/basic/bankConfig/searchForm';
import ThisBtns from '@/containers/sys/basic/bankConfig/btns';
import ThisTable from '@/containers/sys/basic/bankConfig/table';
import ThisForm from '@/containers/sys/basic/bankConfig/form';

const ComponentsBankConfig = () => (
  <React.Fragment>
    <ThisSearchForm />
    <Divider style={{ margin: '0 0 -1px 0' }} />
    <ThisBtns />
    <Divider style={{ margin: 0 }} />
    <ThisTable />
    <ThisForm />
  </React.Fragment>
);

export default ComponentsBankConfig;