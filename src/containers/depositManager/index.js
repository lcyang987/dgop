import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Divider } from 'antd';
import ThisTable from '@/containers/depositManager/table';
import ThisDetailTable from '@/containers/depositManager/detailTable';
import ThisFlowTable from '@/containers/depositManager/flowTable';
import ThisRefundForm from '@/containers/depositManager/refundForm';

class ComponentsDepositManager extends Component {
  static propTypes = {
    detailTableVisible: PropTypes.bool.isRequired,
    flowTableVisible: PropTypes.bool.isRequired,
  }
  render() {
    return (
      <React.Fragment>
        <ThisTable />
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
            </React.Fragment> : ''
        }
        <ThisRefundForm />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  const data = state.depositManager;
  return {
    detailTableVisible: data.detailTable.visible,
    flowTableVisible: data.flowTable.visible,
  }
}
export default connect(mapStateToProps)(ComponentsDepositManager)
