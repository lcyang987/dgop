import { LOGIN } from '@/actions';

const thunkTypes = LOGIN.thunk;

export default (state = localStorage.getItem('login') === 'true' ? true : false, action) => {
  switch (action.type) {
    case thunkTypes.login.REQUESTTYPE:
      return state
    case thunkTypes.login.SUCCESSTYPE:
      localStorage.setItem('login', action.response.success)
      return action.response.success
    case thunkTypes.login.FAILURETYPE:
      return state
    case thunkTypes.logout.REQUESTTYPE:
      return state
    case thunkTypes.logout.SUCCESSTYPE:
      localStorage.setItem('login', !action.response.success)
      window.location.href = '/';
      break;
      // return !action.response.success
    case thunkTypes.logout.FAILURETYPE:
      return state
    default:
      return state
  }
}