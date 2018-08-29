import React, { Component } from 'react';
import { Row, Col, List } from 'antd';
import PropTypes from 'prop-types';
import CommonReadInfoModal from '@/components/common/ReadInfoModal';

class ComponentsMemberManagerAuditInfo extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    infoData: PropTypes.object.isRequired,
  }
  render() {
    const empty = this.props.loading ? '加载中' : '暂无';
    const data = this.props.infoData;
    return (
      <CommonReadInfoModal {...this.props} width={750}>
        <Row>
          <Col span={8}>
            <List
              size="small"
              dataSource={[
                `认证类型: ${{ PERSON: '个人', ENTERPRISE: '企业' }[data.authenticationType] || empty}`,
                `联系电话: ${data.contactPhone || empty}`,
                `证件号码: ${data.credentialNo || empty}`,
                `状态: ${{ UNCERTIFIED: '未认证', AUDIT: '审核中', AUDIT_FAIL: '审核未通过', CERTIFIED: '已认证' }[data.status] || empty}`,
                '以下为证件照',
                '',
              ]}
              renderItem={item => (<List.Item>{item}</List.Item>)}
            />
          </Col>
          <Col span={15} offset={1}>
            <List
              size="small"
              dataSource={[
                `${{ PERSON: '姓名', ENTERPRISE: '企业名称' }[data.authenticationType] || empty}: ${data.name || empty}`,
                `省市区: ${data.province || empty}-${data.city || empty}-${data.county || empty}`,
                `地址: ${data.address || empty}`,
                `email: ${data.email || empty}`,
                '',
              ]}
              renderItem={item => (<List.Item>{item}</List.Item>)}
            />
          </Col>
          <Col span={24}>
            <div style={{ display: 'flex', flexFlow: 'wrap', justifyContent: 'space-evenly' }}>
              {
                data.credentialPictureList ?
                  data.credentialPictureList.map((t, i) => (
                    <a href={t} key={i} target="_blank"><img src={t} width="150" height="150" alt={i} style={{ marginBottom: 16 }} /></a>
                  )) : empty
              }
            </div>
          </Col>
        </Row>
      </CommonReadInfoModal>
    )
  }
};

export default ComponentsMemberManagerAuditInfo
