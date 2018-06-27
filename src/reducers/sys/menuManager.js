import { combineReducers } from 'redux';
import { MENU_MANAGER } from '@/actions';

const thunkTypes = MENU_MANAGER.thunk;
const actionTypes = MENU_MANAGER.action;

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
          if (data[i].parentId === parent) {
            if (data[i].isLeaf === 'n') { data[i].children = [] }
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
            title: item.name,
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

export default combineReducers({
  table,
  form
})