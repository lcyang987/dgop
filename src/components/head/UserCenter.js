import React from 'react';
import { Modal, Row, Col, List } from 'antd';
import PropTypes from 'prop-types';

const empty = '暂无';

const UserCenter = ({ visible, hide, userCenterData }) => (
  <Modal
    title="用户详情"
    width={780}
    visible={visible}
    onCancel={hide}
    footer={false}
  >
    <Row>
      <Col span={8}>
        <List
          size="small"
          dataSource={[
            `帐号: ${userCenterData.loginName || empty}`,
            `姓名: ${userCenterData.realName || empty}`,
            `工号: ${userCenterData.jobNumber || empty}`,
            `在职状态: ${{ incumbency: '在职', practice: '实习', concurrent_post: '兼职', quit: '离职' }[userCenterData.workStatus] || empty}`,
            `微信: ${userCenterData.wechatNumber || empty}`,
            '',
          ]}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
      </Col>
      <Col span={8} offset={1}>
        <List
          size="small"
          dataSource={[
            `昵称: ${userCenterData.nickname || empty}`,
            `手机: ${userCenterData.phone || empty}`,
            `性别: ${userCenterData.sex === 'M' ? '男' : '女' || empty}`,
            `是否使用: ${userCenterData.status === 'y' ? '是' : '否' || empty}`,
            `QQ: ${userCenterData.qq || empty}`,
            '',
          ]}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
      </Col>
      <Col span={6} offset={1}>
        <a href={userCenterData.headPortraitUrl} target="_blank">
          <img
            style={{ border: '1px dashed #dedddd', borderRadius: 6, padding: 8, width: 190, height: 190, display: 'block', margin: '0 auto' }}
            src={`${userCenterData.headPortraitUrl}/w/172/h/172`}
            alt="头像"
          />
        </a>
      </Col>
      <Col span={24}>
        <List
          size="small"
          dataSource={[
            `email: ${userCenterData.email || empty}`,
            `简介: ${userCenterData.introduction || empty}`,
          ]}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
      </Col>
    </Row>
  </Modal>
)

UserCenter.propTypes = {
  visible: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  userCenterData: PropTypes.object.isRequired,
};

export default UserCenter;