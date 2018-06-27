
import { MENU } from '@/actions';
import { TABS } from '@/actions';

const thunkTypes = MENU.thunk;
const actionTypes = TABS.action;

export default (state = [], action) => {
  switch (action.type) {
    case thunkTypes.getList.TABS_LISTTYPE:
      const cache = localStorage.getItem('cacheTabs') ? JSON.parse(localStorage.getItem('cacheTabs')) : []
      const result = []
      cache.forEach(path => {
        result.push(action.response.result.find(item => item.path === path))
      })
      return result.filter(v => v);
    case actionTypes.ADD:
      const addResult = [
        ...state,
        action.value
      ]
      localStorage.setItem('cacheTabs', JSON.stringify(addResult.map(item => item.path)))
      return addResult
    case actionTypes.REMOVE:
      const removeResult = [
        ...state.filter(item => item.path !== action.value)
      ]
      localStorage.setItem('cacheTabs', JSON.stringify(removeResult.map(item => item.path)))
      return removeResult
    case actionTypes.RESERVE:
      const reserveResult = [action.value]
      localStorage.setItem('cacheTabs', JSON.stringify(reserveResult.map(item => item.path)))
      return reserveResult
    case actionTypes.CLEAR:
      const clearResult = action.value
      localStorage.setItem('cacheTabs', [])
      return clearResult
    default:
      return state
  }
}