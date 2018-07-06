import React, { Component } from 'react';
import { Tabs, Icon, Menu, Dropdown, Button } from 'antd';
import PropTypes from 'prop-types';
import '@/style/tablexscroll.css';
import Home from '@/components/Home';
import MenuManager from '@/components/sys/menuManager';
import RoleManager from '@/components/sys/roleManager';
import UserManager from '@/components/sys/userManager';
import BankConfig from '@/components/sys/basic/bankConfig';
import DictManager from '@/containers/sys/basic/dictManager';
import AuditMember from '@/containers/audit/auditMember';
import AuditMachine from '@/containers/audit/auditMachine';
import AuditJobDemand from '@/containers/audit/auditJobDemand';
import CropManager from '@/components/cropManager';
import MachineManager from '@/containers/machineManager';
import JobTypeManager from '@/containers/jobTypeManager';
import AcceptWithdrawApply from '@/components/withdraw/acceptWithdrawApply';
import CollectWithdrawApply from '@/components/withdraw/collectWithdrawApply';
import HandleWithdraw from '@/components/withdraw/handleWithdraw';
import JobDemandManager from '@/containers/jobDemandManager';

class ComponentsTabs extends Component {
  static components = {
    Home,
    MenuManager,
    RoleManager,
    UserManager,
    BankConfig,
    DictManager,
    CropManager,
    AuditMember,
    AuditMachine,
    AuditJobDemand,
    MachineManager,
    JobTypeManager,
    AcceptWithdrawApply,
    CollectWithdrawApply,
    HandleWithdraw,
    JobDemandManager,
  }
  static propTypes = {
    tabs: PropTypes.array.isRequired,
    addTabsList: PropTypes.func.isRequired,
    removeTabsList: PropTypes.func.isRequired,
    reserveTabsList: PropTypes.func.isRequired,
    clearTabsList: PropTypes.func.isRequired,
    setMenuKey: PropTypes.func.isRequired,
  }
  onEdit(path, action) {
    if (this.props.history.location.pathname === path && action === 'remove') {
      const next = this.props.tabs[this.props.tabs.findIndex(item => item.path === path) + 1] || this.props.tabs[this.props.tabs.findIndex(item => item.path === path) - 1];
      this.props.history.push(next ? next.path : '/Home');
    }
    this.props.removeTabsList(path);
  }
  onChange(path) {
    this.props.history.push(path);
  }
  dropDown() {
    return (
      <Dropdown overlay={this.menu()} trigger={['click']}>
        <Button>
          操作<Icon type="down" />
        </Button>
      </Dropdown>
    );
  }
  closeAll() {
    if (this.props.history.location.pathname !== '/Home') {
      this.props.history.push('/Home');
    }
    this.props.clearTabsList();
  }
  closeOther() {
    this.props.reserveTabsList(this.props.tabs.find(item => item.path === this.props.history.location.pathname));
    this.props.setMenuKey(this.props.history.location.pathname);
  }
  menu() {
    return (
      <Menu>
        <Menu.Item onClick={this.closeAll.bind(this)}>关闭所有</Menu.Item>
        <Menu.Divider />
        <Menu.Item onClick={this.closeOther.bind(this)}>关闭其他</Menu.Item>
      </Menu>
    );
  }
  tab(item) {
    return (
      item.icon ?
        <span><Icon type={item.icon} /><span>{item.breadcrumbName}</span></span> :
        <span>{item.breadcrumbName}</span>
    )
  }
  tabPane() {
    return (
      [{ path: '/Home', isLeaf: true, breadcrumbName: '首页', closable: false }].concat(this.props.tabs).filter(v => v.isLeaf).map(item => (
        <Tabs.TabPane
          key={item.path}
          tab={this.tab(item)}
          closable={item.closable}
          style={{ height: 'calc( 100vh - 96px )', overflow: 'auto' }}
        >
          {
            this.customComponent(item.path)
          }
        </Tabs.TabPane>
      ))
    )
  }
  customComponent(path) {
    const name = path.split('/')[path.split('/').length - 1];
    const SpecificComponent = ComponentsTabs.components[name];
    return SpecificComponent ?
      <SpecificComponent /> :
      <h3>404</h3>
  }
  render() {
    return (
      <Tabs
        hideAdd
        type="editable-card"
        style={{ background: 'white' }}
        onEdit={this.onEdit.bind(this)}
        onChange={this.onChange.bind(this)}
        activeKey={this.props.history.location.pathname}
        tabBarStyle={{ marginBottom: 0, background: '#f0f2f5' }}
        tabBarExtraContent={this.props.tabs.length ? this.dropDown() : ''}
      >
        {
          this.tabPane()
        }
      </Tabs>
    );
  }
};

export default ComponentsTabs;