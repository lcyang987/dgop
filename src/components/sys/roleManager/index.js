import React from 'react';
import { Divider } from 'antd';
import ThisSearchForm from '@/containers/sys/roleManager/searchForm';
import ThisBtns from '@/containers/sys/roleManager/btns';
import ThisTable from '@/containers/sys/roleManager/table';
import ThisForm from '@/containers/sys/roleManager/form';
import ThisConfigForm from '@/containers/sys/roleManager/configForm';

const ComponentsRoleManager = () => (
  <React.Fragment>
    <ThisSearchForm />
    <Divider style={{ margin: '0 0 -1px 0' }} />
    <ThisBtns />
    <Divider style={{ margin: 0 }} />
    <ThisTable />
    <ThisForm />
    <ThisConfigForm />
  </React.Fragment>
)

export default ComponentsRoleManager;