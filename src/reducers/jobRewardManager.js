import { combineReducers } from 'redux';
import { JOBREWARD_MANAGER } from '@/actions';

const thunkTypes = JOBREWARD_MANAGER.thunk;

const tableInitState = {
  data: [],
  loading: false,
  count: 0,
  searchData: {
    currentPage: 1,
    pageSize: 10,
  },
};

const table = (state = tableInitState, action) => {
  switch (action.type) {
    case thunkTypes.tableGet.REQUESTTYPE:
      return {
        ...state,
        searchData: {
          ...state.searchData,
          ...action.params,
        },
        loading: true,
      }
    case thunkTypes.tableGet.SUCCESSTYPE:
      return {
        ...state,
        data: action.response.result,
        count: action.response.count,
        loading: false
      }
    case thunkTypes.tableGet.FAILURETYPE:
      return {
        ...state,
        loading: false,
      }
    case thunkTypes.tableFrozen.REQUESTTYPE:
      return {
        ...state,
        loading: true,
      }
    case thunkTypes.tableFrozen.SUCCESSTYPE:
      return {
        ...state,
        loading: false,
      }
    case thunkTypes.tableFrozen.FAILURETYPE:
      return {
        ...state,
        loading: false,
      }
    case thunkTypes.tableUnfrozen.REQUESTTYPE:
      return {
        ...state,
        loading: true,
      }
    case thunkTypes.tableUnfrozen.SUCCESSTYPE:
      return {
        ...state,
        loading: false,
      }
    case thunkTypes.tableUnfrozen.FAILURETYPE:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
};


export default combineReducers({
  table,
});