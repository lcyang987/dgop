import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Row, Col } from 'antd';
import ThisSearchForm from '@/containers/machineManager/searchForm';
import ThisBtns from '@/containers/machineManager/btns';
import ThisTable from '@/containers/machineManager/table';
import ThisForm from '@/containers/machineManager/form';
import ThisBrandBtns from '@/containers/machineManager/brandBtns';
import ThisBrandTable from '@/containers/machineManager/brandTable';
import ThisBrandForm from '@/containers/machineManager/brandForm';
import ThisComponentBtns from '@/containers/machineManager/componentBtns';
import ThisComponentTable from '@/containers/machineManager/componentTable';
import ThisComponentForm from '@/containers/machineManager/componentForm';
import ThisModelBtns from '@/containers/machineManager/modelBtns';
import ThisModelTable from '@/containers/machineManager/modelTable';
import ThisModelForm from '@/containers/machineManager/modelForm';

class ContainersMachineManager extends Component {
  childTableRender() {
    return (
      <Row>
        <Col span={12}>
          <ThisSearchForm />
          <Divider style={{ margin: 0 }} />
          <ThisBtns />
          <Divider style={{ margin: 0 }} />
          <ThisTable />
        </Col>
        <Col span={12}>
          {
            this.props.brandTableVisible ?
              <Col span={23} offset={1}>
                <ThisBrandBtns />
                <Divider style={{ margin: 0 }} />
                <ThisBrandTable />
              </Col> : ''
          }
          {
            this.props.componentTableVisible ?
              <Col span={23} offset={1}>
                <ThisComponentBtns />
                <Divider style={{ margin: 0 }} />
                <ThisComponentTable />
              </Col> : ''
          }
          {
            this.props.modelTableVisible ?
              <Col span={23} offset={1}>
                <ThisModelBtns />
                <Divider style={{ margin: 0 }} />
                <ThisModelTable />
              </Col> : ''
          }
        </Col>
      </Row>
    )
  }
  render() {
    let childVisible = this.props.brandTableVisible || this.props.componentTableVisible || this.props.modelTableVisible;
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
        <ThisBrandForm />
        <ThisComponentForm />
        <ThisModelForm />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  brandTableVisible: state.machineManager.brandTable.visible,
  componentTableVisible: state.machineManager.componentTable.visible,
  modelTableVisible: state.machineManager.modelTable.visible,
})

export default connect(mapStateToProps)(ContainersMachineManager)