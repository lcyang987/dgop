import React, { Component } from 'react';
import { Button, Popconfirm } from 'antd';
import PropTypes from 'prop-types';

class ComponentsCollectWithdrawApplyBtns extends Component {
  static propTypes = {
    batchApply: PropTypes.array.isRequired,
    apply: PropTypes.func.isRequired,
  }
  render() {
    return (
      <div style={{ margin: 6 }}>
        <Popconfirm
          title="确认批量汇总?"
          onConfirm={this.props.apply.bind(this, JSON.stringify(this.props.batchApply))}
        >
          <Button disabled={!this.props.batchApply.length}>批量汇总</Button>
        </Popconfirm>
        {
          this.props.batchApply.length ?
            ` 已选中${this.props.batchApply.length}个` : ''
        }
      </div>
    )
  }
}

export default ComponentsCollectWithdrawApplyBtns;