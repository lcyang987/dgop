import * as APIS from '@/middleware/api';

const THISACTION = 'USERCENTER_';

const thunk = {
  userCenterGet: {
    REQUESTTYPE: THISACTION + 'GET_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'GET_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'GET_FAILURETYPE',
  },
};

const userCenterGet = () => dispatch => dispatch({
  [APIS.USERCENTER_GET_API]: {
    types: Object.values(thunk.userCenterGet),
    url: 'user/currentUserInfo.json',
  }
});

const action = {
  SHOW: THISACTION + 'SHOW',
  HIDE: THISACTION + 'HIDE',
};

const show = () => dispatch => dispatch({
  type: action.SHOW
});

const hide = () => dispatch => dispatch({
  type: action.HIDE
});

export default {
  thunk, // 以下为接口调用
  userCenterGet,
  action, // 以下为修改数据
  show,
  hide,
};