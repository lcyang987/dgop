import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import Logo from '@/components/Logo';
import Menu from '@/containers/Menu';
import Head from '@/containers/Head';
import Tabs from '@/containers/Tabs';

const { Header, Content, Sider } = Layout;

const ComponentsApp = ({ collapsed }) => (
  <Layout>
    <Sider trigger={null} collapsible collapsed={collapsed} style={{ width: 180, height: '100vh', overflow: 'auto' }}>
      <Logo />
      <Route component={Menu} />
    </Sider>
    <Layout>
      <Header style={{ height: 44, lineHeight: '20px', padding: 12, background: 'white', boxShadow: '0 1px 4px gray' }}>
        <Route component={Head} />
      </Header>
      <Content style={{ margin: '11px 12px 0' }}>
        <Route component={Tabs} />
      </Content>
    </Layout>
  </Layout>
);

ComponentsApp.propTypes = {
  collapsed: PropTypes.bool.isRequired,
};

export default ComponentsApp;