import { LOGIN_API, LOGOUT_API } from '@/middleware/api'

const thunk = {
  login: {
    REQUESTTYPE: 'LOGIN_REQUESTTYPE',
    SUCCESSTYPE: 'LOGIN_SUCCESSTYPE',
    FAILURETYPE: 'LOGIN_FAILURETYPE'
  },
  logout: {
    REQUESTTYPE: 'LOGOUT_REQUESTTYPE',
    SUCCESSTYPE: 'LOGOUT_SUCCESSTYPE',
    FAILURETYPE: 'LOGOUT_FAILURETYPE'
  }
};

const login = params => dispatch => dispatch({
  [LOGIN_API]: {
    types: Object.values(thunk.login),
    url: 'login/doLogin.json',
    params: params
  }
});
const logout = params => dispatch => dispatch({
  [LOGOUT_API]: {
    types: Object.values(thunk.logout),
    url: 'login/logout.json',
    params: params
  }
});

export default {
  thunk, // 以下为接口调用
  login,
  logout,
};
