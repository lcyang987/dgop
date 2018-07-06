import { combineReducers } from 'redux';
import { HANDLE_WITHDRAW } from '@/actions';

const thunkTypes = HANDLE_WITHDRAW.thunk;
const actionTypes = HANDLE_WITHDRAW.action;

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
        data: action.response.result.map(item => {
          const oldDetail = state.data.find(t => t.id === item.id);
          return {
            ...item,
            detail: {
              data: oldDetail ? oldDetail.detail.data : [],
              id: item.id,
              version: item.version,
              loading: false,
            }
          }
        }),
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
    case thunkTypes.tableDetailGet.REQUESTTYPE:
      return {
        ...state,
        data: state.data.map(item => ({
          ...item,
          detail: {
            ...item.detail,
            loading: item.id === action.params.id,
          }
        })),
      }
    case thunkTypes.tableDetailGet.SUCCESSTYPE:
      return {
        ...state,
        data: state.data.map(item => ({
          ...item,
          detail: {
            ...item.detail,
            data: item.id === action.params.id ? action.response.result.map(t => ({
              ...t,
              success: undefined,
              isCompleted: false,
              parentId: action.params.id
            })) : item.detail.data,
            loading: false,
          }
        })),
      }
    case thunkTypes.tableDetailGet.FAILURETYPE:
      return {
        ...state,
        data: state.data.map(item => ({
          ...item,
          detail: {
            ...item.detail,
            loading: false,
          }
        })),
      }
    case actionTypes.TABLE_DETAIL_ROW_SUCCESS:
      return {
        ...state,
        data: state.data.map(item => ({
          ...item,
          detail: {
            ...item.detail,
            data: item.id === action.params.parentId ? item.detail.data.map(t => (t.id === action.params.id ? {
              ...t,
              comment: '',
              success: true,
              isCompleted: true,
            } : t)) : item.detail.data,
          }
        })),
      }
    case actionTypes.TABLE_DETAIL_ROW_FAILURE:
      return {
        ...state,
        data: state.data.map(item => ({
          ...item,
          detail: {
            ...item.detail,
            data: item.id === action.params.parentId ? item.detail.data.map(t => (t.id === action.params.id ? {
              ...t,
              comment: action.params.comment,
              success: false,
              isCompleted: true,
            } : t)) : item.detail.data,
          }
        })),
      }
    case actionTypes.TABLE_DETAIL_ROW_RESET:
      return {
        ...state,
        data: state.data.map(item => ({
          ...item,
          detail: {
            ...item.detail,
            data: item.id === action.params.parentId ? item.detail.data.map(t => (t.id === action.params.id ? {
              ...t,
              comment: '',
              success: undefined,
              isCompleted: false,
            } : t)) : item.detail.data,
          }
        })),
      }
    case thunkTypes.tableCancel.REQUESTTYPE:
      return {
        ...state,
        loading: true,
      }
    case thunkTypes.tableCancel.SUCCESSTYPE:
      return {
        ...state,
        loading: false,
      }
    case thunkTypes.tableCancel.FAILURETYPE:
      return {
        ...state,
        loading: false,
      }
    case thunkTypes.tableHandle.REQUESTTYPE:
      return {
        ...state,
        data: state.data.map(item => ({
          ...item,
          detail: {
            ...item.detail,
            loading: item.id === action.params.id,
          }
        })),
      }
    case thunkTypes.tableHandle.SUCCESSTYPE:
      return {
        ...state,
        data: state.data.map(item => ({
          ...item,
          detail: {
            ...item.detail,
            loading: false,
          }
        })),
      }
    case thunkTypes.tableHandle.FAILURETYPE:
      return {
        ...state,
        data: state.data.map(item => ({
          ...item,
          detail: {
            ...item.detail,
            loading: false,
          }
        })),
      }
    default:
      return state
  }
};

const detailRowFailureFormInitState = {
  data: {},
  visible: false,
  title: '',
};

const detailRowFailureForm = (state = detailRowFailureFormInitState, action) => {
  switch (action.type) {
    case actionTypes.DETAIL_ROW_FAILURE_FORM_SETDATA:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.params,
        },
      }
    case actionTypes.DETAIL_ROW_FAILURE_FORM_SHOW:
      return {
        ...state,
        title: action.value,
        visible: true
      }
    case actionTypes.DETAIL_ROW_FAILURE_FORM_HIDE:
      return {
        ...state,
        visible: false
      }
    case actionTypes.DETAIL_ROW_FAILURE_FORM_RESET:
      return {
        ...state,
        data: detailRowFailureFormInitState.data
      }
    default:
      return state
  }
};

export default combineReducers({
  table,
  detailRowFailureForm,
});