import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Divider } from 'antd';
import ThisSearchForm from '@/containers/taskClaimManager/searchForm';
import ThisTable from '@/containers/taskClaimManager/table';
import ThisJobRewardTable from '@/containers/taskClaimManager/jobRewardTable';

class ComponentsTaskClaimManager extends Component {
  static propTypes = {
    jobRewardTableVisible: PropTypes.bool.isRequired,
  }
  render() {
    return (
      <React.Fragment>
        <ThisSearchForm />
        <Divider style={{ margin: '0 0 -1px 0' }} />
        <ThisTable history={this.props.history} />
        {
          this.props.jobRewardTableVisible ?
            <React.Fragment>
              <Divider style={{ margin: 0 }} />
              <ThisJobRewardTable />
            </React.Fragment> : ''
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  const data = state.taskClaimManager;
  return {
    jobRewardTableVisible: data.jobRewardTable.visible,
  }
}

export default connect(mapStateToProps)(ComponentsTaskClaimManager)
