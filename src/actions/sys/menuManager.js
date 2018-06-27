import * as APIS from '@/middleware/api';

const THISACTION = 'MENU_MANAGER_';

const thunk = {
  tableGet: {
    REQUESTTYPE:THISACTION + 'TABLE_GET_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'TABLE_GET_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'TABLE_GET_FAILURETYPE',
  },
  formGet: {
    REQUESTTYPE:THISACTION + 'FORM_GET_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'FORM_GET_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'FORM_GET_FAILURETYPE',
  },
  formSubmit: {
    REQUESTTYPE:THISACTION + 'FORM_SUBMIT_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'FORM_SUBMIT_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'FORM_SUBMIT_FAILURETYPE',
  },
  tableRemove: {
    REQUESTTYPE:THISACTION + 'TABLE_REMOVE_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'TABLE_REMOVE_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'TABLE_REMOVE_FAILURETYPE'
  }
}

const tableGet = params => dispatch => dispatch({
  [APIS.MENU_MANAGER_TABLE_GET_API]: {
    types: Object.values(thunk.tableGet),
    url: 'menu/selMenuTree.json',
    params: params,
  }
});

const formGet = params => dispatch => dispatch({
  [APIS.MENU_MANAGER_FORM_GET_API]: {
    types: Object.values(thunk.formGet),
    url: 'menu/selectByPrimaryKey.json',
    params: params,
  }
});

const formAddSubmit = params => ({
  [APIS.MENU_MANAGER_FORM_ADD_SUBMIT_API]: {
    types: Object.values(thunk.formSubmit),
    url: 'menu/addMenuInfo.json',
    params: params,
  }
})

const formEditSubmit = params => ({
  [APIS.MENU_MANAGER_FORM_EDIT_SUBMIT_API]: {
    types: Object.values(thunk.formSubmit),
    url: 'menu/updateMenuInfo.json',
    params: params,
  }
})

const formSubmit = params => dispatch => {
  if (params.id) {
    return dispatch(formEditSubmit(params));
  } else {
    return dispatch(formAddSubmit(params));
  }
};

const tableRemove = params => dispatch => dispatch({
  [APIS.MENU_MANAGER_TABLE_REMOVE_API]: {
    types: Object.values(thunk.tableRemove),
    url: 'menu/deleteMenuInfo.json',
    params: params,
  }
});

const action = {
  FORM_MENUTREE: THISACTION + 'FORM_MENUTREE',
  FORM_RESET: THISACTION + 'FORM_RESET',
  FORM_SETDATA: THISACTION + 'FORM_SETDATA',
  FORM_SHOW: THISACTION + 'FORM_SHOW',
  FORM_HIDE: THISACTION + 'FORM_HIDE',
};

const formGetMenuTree = opt => dispatch => dispatch({
  type: action.FORM_MENUTREE,
  opt: opt,
});

const formReset = () => dispatch => dispatch({
  type: action.FORM_RESET,
});

const formSetData = params => dispatch => dispatch({
  type: action.FORM_SETDATA,
  params: params,
});

const formShow = title => dispatch => dispatch({
  type: action.FORM_SHOW,
  value: title,
});

const formHide = () => dispatch => dispatch({
  type: action.FORM_HIDE
});

export default {
  thunk, // 以下为接口调用
  tableGet,
  formGet,
  formSubmit,
  tableRemove,
  action, // 以下为修改数据
  formGetMenuTree,
  formReset,
  formSetData,
  formShow,
  formHide,
};