import { combineReducers } from 'redux';
import { DICT_MANAGER } from '@/actions';

const thunkTypes = DICT_MANAGER.thunk;
const actionTypes = DICT_MANAGER.action;

const tableInitState = {
  data: [],
  loading: false,
}

const table = (state = tableInitState, action) => {
  switch (action.type) {
    case thunkTypes.tableGet.REQUESTTYPE:
      return {
        ...state,
        loading: true,
      }
    case thunkTypes.tableGet.SUCCESSTYPE:
      function arrToTree(tree, data, parent) {
        for (var i = 0; i < data.length; i++) {
          if (data[i].pid === parent) {
            data[i].children = []
            var json = Object.assign({}, data[i])
            tree.push(json)
            data.splice(i, 1)
            i--
            arrToTree(json.children, data, json.id)
          }
        }
      }
      const newTree = []
      const result = action.response.result.map(item => ({ ...item }))
      arrToTree(newTree, result, 0, '')

      const recursion = tree => {
        tree.forEach((item, i, arr) => {
          arr[i] = {
            ...item,
            isLeaf: !item.children.length ? true : false,
          }
          if (item.children.length) {
            recursion(item.children);
          } else {
            delete arr[i].children;
          }
        })
      }

      recursion(newTree);

      return {
        ...state,
        data: newTree,
        loading: false,
      }
    case thunkTypes.tableGet.FAILURETYPE:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}

const formInitState = {
  data: {},
  visible: false,
  loading: false,
  menuTree: [],
  title: '',
}

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
    case actionTypes.FORM_MENUTREE:
      // debugger
      const menuTree = [];
      const recursion = (t, newTree) => {
        t.forEach((item, i) => {
          newTree.push({
            title: item.typeName,
            value: '' + item.id,
            key: item.id,
            isLeaf: item.isLeaf === 'y' ? true : false,
            disabled: item.isLeaf === 'y' || item.id === action.opt.formId ? true : false,
          });
          if (item.children && item.id !== action.opt.formId) {
            newTree[i].children = [];
            recursion(item.children, newTree[i].children);
          }
        })
      }
      recursion([...action.opt.originTree], menuTree);
      // debugger
      return {
        ...state,
        menuTree: [{
          title: '根目录',
          value: '0',
          key: 0,
          isLeaf: false,
          disabled: false,
          children: menuTree,
        }],
      }
    case actionTypes.FORM_RESET:
      return {
        ...state,
        data: formInitState.data,
      }
    case actionTypes.FORM_SETDATA:
      return {
        ...state,
        data: action.params,
      }
    case actionTypes.FORM_SHOW:
      return {
        ...state,
        title: action.value,
        visible: true,
      }
    case actionTypes.FORM_HIDE:
      return {
        ...state,
        visible: false,
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
}

const childTableInitState = {
  data: [],
  visible: false,
  loading: false,
  searchData: {},
}

const childTable = (state = childTableInitState, action) => {
  switch (action.type) {
    case thunkTypes.childTableGet.REQUESTTYPE:
      return {
        ...state,
        searchData: {
          ...state.searchData,
          ...action.params,
        },
        loading: true,
      }
    case thunkTypes.childTableGet.SUCCESSTYPE:
      return {
        ...state,
        data: action.response.result.map(item => ({ ...item, loading: false })),
        loading: false,
      }
    case thunkTypes.childTableGet.FAILURETYPE:
      return {
        ...state,
        loading: false,
      }
    case thunkTypes.childTableStatusToggle.REQUESTTYPE:
      return {
        ...state,
        data: state.data.map(item => item.id === action.params.id ? { ...item, loading: true } : item)
      }
    case thunkTypes.childTableStatusToggle.SUCCESSTYPE:
      return {
        ...state,
        data: state.data.map(item => item.loading === true ? { ...item, status: item.status === 'y' ? 'n' : 'y', loading: false } : item)
      }
    case thunkTypes.childTableStatusToggle.FAILURETYPE:
      return {
        ...state,
        data: state.data.map(item => ({ ...item, loading: false }))
      }
    case actionTypes.CHILDTABLE_RESET:
      return {
        ...state,
        data: childTableInitState.data,
      }
    case actionTypes.CHILDTABLE_SHOW:
      return {
        ...state,
        visible: true,
      }
    case actionTypes.CHILDTABLE_HIDE:
      return {
        ...state,
        visible: false,
      }
    default:
      return state
  }
}

const childFormInitState = {
  data: {},
  visible: false,
  loading: false,
  title: '',
}

const childForm = (state = childFormInitState, action) => {
  switch (action.type) {
    case thunkTypes.childFormGet.REQUESTTYPE:
      return {
        ...state,
        loading: true,
      }
    case thunkTypes.childFormGet.SUCCESSTYPE:
      const resultStr = {}
      Object.entries(action.response.result).forEach(v => resultStr[v[0]] = '' + v[1])
      return {
        ...state,
        data: resultStr,
        loading: false,
      }
    case thunkTypes.childFormGet.FAILURETYPE:
      return {
        ...state,
        visible: false,
        loading: false,
      }
    case actionTypes.CHILDFORM_SETDATA:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.params,
        },
      }
    case actionTypes.CHILDFORM_RESET:
      return {
        ...state,
        data: formInitState.data,
      }
    case actionTypes.CHILDFORM_SHOW:
      return {
        ...state,
        title: action.value,
        visible: true,
      }
    case actionTypes.CHILDFORM_HIDE:
      return {
        ...state,
        visible: false,
      }
    case thunkTypes.childFormSubmit.REQUESTTYPE:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.params,
        },
        loading: true,
      }
    case thunkTypes.childFormSubmit.SUCCESSTYPE:
      return {
        ...state,
        loading: false,
      }
    case thunkTypes.childFormSubmit.FAILURETYPE:
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
  childTable,
  childForm,
})