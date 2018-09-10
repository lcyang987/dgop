import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Divider } from 'antd';
import { JOBDEMAND_MANAGER } from '@/actions';
import ThisSearchForm from '@/containers/jobDemandManager/searchForm';
import ThisTable from '@/containers/jobDemandManager/table';
import ThisDemandDetailTable from '@/containers/jobDemandManager/demandDetailTable';
import ThisTaskClaimTable from '@/containers/jobDemandManager/taskClaimTable';
import ThisJobRewardTable from '@/containers/jobDemandManager/jobRewardTable';
import ThisDepositModal from '@/containers/jobDemandManager/depositModal';
import CommonMap from '@/components/common/Map';

class ComponentsJobDemandManager extends Component {
  static propTypes = {
    demandDetailTableVisible: PropTypes.bool.isRequired,
    taskClaimTableVisible: PropTypes.bool.isRequired,
    jobRewardTableVisible: PropTypes.bool.isRequired,
    data: PropTypes.object.isRequired,
    visible: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    hide: PropTypes.func.isRequired,
  }
  render() {
    return (
      <React.Fragment>
        <ThisSearchForm />
        <Divider style={{ margin: '0 0 -1px 0' }} />
        <ThisTable />
        {
          this.props.demandDetailTableVisible ?
            <React.Fragment>
              <Divider style={{ margin: 0 }} />
              <ThisDemandDetailTable />
              {
                this.props.taskClaimTableVisible ?
                  <React.Fragment>
                    <Divider style={{ margin: 0 }} />
                    <ThisTaskClaimTable />
                    {
                      this.props.jobRewardTableVisible ?
                        <React.Fragment>
                          <Divider style={{ margin: 0 }} />
                          <ThisJobRewardTable />
                        </React.Fragment> : ''
                    }
                  </React.Fragment> : ''
              }
            </React.Fragment> : ''
        }
        <ThisDepositModal />
        <CommonMap {...this.props} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  const data = state.jobDemandManager;
  return {
    demandDetailTableVisible: data.demandDetailTable.visible,
    taskClaimTableVisible: data.taskClaimTable.visible,
    jobRewardTableVisible: data.jobRewardTable.visible,
    data: data.map.data,
    visible: data.map.visible,
    title: data.map.title,
  }
}

const methods = JOBDEMAND_MANAGER;

const mapDispatchToProps = {
  hide: methods.mapHide
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentsJobDemandManager)
