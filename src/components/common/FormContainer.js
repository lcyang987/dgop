import React, { Component } from 'react';
import { Divider, Spin, Button } from 'antd';
import PropTypes from 'prop-types';

class CommonFormContainer extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    hide: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  }
  render() {
    return (
      <Spin spinning={this.props.loading}>
        {this.props.children}
        <Divider style={{ margin: '0 0 12px 0' }} />
        <div style={{ float: 'right' }}>
          <Button key="back" onClick={this.props.hide} style={{ marginRight: 6 }}>返回</Button>
          <Button key="submit" type="primary" loading={this.props.loading} onClick={this.props.handleSubmit}>提交</Button>
        </div>
      </Spin>
    )
  }
}

export default CommonFormContainer;