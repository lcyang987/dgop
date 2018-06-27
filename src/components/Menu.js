import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'antd';
const { SubMenu: Parent, Item: Leaf } = Menu;

class ComponentsMenu extends Component {
  static propTypes = {
    menu: PropTypes.object.isRequired,
    setMenuKey: PropTypes.func.isRequired,
  }
  toLink(url) {
    this.props.setMenuKey(url);
    if (this.props.location.pathname !== url) {
      this.props.history.push(url);
    }
  }
  createTreeNode(menu) {
    return (
      menu.icon ?
        <React.Fragment><Icon type={menu.icon} /><span>{menu.name}</span></React.Fragment> :
        <span>{menu.name}</span>
    )
  }
  renderTree(data) {
    return data.map((menu) => {
      if (!menu.isLeaf) {
        return (
          <Parent
            key={menu.url}
            title={this.createTreeNode(menu)}
            onTitleClick={this.props.setMenuKey.bind(this, menu.url)}>
            {
              this.renderTree(menu.children)
            }
          </Parent>
        )
      } else {
        return (
          <Leaf key={menu.url} onClick={this.toLink.bind(this, menu.url)}>
            {
              this.createTreeNode(menu)
            }
          </Leaf>
        )
      }
    })
  }
  render() {
    const extraAttr = {};
    this.props.menu.collapsed ?
      extraAttr.defaultOpenKeys = !this.props.menu.length ? [] : this.props.menu.key :
      extraAttr.openKeys = this.props.menu.key
    return (
      <React.Fragment>
        {
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[this.props.menu.key[0]]}
            {...extraAttr}
          >
            {
              this.renderTree(this.props.menu.list)
            }
          </Menu>
        }
      </React.Fragment>
    )
  }
};

export default ComponentsMenu;