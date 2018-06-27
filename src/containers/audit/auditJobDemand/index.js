import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Divider } from 'antd';
import { AUDIT_JOBDEMAND } from '@/actions';
import ThisSearchForm from '@/containers/audit/auditJobDemand/searchForm';
import ThisTable from '@/containers/audit/auditJobDemand/table';
import ThisForm from '@/containers/audit/auditJobDemand/form';
import CommonMap from '@/components/common/Map';

class ComponentsAuditJobDemand extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
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
        <CommonMap {...this.props} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  const data = state.audit.auditJobDemand;
  return {
    data: data.map.data,
    visible: data.map.visible,
    title: data.map.title,
  };
}

const methods = AUDIT_JOBDEMAND;

const mapDispatchToProps = {
  hide: methods.mapHide
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentsAuditJobDemand);
