import { combineReducers } from 'redux';
import { ROLE_MANAGER } from '@/actions';

const thunkTypes = ROLE_MANAGER.thunk;
const actionTypes = ROLE_MANAGER.action;

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

const configFormInitState = {
  data: {
    menuIds: [],
  },
  originAllMenu: [],
  allMenu: [],
  roleMenu: [],
  visible: false,
  loading: false,
  title: '',
};

const configForm = (state = configFormInitState, action) => {
  switch (action.type) {
    case thunkTypes.configFormGetAllMenu.REQUESTTYPE:
      return state
    case thunkTypes.configFormGetAllMenu.SUCCESSTYPE:
      function arrToTree(tree, data, parent, parentUrl) {
        for (var i = 0; i < data.length; i++) {
          if (data[i].parentId === parent) {
            var json = {
              id: data[i].id,
              parentId: data[i].parentId,
              title: data[i].name,
              value: '' + data[i].id,
              key: data[i].id,
              isLeaf: data[i].isLeaf === 'y' ? true : false,
            }
            if (data[i].isLeaf === 'n') { json.children = [] }
            tree.push(json)
            data.splice(i, 1)
            i--
            arrToTree(json.children, data, json.id, json.url)
          }
        }
      }
      const newTree = []
      const result = action.response.result.map(item => ({ ...item }))
      arrToTree(newTree, result, 0, '')
      return {
        ...state,
        originAllMenu: action.response.result,
        allMenu: newTree,
      }
    case thunkTypes.configFormGetAllMenu.FAILURETYPE:
      return state
    case thunkTypes.configFormGetMenuByRole.REQUESTTYPE:
      return state
    case thunkTypes.configFormGetMenuByRole.SUCCESSTYPE:
      return {
        ...state,
        data: {
          ...state.data,
          menuIds: action.response.result.map(item => '' + item.menuId),
        },
        roleMenu: action.response.result,
        loading: false,
      }
    case thunkTypes.configFormGetMenuByRole.FAILURETYPE:
      return state
    case actionTypes.CONFIGFORM_SETDATA:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.params,
        },
      }
    case actionTypes.CONFIGFORM_SHOW:
      return {
        ...state,
        title: action.value,
        visible: true
      }
    case actionTypes.CONFIGFORM_HIDE:
      return {
        ...state,
        visible: false
      }
    case actionTypes.CONFIGFORM_RESET:
      return {
        ...state,
        data: configFormInitState.data
      }
    case actionTypes.CONFIGFORM_OPEN_LOADING:
      return {
        ...state,
        loading: true
      }
    case actionTypes.CONFIGFORM_CLOSE_LOADING:
      return {
        ...state,
        loading: false
      }
    case thunkTypes.configFormSubmit.REQUESTTYPE:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.params,
          menuIds: action.params.menuIds.slice(1, -1).split(','),
        },
        loading: true,
      }
    case thunkTypes.configFormSubmit.SUCCESSTYPE:
      return {
        ...state,
        loading: false,
      }
    case thunkTypes.configFormSubmit.FAILURETYPE:
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
  configForm,
});