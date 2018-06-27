import * as APIS from '@/middleware/api';

const THISACTION = 'ROLE_MANAGER_';

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
  },
  configFormGetAllMenu: {
    REQUESTTYPE:THISACTION + 'CONFIGFORM_GETALLMENU_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'CONFIGFORM_GETALLMENU_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'CONFIGFORM_GETALLMENU_FAILURETYPE'
  },
  configFormGetMenuByRole: {
    REQUESTTYPE:THISACTION + 'CONFIGFORM_GETMENUBYROLE_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'CONFIGFORM_GETMENUBYROLE_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'CONFIGFORM_GETMENUBYROLE_FAILURETYPE'
  },
  configFormSubmit: {
    REQUESTTYPE:THISACTION + 'CONFIGFORM_SUBMIT_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'CONFIGFORM_SUBMIT_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'CONFIGFORM_SUBMIT_FAILURETYPE'
  },
}

const tableGet = params => dispatch => dispatch({
  [APIS.ROLE_MANAGER_TABLE_GET_API]: {
    types: Object.values(thunk.tableGet),
    url: 'role/roleListPage.json',
    params: params,
  }
});

const formGet = params => dispatch => dispatch({
  [APIS.ROLE_MANAGER_FORM_GET_API]: {
    types: Object.values(thunk.formGet),
    url: 'role/selectByPrimaryKey.json',
    params: params,
  }
});

const formAddSubmit = params => ({
  [APIS.ROLE_MANAGER_FORM_ADD_SUBMIT_API]: {
    types: Object.values(thunk.formSubmit),
    url: 'role/addRoleInfo.json',
    params: params,
  }
})

const formEditSubmit = params => ({
  [APIS.ROLE_MANAGER_FORM_EDIT_SUBMIT_API]: {
    types: Object.values(thunk.formSubmit),
    url: 'role/updateRoleInfo.json',
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
  [APIS.ROLE_MANAGER_TABLE_REMOVE_API]: {
    types: Object.values(thunk.tableRemove),
    url: 'role/deleteLogicByPrimaryKey.json',
    params: params,
  }
});

const configFormGetAllMenu = params => dispatch => dispatch({
  [APIS.ROLE_MANAGER_CONFIGFORM_GETALLMENU_API]: {
    types: Object.values(thunk.configFormGetAllMenu),
    url: 'menu/selMenuTree.json',
    params: params,
  }
});

const configFormGetMenuByRole = params => dispatch => dispatch({
  [APIS.ROLE_MANAGER_CONFIGFORM_GETMENUBYROLE_API]: {
    types: Object.values(thunk.configFormGetMenuByRole),
    url: 'role/menuListByRoleId.json',
    params: params,
  }
});

const configFormSubmit = params => dispatch => dispatch({
  [APIS.ROLE_MANAGER_CONFIGFORM_SUBMIT_API]: {
    types: Object.values(thunk.configFormSubmit),
    url: 'role/updateMenuByRoleId.json',
    params: params,
  }
});

const action = {
  FORM_SHOW: THISACTION + 'FORM_SHOW',
  FORM_HIDE: THISACTION + 'FORM_HIDE',
  FORM_RESET: THISACTION + 'FORM_RESET',
  CONFIGFORM_SETDATA: THISACTION + 'CONFIGFORM_SETDATA',
  CONFIGFORM_SHOW: THISACTION + 'CONFIGFORM_SHOW',
  CONFIGFORM_HIDE: THISACTION + 'CONFIGFORM_HIDE',
  CONFIGFORM_RESET: THISACTION + 'CONFIGFORM_RESET',
  CONFIGFORM_OPEN_LOADING: THISACTION + 'CONFIGFORM_OPEN_LOADING',
  CONFIGFORM_CLOSE_LOADING: THISACTION + 'CONFIGFORM_CLOSE_LOADING',
};

const formShow = title => dispatch => dispatch({
  type: action.FORM_SHOW,
  value: title,
});

const formHide = () => dispatch => dispatch({
  type: action.FORM_HIDE
});

const formReset = () => dispatch => dispatch({
  type: action.FORM_RESET,
});

const configFormSetData = params => dispatch => dispatch({
  type: action.CONFIGFORM_SETDATA,
  params: params,
});

const configFormShow = title => dispatch => dispatch({
  type: action.CONFIGFORM_SHOW,
  value: title,
});

const configFormHide = () => dispatch => dispatch({
  type: action.CONFIGFORM_HIDE
});

const configFormReset = () => dispatch => dispatch({
  type: action.CONFIGFORM_RESET,
});

const configFormOpenLoading = () => dispatch => dispatch({
  type: action.CONFIGFORM_OPEN_LOADING,
});

const configFormCloseLoading = () => dispatch => dispatch({
  type: action.CONFIGFORM_CLOSE_LOADING,
});

export default {
  thunk, // 以下为接口调用
  tableGet,
  formGet,
  formSubmit,
  tableRemove,
  configFormGetAllMenu,
  configFormGetMenuByRole,
  configFormSubmit,
  action, // 以下为修改数据
  formShow,
  formHide,
  formReset,
  configFormSetData,
  configFormShow,
  configFormHide,
  configFormReset,
  configFormOpenLoading,
  configFormCloseLoading,
};