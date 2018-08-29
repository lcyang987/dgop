import React, { Component } from 'react';
import { Row, Col, List } from 'antd';
import PropTypes from 'prop-types';
import CommonReadInfoModal from '@/components/common/ReadInfoModal';

class ComponentsMemberManagerRecommendInfo extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    infoData: PropTypes.object.isRequired,
  }
  render() {
    const empty = this.props.loading ? '加载中' : '暂无';
    const data = this.props.infoData;
    return (
      <CommonReadInfoModal {...this.props} width={500}>
        <Row>
          <Col span={24}>
            <List
              size="small"
              dataSource={[
                `介绍人手机号: ${data.introducerPhone || empty}`,
                `返点开始日期: ${data.startDate || empty}`,
                `返点结束日期: ${data.endDate || empty}`,
                '',
              ]}
              renderItem={item => (<List.Item>{item}</List.Item>)}
            />
          </Col>
        </Row>
      </CommonReadInfoModal>
    )
  }
};

export default ComponentsMemberManagerRecommendInfo
