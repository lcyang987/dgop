import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { JOBDEMAND_MANAGER } from '@/actions';
import { Divider } from 'antd';
import CommonReadInfoModal from '@/components/common/ReadInfoModal';
import ThisDetailTable from '@/containers/jobDemandManager/depositDetailTable';
import ThisFlowTable from '@/containers/jobDemandManager/depositFlowTable';
import ThisRefundForm from '@/containers/jobDemandManager/depositRefundForm';


class ContainersJobDemandManagerDepositModal extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    visible: PropTypes.bool.isRequired,
    detailTableVisible: PropTypes.bool.isRequired,
    flowTableVisible: PropTypes.bool.isRequired,
    refundFormVisible: PropTypes.bool.isRequired,
  }
  render() {
    return (
      <CommonReadInfoModal {...this.props} width={750}>
        {
          this.props.detailTableVisible ?
            <React.Fragment>
              <Divider style={{ margin: 0 }} />
              <ThisDetailTable />
              {
                this.props.flowTableVisible ?
                  <React.Fragment>
                    <Divider style={{ margin: 0 }} />
                    <ThisFlowTable />
                  </React.Fragment> : ''
              }
              {
                this.props.refundFormVisible ?
                  <React.Fragment>
                    <Divider style={{ margin: 0 }} />
                    <ThisRefundForm />
                  </React.Fragment> : ''
              }
            </React.Fragment> : ''
        }
      </CommonReadInfoModal>
    )
  }
};

const mapStateToProps = state => {
  const data = state.jobDemandManager;
  return {
    title: data.depositModal.title,
    loading: data.depositModal.loading,
    visible: data.depositModal.visible,
    detailTableVisible: data.depositDetailTable.visible,
    flowTableVisible: data.depositFlowTable.visible,
    refundFormVisible: data.depositRefundForm.visible,
  };
};

const methods = JOBDEMAND_MANAGER;

const mapDispatchToProps = {
  tableGet: methods.depositDetailTableGet,
  hide: methods.depositModalHide,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainersJobDemandManagerDepositModal)