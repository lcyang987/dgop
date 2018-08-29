import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { MEMBER_MANAGER } from '@/actions';

class ContainersMemberManagerRightCommonBtns extends Component {
  static propTypes = {
    addressHide: PropTypes.func.isRequired,
    bankHide: PropTypes.func.isRequired,
    introducerHide: PropTypes.func.isRequired,
    rebateHide: PropTypes.func.isRequired,
  }
  hide() {
    this.props.addressHide();
    this.props.bankHide();
    this.props.introducerHide();
    this.props.rebateHide();
  }
  render() {
    return (
      <div style={{ margin: '8px 0 10px 6px' }}>
        <Button onClick={this.hide.bind(this)} type="danger">关闭</Button>
      </div>
    )
  }
}

const methods = MEMBER_MANAGER;

const mapDispatchToProps = {
  addressHide: methods.addressTableHide,
  bankHide: methods.bankTableHide,
  introducerHide: methods.introducerTableHide,
  rebateHide: methods.rebateTableHide,
}

export default connect(null, mapDispatchToProps)(ContainersMemberManagerRightCommonBtns);