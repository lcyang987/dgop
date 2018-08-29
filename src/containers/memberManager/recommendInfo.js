import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MEMBER_MANAGER } from '@/actions';
import ThisInfo from '@/components/memberManager/recommendInfo';

class ContainersMemberManagerRecommendInfo extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
    visible: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    infoData: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    hide: PropTypes.func.isRequired,
  }
  render() {
    return <ThisInfo ref="info" {...this.props} />
  }
};

const mapStateToProps = state => {
  const data = state.memberManager;
  return {
    table: data.table.data,
    searchData: data.table.searchData,
    visible: data.recommendInfo.visible,
    loading: data.recommendInfo.loading,
    infoData: data.recommendInfo.data,
    title: data.recommendInfo.title,
  };
};

const methods = MEMBER_MANAGER;

const mapDispatchToProps = {
  hide: methods.recommendInfoHide,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainersMemberManagerRecommendInfo)