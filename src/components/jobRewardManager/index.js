import React from 'react';
import { Divider } from 'antd';
import ThisSearchForm from '@/containers/jobRewardManager/searchForm';
import ThisTable from '@/containers/jobRewardManager/table';

const ComponentsJobRewardManager = props => (
  <React.Fragment>
    <ThisSearchForm />
    <Divider style={{ margin: '0 0 -1px 0' }} />
    <ThisTable history={props.history} />
  </React.Fragment>
);

export default ComponentsJobRewardManager;