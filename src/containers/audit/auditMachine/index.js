import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Divider } from 'antd';
import { AUDIT_MACHINE } from '@/actions';
import ThisSearchForm from '@/containers/audit/auditMachine/searchForm';
import ThisTable from '@/containers/audit/auditMachine/table';
import ThisForm from '@/containers/audit/auditMachine/form';
import CommonCarousel from '@/components/common/Carousel';

class ContainersAuditMachine extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    visible: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    hide: PropTypes.func.isRequired,
  }
  render() {
    return (
      <React.Fragment>
        <ThisSearchForm />
        <Divider style={{ margin: 0 }} />
        <ThisTable />
        <ThisForm />
        <CommonCarousel {...this.props} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  const data = state.audit.auditMachine;
  return {
    data: data.carousel.data,
    visible: data.carousel.visible,
    title: data.carousel.title,
  };
}

const methods = AUDIT_MACHINE;

const mapDispatchToProps = {
  hide: methods.carouselHide
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersAuditMachine);
