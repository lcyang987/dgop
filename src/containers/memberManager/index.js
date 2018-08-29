import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Divider, Row, Col } from 'antd';
import { MEMBER_MANAGER } from '@/actions';
import ThisSearchForm from '@/containers/memberManager/searchForm';
import ThisTable from '@/containers/memberManager/table';
import ThisAuditInfo from '@/containers/memberManager/auditInfo';
import ThisRecommendInfo from '@/containers/memberManager/recommendInfo';
import ThisRightCommonBtns from '@/containers/memberManager/rightCommonBtns';
import ThisAddressTable from '@/containers/memberManager/addressTable';
import ThisBankTable from '@/containers/memberManager/bankTable';
import ThisIntroducerTable from '@/containers/memberManager/introducerTable';
import ThisRebateTable from '@/containers/memberManager/rebateTable';
import ThisRebateForm from '@/containers/memberManager/rebateForm';
import CommonCarousel from '@/components/common/Carousel';
import CommonMap from '@/components/common/Map';


class ContainersMemberManager extends Component {
  static propTypes = {
    addressTableVisible: PropTypes.bool.isRequired,
    bankTableVisible: PropTypes.bool.isRequired,
    introducerTableVisible: PropTypes.bool.isRequired,
    carouselData: PropTypes.array.isRequired,
    carouselVisible: PropTypes.bool.isRequired,
    carouselTitle: PropTypes.string.isRequired,
    carouselHide: PropTypes.func.isRequired,
    mapData: PropTypes.object.isRequired,
    mapVisible: PropTypes.bool.isRequired,
    mapTitle: PropTypes.string.isRequired,
    mapHide: PropTypes.func.isRequired,
  }
  childTableRender() {
    return (
      <Row>
        <Col span={9}>
          <ThisSearchForm />
          <Divider style={{ margin: 0 }} />
          <ThisTable />
        </Col>
        <Col span={15}>
        {
          this.props.addressTableVisible ?
            <Col span={23} offset={1}>
              <ThisRightCommonBtns />
              <Divider style={{ margin: 0 }} />
              <ThisAddressTable />
            </Col> : ''
        }
        {
          this.props.bankTableVisible ?
            <Col span={23} offset={1}>
              <ThisRightCommonBtns />
              <Divider style={{ margin: 0 }} />
              <ThisBankTable />
            </Col> : ''
        }
        {
          this.props.introducerTableVisible ?
            <Col span={23} offset={1}>
              <ThisRightCommonBtns />
              <Divider style={{ margin: 0 }} />
              <ThisIntroducerTable />
            </Col> : ''
        }
        {
          this.props.rebateTableVisible ?
            <Col span={23} offset={1}>
              <ThisRightCommonBtns />
              <Divider style={{ margin: 0 }} />
              <ThisRebateTable />
            </Col> : ''
        }
        </Col>
      </Row>
    )
  }
  render() {
    let childVisible = this.props.addressTableVisible || this.props.bankTableVisible || this.props.introducerTableVisible || this.props.rebateTableVisible;
    return (
      <React.Fragment>
        {
          childVisible ?
            this.childTableRender() :
            <Row>
              <Col span={24}>
                <ThisSearchForm />
                <Divider style={{ margin: 0 }} />
                <ThisTable />
              </Col>
            </Row>
        }
        <ThisAuditInfo />
        <ThisRecommendInfo />
        <ThisRebateForm />
        <CommonCarousel data={this.props.carouselData} visible={this.props.carouselVisible} title={this.props.carouselTitle} hide={this.props.carouselHide} />
        <CommonMap data={this.props.mapData} visible={this.props.mapVisible} title={this.props.mapTitle} hide={this.props.mapHide} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  const data = state.memberManager;
  return {
    addressTableVisible: data.addressTable.visible,
    bankTableVisible: data.bankTable.visible,
    introducerTableVisible: data.introducerTable.visible,
    rebateTableVisible: data.rebateTable.visible,
    carouselData: data.carousel.data,
    carouselVisible: data.carousel.visible,
    carouselTitle: data.carousel.title,
    mapData: data.map.data,
    mapVisible: data.map.visible,
    mapTitle: data.map.title,
  }
}

const methods = MEMBER_MANAGER;

const mapDispatchToProps = {
  carouselHide: methods.carouselHide,
  mapHide: methods.mapHide,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersMemberManager);