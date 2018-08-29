import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Row, Col } from 'antd';
import ThisSearchForm from '@/containers/jobTypeManager/searchForm';
import ThisBtns from '@/containers/jobTypeManager/btns';
import ThisTable from '@/containers/jobTypeManager/table';
import ThisForm from '@/containers/jobTypeManager/form';
import ThisMachineBtns from '@/containers/jobTypeManager/machineBtns';
import ThisMachineTable from '@/containers/jobTypeManager/machineTable';
import ThisMachineForm from '@/containers/jobTypeManager/machineForm';
import ThisJobPoundageBtns from '@/containers/jobTypeManager/jobPoundageBtns';
import ThisJobPoundageTable from '@/containers/jobTypeManager/jobPoundageTable';

class ContainersJobTypeManager extends Component {
  childTableRender() {
    return (
      <Row>
        <Col span={10}>
          <ThisSearchForm />
          <Divider style={{ margin: 0 }} />
          <ThisBtns />
          <Divider style={{ margin: 0 }} />
          <ThisTable />
        </Col>
        <Col span={14}>
          {
            this.props.machineTableVisible ?
              <Col span={23} offset={1}>
                <ThisMachineBtns />
                <Divider style={{ margin: 0 }} />
                <ThisMachineTable />
              </Col> : ''
          }
          {
            this.props.jobPoundageTableVisible ?
              <Col span={23} offset={1}>
                <ThisJobPoundageBtns />
                <Divider style={{ margin: 0 }} />
                <ThisJobPoundageTable />
              </Col> : ''
          }
        </Col>
      </Row>
    )
  }
  render() {
    let childVisible = this.props.machineTableVisible || this.props.jobPoundageTableVisible;
    return (
      <React.Fragment>
        {
          childVisible ?
            this.childTableRender() :
            <Row>
              <Col span={24}>
                <ThisSearchForm />
                <Divider style={{ margin: 0 }} />
                <ThisBtns />
                <Divider style={{ margin: 0 }} />
                <ThisTable />
              </Col>
            </Row>
        }
        <ThisForm />
        <ThisMachineForm />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  machineTableVisible: state.jobTypeManager.machineTable.visible,
  jobPoundageTableVisible: state.jobTypeManager.jobPoundageTable.visible,
})

export default connect(mapStateToProps)(ContainersJobTypeManager)