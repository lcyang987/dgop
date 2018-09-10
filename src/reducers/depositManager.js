import { combineReducers } from 'redux';
import { DEPOSIT_MANAGER } from '@/actions';

const thunkTypes = DEPOSIT_MANAGER.thunk;
const actionTypes = DEPOSIT_MANAGER.action;

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
        data: action.response.result.map(item => ({ ...item, id: item.memberId })),
        count: action.response.count,
        loading: false
      }
    case thunkTypes.tableGet.FAILURETYPE:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
};

const detailTableInitState = {
  data: [],
  visible: false,
  loading: false,
  count: 0,
  searchData: {
    currentPage: 1,
    pageSize: 10,
  },
};

const detailTable = (state = detailTableInitState, action) => {
  switch (action.type) {
    case thunkTypes.detailTableGet.REQUESTTYPE:
      return {
        ...state,
        searchData: {
          ...state.searchData,
          ...action.params,
        },
        loading: true,
      }
    case thunkTypes.detailTableGet.SUCCESSTYPE:
      return {
        ...state,
        data: action.response.result,
        count: action.response.count,
        loading: false
      }
    case thunkTypes.detailTableGet.FAILURETYPE:
      return {
        ...state,
        loading: false,
      }
    case actionTypes.DETAIL_TABLE_SHOW:
      return {
        ...state,
        visible: true
      }
    case actionTypes.DETAIL_TABLE_HIDE:
      return {
        ...state,
        visible: false
      }
    default:
      return state
  }
};

const flowTableInitState = {
  data: [],
  visible: false,
  loading: false,
  count: 0,
  searchData: {
    currentPage: 1,
    pageSize: 10,
  },
};

const flowTable = (state = flowTableInitState, action) => {
  switch (action.type) {
    case thunkTypes.flowTableGet.REQUESTTYPE:
      return {
        ...state,
        searchData: {
          ...state.searchData,
          ...action.params,
        },
        loading: true,
      }
    case thunkTypes.flowTableGet.SUCCESSTYPE:
      return {
        ...state,
        data: action.response.result,
        count: action.response.count,
        loading: false
      }
    case thunkTypes.flowTableGet.FAILURETYPE:
      return {
        ...state,
        loading: false,
      }
    case actionTypes.FLOW_TABLE_SHOW:
      return {
        ...state,
        visible: true
      }
    case actionTypes.FLOW_TABLE_HIDE:
      return {
        ...state,
        visible: false
      }
    default:
      return state
  }
};

const refundFormInitState = {
  data: {},
  visible: false,
  loading: false,
  title: '',
}

const refundForm = (state = refundFormInitState, action) => {
  switch (action.type) {
    case actionTypes.REFUNDFORM_SETDATA:
      return {
        ...state,
        data: action.params,
      }
    case actionTypes.REFUNDFORM_RESET:
      return {
        ...state,
        data: refundFormInitState.data,
      }
    case actionTypes.REFUNDFORM_SHOW:
      return {
        ...state,
        title: action.value,
        visible: true,
      }
    case actionTypes.REFUNDFORM_HIDE:
      return {
        ...state,
        visible: false,
      }
    case thunkTypes.refundFormSubmit.REQUESTTYPE:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.params,
        },
        loading: true,
      }
    case thunkTypes.refundFormSubmit.SUCCESSTYPE:
      return {
        ...state,
        loading: false,
      }
    case thunkTypes.refundFormSubmit.FAILURETYPE:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}

export default combineReducers({
  table,
  detailTable,
  flowTable,
  refundForm,
});