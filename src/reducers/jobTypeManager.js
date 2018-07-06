import { combineReducers } from 'redux';
import { JOBTYPE_MANAGER } from '@/actions';

const thunkTypes = JOBTYPE_MANAGER.thunk;
const actionTypes = JOBTYPE_MANAGER.action;

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

const machineTableInitState = {
  data: [],
  visible: false,
  loading: false,
}

const machineTable = (state = machineTableInitState, action) => {
  switch (action.type) {
    case thunkTypes.machineTableGet.REQUESTTYPE:
      return {
        ...state,
        loading: true,
      }
    case thunkTypes.machineTableGet.SUCCESSTYPE:
      return {
        ...state,
        data: action.response.result.map(item => ({ ...item, loading: false })),
        loading: false,
      }
    case thunkTypes.machineTableGet.FAILURETYPE:
      return {
        ...state,
        loading: false,
      }
    case actionTypes.MACHINETABLE_RESET:
      return {
        ...state,
        data: machineTableInitState.data,
      }
    case actionTypes.MACHINETABLE_SHOW:
      return {
        ...state,
        visible: true,
      }
    case actionTypes.MACHINETABLE_HIDE:
      return {
        ...state,
        visible: false,
      }
    default:
      return state
  }
}

const machineFormInitState = {
  data: {},
  visible: false,
  loading: false,
  title: '',
  machine: {
    data: [],
    loading: false,
    component: {
      data: [{ name: '无组件', id: 0 }],
      loading: false,
    }
  },
}

const machineForm = (state = machineFormInitState, action) => {
  switch (action.type) {
    case actionTypes.MACHINEFORM_SETDATA:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.params,
        },
      }
    case actionTypes.MACHINEFORM_RESET:
      return {
        ...state,
        data: formInitState.data,
      }
    case actionTypes.MACHINEFORM_SHOW:
      return {
        ...state,
        title: action.value,
        visible: true,
      }
    case actionTypes.MACHINEFORM_HIDE:
      return {
        ...state,
        visible: false,
      }
    case thunkTypes.machineFormMachineListGet.REQUESTTYPE:
      return {
        ...state,
        machine: {
          ...state.machine,
          loading: true,
        }
      }
    case thunkTypes.machineFormMachineListGet.SUCCESSTYPE:
      return {
        ...state,
        machine: {
          data: action.response.result,
          loading: false,
          component: {
            data: [],
            loading: false,
          }
        }
      }
    case thunkTypes.machineFormMachineListGet.FAILURETYPE:
      return {
        ...state,
        machine: {
          ...state.machine,
          loading: false,
        }
      }
    case thunkTypes.machineFormMachineComponentListGet.REQUESTTYPE:
      return {
        ...state,
        machine: {
          ...state.machine,
          component: {
            ...state.machine.component,
            loading: true,
          }
        }
      }
    case thunkTypes.machineFormMachineComponentListGet.SUCCESSTYPE:
      return {
        ...state,
        machine: {
          ...state.machine,
          component: {
            data: [{ name: '无组件', id: 0 }].concat(action.response.result),
            loading: false,
          }
        }
      }
    case thunkTypes.machineFormMachineComponentListGet.FAILURETYPE:
      return {
        ...state,
        machine: {
          ...state.machine,
          component: {
            ...state.machine.component,
            loading: false,
          }
        }
      }
    case thunkTypes.machineFormSubmit.REQUESTTYPE:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.params,
        },
        loading: true,
      }
    case thunkTypes.machineFormSubmit.SUCCESSTYPE:
      return {
        ...state,
        loading: false,
      }
    case thunkTypes.machineFormSubmit.FAILURETYPE:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}

const jobPoundageTableInitState = {
  data: [],
  visible: false,
  loading: false,
  editAble: false,
  max: 99999999,
  searchData: {},
}

const jobPoundageTable = (state = jobPoundageTableInitState, action) => {
  switch (action.type) {
    case thunkTypes.jobPoundageTableGet.REQUESTTYPE:
      return {
        ...state,
        searchData: {
          ...state.searchData,
          ...action.params,
        },
        loading: true,
      }
    case thunkTypes.jobPoundageTableGet.SUCCESSTYPE:
      return {
        ...state,
        data: action.response.result,
        searchData: {
          ...state.searchData,
        },
        loading: false,
      }
    case thunkTypes.jobPoundageTableGet.FAILURETYPE:
      return {
        ...state,
        loading: false,
      }
    case actionTypes.JOBPOUNDAGETABLE_RESET:
      return {
        ...state,
        data: jobPoundageTableInitState.data,
      }
    case actionTypes.JOBPOUNDAGETABLE_SETDATA:
      return {
        ...state,
        data: action.params,
      }
    case actionTypes.JOBPOUNDAGETABLE_SHOW:
      return {
        ...state,
        visible: true,
      }
    case actionTypes.JOBPOUNDAGETABLE_HIDE:
      return {
        ...state,
        visible: false,
      }
    case actionTypes.JOBPOUNDAGETABLE_ENABLEEDIT:
      return {
        ...state,
        editAble: true,
      }
    case actionTypes.JOBPOUNDAGETABLE_DISABLEEDIT:
      return {
        ...state,
        editAble: false,
      }
    case thunkTypes.jobPoundageTableEditSubmit.REQUESTTYPE:
      return {
        ...state,
        loading: true,
      }
    case thunkTypes.jobPoundageTableEditSubmit.SUCCESSTYPE:
      return {
        ...state,
        loading: false,
      }
    case thunkTypes.jobPoundageTableEditSubmit.FAILURETYPE:
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
  machineTable,
  machineForm,
  jobPoundageTable,
});