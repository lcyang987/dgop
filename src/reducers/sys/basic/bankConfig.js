import { combineReducers } from 'redux';
import { BANK_CONFIG } from '@/actions';

const thunkTypes = BANK_CONFIG.thunk;
const actionTypes = BANK_CONFIG.action;

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
        searchData: {
          ...state.searchData,
        },
        loading: false
      }
    case thunkTypes.tableGet.FAILURETYPE:
      return {
        ...state,
        loading: false,
      }
    case thunkTypes.tableStatusToggle.REQUESTTYPE:
      return {
        ...state,
        data: state.data.map(item => item.id === action.params.id ? { ...item, loading: true } : item)
      }
    case thunkTypes.tableStatusToggle.SUCCESSTYPE:
      return {
        ...state,
        data: state.data.map(item => item.loading === true ? { ...item, status: item.status === 'ENABLE' ? 'DISABLE' : 'ENABLE', loading: false } : item)
      }
    case thunkTypes.tableStatusToggle.FAILURETYPE:
      return {
        ...state,
        data: state.data.map(item => ({ ...item, loading: false }))
      }
    case thunkTypes.tableRemove.REQUESTTYPE:
      return {
        ...state,
        loading: true,
      }
    case thunkTypes.tableRemove.SUCCESSTYPE:
      return {
        ...state,
        loading: false,
      }
    case thunkTypes.tableRemove.FAILURETYPE:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
};

const formInitState = {
  data: {},
  visible: false,
  loading: false,
  title: '',
};

const form = (state = formInitState, action) => {
  switch (action.type) {
    case thunkTypes.formGet.REQUESTTYPE:
      return {
        ...state,
        loading: true,
      }
    case thunkTypes.formGet.SUCCESSTYPE:
      const resultStr = {}
      Object.entries(action.response.result).forEach(v => resultStr[v[0]] = '' + v[1])
      return {
        ...state,
        data: resultStr,
        loading: false,
      }
    case thunkTypes.formGet.FAILURETYPE:
      return {
        ...state,
        visible: false,
        loading: false,
      }
    case actionTypes.FORM_SHOW:
      return {
        ...state,
        title: action.value,
        visible: true
      }
    case actionTypes.FORM_HIDE:
      return {
        ...state,
        visible: false
      }
    case actionTypes.FORM_RESET:
      return {
        ...state,
        data: formInitState.data
      }
    case thunkTypes.formSubmit.REQUESTTYPE:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.params,
        },
        loading: true,
      }
    case thunkTypes.formSubmit.SUCCESSTYPE:
      return {
        ...state,
        loading: false,
      }
    case thunkTypes.formSubmit.FAILURETYPE:
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
  form,
});