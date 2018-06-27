import { MENU_API } from '@/middleware/api'

const THISACTION = 'MENU_';

const thunk = {
  getList: {
    REQUESTTYPE:THISACTION + 'GETLIST_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'GETLIST_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'GETLIST_FAILURETYPE',
    TABS_LISTTYPE: 'TABS_LISTTYPE',
    BREADCRUMB_LISTTYPE: 'BREADCRUMB_LISTTYPE',
  }
};

const action = {
  KEY: THISACTION + 'KEY',
  COLLAPSED: THISACTION + 'COLLAPSED'
};

const getList = () => dispatch => dispatch({
  [MENU_API]: {
    types: Object.values(thunk.getList),
    url: 'menu/loadUserMenuTree.json'
  }
});

const setKey = path => dispatch => dispatch({
  type: action.KEY,
  value: path
});

const setCollapsed = bool => dispatch => dispatch({
  type: action.COLLAPSED,
  value: bool
});

export default {
  thunk, // 以下为接口调用
  getList,
  action, // 以下为修改数据
  setKey,
  setCollapsed,
};