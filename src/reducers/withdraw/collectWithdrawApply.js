import { combineReducers } from 'redux';
import { COLLECT_WITHDRAW_APPLY } from '@/actions';

const thunkTypes = COLLECT_WITHDRAW_APPLY.thunk;
const actionTypes = COLLECT_WITHDRAW_APPLY.action;

const tableInitState = {
  data: [],
  loading: false,
  count: 0,
  searchData: {
    currentPage: 1,
    pageSize: 10,
  },
  batchApply: [],
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
        searchData: {
          ...state.searchData,
        },
        loading: false,
      }
    case thunkTypes.tableGet.FAILURETYPE:
      return {
        ...state,
        loading: false,
      }
    case thunkTypes.tableApply.REQUESTTYPE:
      return {
        ...state,
        loading: true,
      }
    case thunkTypes.tableApply.SUCCESSTYPE:
      return {
        ...state,
        loading: false,
        batchApply: state.batchApply.filter(id => !JSON.parse(action.params.ids).includes(id)),
      }
    case thunkTypes.tableApply.FAILURETYPE:
      return {
        ...state,
        loading: false,
      }
    case actionTypes.TABLE_SETBATCHAPPLY:
      return {
        ...state,
        batchApply: action.ids,
      }
    default:
      return state
  }
};

export default combineReducers({
  table,
});