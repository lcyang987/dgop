import React from 'react';
import { Divider } from 'antd';
import ThisSearchForm from '@/containers/sys/userManager/searchForm';
import ThisBtns from '@/containers/sys/userManager/btns';
import ThisTable from '@/containers/sys/userManager/table';
import ThisForm from '@/containers/sys/userManager/form';
import ThisPasswordForm from '@/containers/sys/userManager/passwordForm';

const ComponentsUserManager = () => (
  <React.Fragment>
    <ThisSearchForm />
    <Divider style={{ margin: '0 0 -1px 0' }} />
    <ThisBtns />
    <Divider style={{ margin: 0 }} />
    <ThisTable />
    <ThisForm />
    <ThisPasswordForm />
  </React.Fragment>
)

export default ComponentsUserManager;