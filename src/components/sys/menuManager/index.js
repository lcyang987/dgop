import React from 'react';
import { Divider } from 'antd';
import ThisBtns from '@/containers/sys/menuManager/btns';
import ThisTable from '@/containers/sys/menuManager/table';
import ThisForm from '@/containers/sys/menuManager/form';

const ComponentsMenuManager = () => (
  <React.Fragment>
    <ThisBtns />
    <Divider style={{ margin: 0 }} />
    <ThisTable />
    <ThisForm />
  </React.Fragment>
);

export default ComponentsMenuManager;