import { combineReducers } from 'redux';
import { filterAllKey } from '@/util';
import { MENU, BREADCRUMB } from '@/actions';

const thunkTypes = MENU.thunk;
const actionTypes = BREADCRUMB.action;

const list = (state = [], action) => {
  switch (action.type) {
    case thunkTypes.getList.BREADCRUMB_LISTTYPE:
      return action.response.result
    default:
      return state
  }
}

const key = (state = filterAllKey(window.location.pathname), action) => {
  switch (action.type) {
    case actionTypes.KEY:
      return filterAllKey(action.value)
    default:
      return state
  }
}

export default combineReducers({
  list,
  key,
})