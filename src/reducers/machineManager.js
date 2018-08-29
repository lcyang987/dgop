import { combineReducers } from 'redux';
import { MACHINE_MANAGER } from '@/actions';

const thunkTypes = MACHINE_MANAGER.thunk;
const actionTypes = MACHINE_MANAGER.action;

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

const brandTableInitState = {
  data: [],
  visible: false,
  loading: false,
  searchData: {},
}

const brandTable = (state = brandTableInitState, action) => {
  switch (action.type) {
    case thunkTypes.brandTableGet.REQUESTTYPE:
      return {
        ...state,
        searchData: {
          ...state.searchData,
          ...action.params,
        },
        loading: true,
      }
    case thunkTypes.brandTableGet.SUCCESSTYPE:
      return {
        ...state,
        data: action.response.result.map(item => ({ ...item, loading: false })),
        loading: false,
      }
    case thunkTypes.brandTableGet.FAILURETYPE:
      return {
        ...state,
        loading: false,
      }
    case thunkTypes.brandTableStatusToggle.REQUESTTYPE:
      return {
        ...state,
        data: state.data.map(item => item.id === action.params.id ? { ...item, loading: true } : item)
      }
    case thunkTypes.brandTableStatusToggle.SUCCESSTYPE:
      return {
        ...state,
        data: state.data.map(item => item.loading === true ? { ...item, status: item.status === 'ENABLE' ? 'DISABLE' : 'ENABLE', loading: false } : item)
      }
    case thunkTypes.brandTableStatusToggle.FAILURETYPE:
      return {
        ...state,
        data: state.data.map(item => ({ ...item, loading: false }))
      }
    case actionTypes.BRANDTABLE_RESET:
      return {
        ...state,
        data: brandTableInitState.data,
      }
    case actionTypes.BRANDTABLE_SHOW:
      return {
        ...state,
        visible: true,
      }
    case actionTypes.BRANDTABLE_HIDE:
      return {
        ...state,
        visible: false,
      }
    default:
      return state
  }
}

const brandFormInitState = {
  data: {},
  visible: false,
  loading: false,
  title: '',
}

const brandForm = (state = brandFormInitState, action) => {
  switch (action.type) {
    case actionTypes.BRANDFORM_SETDATA:
      return {
        ...state,
        data: action.params,
      }
    case actionTypes.BRANDFORM_RESET:
      return {
        ...state,
        data: brandFormInitState.data,
      }
    case actionTypes.BRANDFORM_SHOW:
      return {
        ...state,
        title: action.value,
        visible: true,
      }
    case actionTypes.BRANDFORM_HIDE:
      return {
        ...state,
        visible: false,
      }
    case thunkTypes.brandFormSubmit.REQUESTTYPE:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.params,
        },
        loading: true,
      }
    case thunkTypes.brandFormSubmit.SUCCESSTYPE:
      return {
        ...state,
        loading: false,
      }
    case thunkTypes.brandFormSubmit.FAILURETYPE:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}

const componentTableInitState = {
  data: [],
  visible: false,
  loading: false,
  searchData: {},
}

const componentTable = (state = componentTableInitState, action) => {
  switch (action.type) {
    case thunkTypes.componentTableGet.REQUESTTYPE:
      return {
        ...state,
        searchData: {
          ...state.searchData,
          ...action.params,
        },
        loading: true,
      }
    case thunkTypes.componentTableGet.SUCCESSTYPE:
      return {
        ...state,
        data: action.response.result.map(item => ({ ...item, loading: false })),
        loading: false,
      }
    case thunkTypes.componentTableGet.FAILURETYPE:
      return {
        ...state,
        loading: false,
      }
    case actionTypes.COMPONENTTABLE_RESET:
      return {
        ...state,
        data: componentTableInitState.data,
      }
    case actionTypes.COMPONENTTABLE_SHOW:
      return {
        ...state,
        visible: true,
      }
    case actionTypes.COMPONENTTABLE_HIDE:
      return {
        ...state,
        visible: false,
      }
    default:
      return state
  }
}

const componentFormInitState = {
  data: {},
  visible: false,
  loading: false,
  title: '',
}

const componentForm = (state = componentFormInitState, action) => {
  switch (action.type) {
    case actionTypes.COMPONENTFORM_SETDATA:
      return {
        ...state,
        data: action.params,
      }
    case actionTypes.COMPONENTFORM_RESET:
      return {
        ...state,
        data: componentFormInitState.data,
      }
    case actionTypes.COMPONENTFORM_SHOW:
      return {
        ...state,
        title: action.value,
        visible: true,
      }
    case actionTypes.COMPONENTFORM_HIDE:
      return {
        ...state,
        visible: false,
      }
    case thunkTypes.componentFormSubmit.REQUESTTYPE:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.params,
        },
        loading: true,
      }
    case thunkTypes.componentFormSubmit.SUCCESSTYPE:
      return {
        ...state,
        loading: false,
      }
    case thunkTypes.componentFormSubmit.FAILURETYPE:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}

const modelTableInitState = {
  data: [],
  visible: false,
  loading: false,
  searchData: {},
}

const modelTable = (state = modelTableInitState, action) => {
  switch (action.type) {
    case thunkTypes.modelTableGet.REQUESTTYPE:
      return {
        ...state,
        searchData: {
          ...state.searchData,
          ...action.params,
        },
        loading: true,
      }
    case thunkTypes.modelTableGet.SUCCESSTYPE:
      return {
        ...state,
        data: action.response.result.map(item => ({ ...item, loading: false })),
        loading: false,
      }
    case thunkTypes.modelTableGet.FAILURETYPE:
      return {
        ...state,
        loading: false,
      }
    case actionTypes.MODELTABLE_RESET:
      return {
        ...state,
        data: modelTableInitState.data,
      }
    case actionTypes.MODELTABLE_SHOW:
      return {
        ...state,
        visible: true,
      }
    case actionTypes.MODELTABLE_HIDE:
      return {
        ...state,
        visible: false,
      }
    default:
      return state
  }
}

const modelFormInitState = {
  data: {},
  visible: false,
  loading: false,
  title: '',
}

const modelForm = (state = modelFormInitState, action) => {
  switch (action.type) {
    case actionTypes.MODELFORM_SETDATA:
      return {
        ...state,
        data: action.params,
      }
    case actionTypes.MODELFORM_RESET:
      return {
        ...state,
        data: modelFormInitState.data,
      }
    case actionTypes.MODELFORM_SHOW:
      return {
        ...state,
        title: action.value,
        visible: true,
      }
    case actionTypes.MODELFORM_HIDE:
      return {
        ...state,
        visible: false,
      }
    case thunkTypes.modelFormSubmit.REQUESTTYPE:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.params,
        },
        loading: true,
      }
    case thunkTypes.modelFormSubmit.SUCCESSTYPE:
      return {
        ...state,
        loading: false,
      }
    case thunkTypes.modelFormSubmit.FAILURETYPE:
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
  form,
  brandTable,
  brandForm,
  componentTable,
  componentForm,
  modelTable,
  modelForm,
});