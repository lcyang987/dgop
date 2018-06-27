import { USERCENTER } from '@/actions';

const thunkTypes = USERCENTER.thunk;
const actionTypes = USERCENTER.action;

const userCenterInitState = {
  data: {},
  visible: false,
  loading: false,
}

export default (state = userCenterInitState, action) => {
  switch (action.type) {
    case thunkTypes.userCenterGet.REQUESTTYPE:
      return {
        ...state,
        loading: true,
      }
    case thunkTypes.userCenterGet.SUCCESSTYPE:
      return {
        ...state,
        data: action.response.result,
        loading: false,
      }
    case thunkTypes.userCenterGet.FAILURETYPE:
      return {
        ...state,
        visible: false,
        loading: false,
      }
    case actionTypes.SHOW:
      return {
        ...state,
        visible: true
      }
    case actionTypes.HIDE:
      return {
        ...state,
        visible: false
      }
    default:
      return state
  }
}