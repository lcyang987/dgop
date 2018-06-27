import { combineReducers } from 'redux';
import { AUDIT_MACHINE } from '@/actions';

const thunkTypes = AUDIT_MACHINE.thunk;
const actionTypes = AUDIT_MACHINE.action;

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
    case thunkTypes.tableSuccess.REQUESTTYPE:
      return {
        ...state,
        loading: true,
      }
    case thunkTypes.tableSuccess.SUCCESSTYPE:
      return {
        ...state,
        loading: false,
      }
    case thunkTypes.tableSuccess.FAILURETYPE:
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
    case actionTypes.FORM_SETDATA:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.params,
        },
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
    case thunkTypes.formFailure.REQUESTTYPE:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.params,
        },
        loading: true,
      }
    case thunkTypes.formFailure.SUCCESSTYPE:
      return {
        ...state,
        loading: false,
      }
    case thunkTypes.formFailure.FAILURETYPE:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
};

const carouselInitState = {
  data: [],
  visible: false,
  title: '',
};

const carousel = (state = carouselInitState, action) => {
  switch (action.type) {
    case actionTypes.CAROUSEL_RESET:
      return {
        ...state,
        data: formInitState.data
      }
    case actionTypes.CAROUSEL_SETDATA:
      return {
        ...state,
        data: action.params,
      }
    case actionTypes.CAROUSEL_SHOW:
      return {
        ...state,
        title: action.value,
        visible: true
      }
    case actionTypes.CAROUSEL_HIDE:
      return {
        ...state,
        visible: false
      }
    default:
      return state
  }
};

export default combineReducers({
  table,
  form,
  carousel,
});