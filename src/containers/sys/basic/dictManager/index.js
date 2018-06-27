import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Row, Col } from 'antd';
import ThisBtns from '@/containers/sys/basic/dictManager/btns';
import ThisTable from '@/containers/sys/basic/dictManager/table';
import ThisForm from '@/containers/sys/basic/dictManager/form';
import ThisChildBtns from '@/containers/sys/basic/dictManager/childBtns';
import ThisChildTable from '@/containers/sys/basic/dictManager/childTable';
import ThisChildForm from '@/containers/sys/basic/dictManager/childForm';

class ContainersDictManager extends Component {
  render() {
    return (
      <React.Fragment>
        {
          this.props.visible ?
            <Row>
              <Col span={12}>
                <ThisBtns />
                <Divider style={{ margin: 0 }} />
                <ThisTable />
              </Col>
              <Col span={11} offset={1}>
                <ThisChildBtns />
                <Divider style={{ margin: 0 }} />
                <ThisChildTable />
              </Col>
            </Row> :
            <Row>
              <Col span={24}>
                <ThisBtns />
                <Divider style={{ margin: 0 }} />
                <ThisTable />
              </Col>
            </Row>
        }
        <ThisForm />
        <ThisChildForm />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  visible: state.sys.basic.dictManager.childTable.visible,
})

export default connect(mapStateToProps)(ContainersDictManager)