import React from 'react';
import { Menu, Dropdown, Icon, Avatar } from 'antd';
import PropTypes from 'prop-types';

const menu = (show, logout) => {
  return (
    <Menu>
      <Menu.Item onClick={show}>用户详情</Menu.Item>
      <Menu.Divider />
      <Menu.Item onClick={logout}>退出登录</Menu.Item>
    </Menu>
  )
};

const UserDropdown = ({ show, logout, userCenterData }) => (
  <Dropdown overlay={menu(show, logout)} trigger={['click']}>
    <a style={{ float: 'right' }}>
      {userCenterData.nickname}
      <Icon type="down" />
      <Avatar style={{ margin: '-6px 0 0 6px' }} src={userCenterData.headPortraitUrl} />
    </a>
  </Dropdown>
);

UserDropdown.propTypes = {
  show: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  userCenterData: PropTypes.object.isRequired,
};

export default UserDropdown;