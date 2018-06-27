import { combineReducers } from 'redux';
import { USER_MANAGER } from '@/actions';
import { base64 } from '@/util';

const thunkTypes = USER_MANAGER.thunk;
const actionTypes = USER_MANAGER.action;

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
        data: state.data.map(item => item.loading === true ? { ...item, status: item.status === 'y' ? 'n' : 'y', loading: false } : item)
      }
    case thunkTypes.tableStatusToggle.FAILURETYPE:
      return {
        ...state,
        data: state.data.map(item => ({ ...item, loading: false }))
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
      delete action.response.result.password;
      return {
        ...state,
        data: action.response.result,
        loading: false,
      }
    case thunkTypes.formGet.FAILURETYPE:
      return {
        ...state,
        visible: false,
        loading: false,
      }
    case thunkTypes.formPicUpload.REQUESTTYPE:
      return {
        ...state,
        loading: true,
      }
    case thunkTypes.formPicUpload.SUCCESSTYPE:
      delete action.response.result.password;
      return {
        ...state,
        data: {
          ...state.data,
          headPortrait: action.response.result,
        },
        loading: false,
      }
    case thunkTypes.formPicUpload.FAILURETYPE:
      return {
        ...state,
        loading: false,
      }
    case actionTypes.FORM_SETDATA:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.params,
        },
      }
    case actionTypes.FORM_RESET:
      return {
        ...state,
        data: formInitState.data
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
    case thunkTypes.formSubmit.REQUESTTYPE:
      if (action.params.password) {
        action.params.password = action.params.confirmPassword = base64.encode(action.params.password)
      }
      action.params.headPortrait = state.data.headPortrait;
      delete action.params.upload;
      return {
        ...state,
        data: action.params,
        loading: true,
      }
    case thunkTypes.formSubmit.SUCCESSTYPE:
      return {
        ...state,
        loading: false,
      }
    case thunkTypes.formSubmit.FAILURETYPE:
      let password = {}
      if (state.data.password) {
        password = {
          password: base64.decode(state.data.password),
          confirmPassword: base64.decode(state.data.password),
        }
      }
      return {
        ...state,
        data: {
          ...state.data,
          ...password,
        },
        loading: false,
      }
    default:
      return state
  }
};

const passwordFormInitState = {
  data: {},
  visible: false,
  loading: false,
  title: '',
};

const passwordForm = (state = passwordFormInitState, action) => {
  switch (action.type) {
    case actionTypes.PASSWORDFORM_SETDATA:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.params,
        },
      }
    case actionTypes.PASSWORDFORM_SHOW:
      return {
        ...state,
        title: action.value,
        visible: true
      }
    case actionTypes.PASSWORDFORM_HIDE:
      return {
        ...state,
        visible: false
      }
    case actionTypes.PASSWORDFORM_RESET:
      return {
        ...state,
        data: formInitState.data
      }
    case thunkTypes.passwordFormSubmit.REQUESTTYPE:
      action.params.password = action.params.confirmPassword = base64.encode(action.params.password)
      return {
        ...state,
        data: {
          ...state.data,
          ...action.params,
        },
        loading: true,
      }
    case thunkTypes.passwordFormSubmit.SUCCESSTYPE:
      return {
        ...state,
        loading: false,
      }
    case thunkTypes.passwordFormSubmit.FAILURETYPE:
      return {
        ...state,
        data: {
          ...state.data,
          password: base64.decode(state.data.password),
          confirmPassword: base64.decode(state.data.password),
        },
        loading: false,
      }
    default:
      return state
  }
};

export default combineReducers({
  table,
  form,
  passwordForm,
});