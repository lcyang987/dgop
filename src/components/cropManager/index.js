import React from 'react';
import { Divider } from 'antd';
import ThisSearchForm from '@/containers/cropManager/searchForm';
import ThisBtns from '@/containers/cropManager/btns';
import ThisTable from '@/containers/cropManager/table';
import ThisForm from '@/containers/cropManager/form';

const ComponentsCropManager = () => (
  <React.Fragment>
    <ThisSearchForm />
    <Divider style={{ margin: '0 0 -1px 0' }} />
    <ThisBtns />
    <Divider style={{ margin: 0 }} />
    <ThisTable />
    <ThisForm />
  </React.Fragment>
)

export default ComponentsCropManager;
