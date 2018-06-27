import React from 'react';
import { Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const itemRender = (route, params, routes, paths) => {
  const last = routes.indexOf(route) === routes.length - 1;
  const url = `/${paths[paths.length - 1]}`;
  return <React.Fragment>
    {
      route.icon ? <Icon type={route.icon} /> : ''
    }
    {
      last || !route.isLeaf ?
        <span>{route.breadcrumbName}</span> :
        <Link to={url} >{route.breadcrumbName}</Link>
    }
  </React.Fragment>
}

const TopBreadcrumb = ({ breadcrumb }) => (
  <Breadcrumb
    style={{ display: 'inline-block', marginLeft: 12 }}
    itemRender={itemRender}
    routes={[{ path: 'Home', isLeaf: true, breadcrumbName: '首页' }].concat(breadcrumb.list.filter(v => breadcrumb.key.includes(v.path)))}
  />
);

TopBreadcrumb.propTypes = {
  breadcrumb: PropTypes.object.isRequired,
};

export default TopBreadcrumb;