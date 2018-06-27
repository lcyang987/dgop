import * as APIS from '@/middleware/api';

const THISACTION = 'DICT_MANAGER_';

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
  childTableGet: {
    REQUESTTYPE:THISACTION + 'CHILDTABLE_GET_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'CHILDTABLE_GET_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'CHILDTABLE_GET_FAILURETYPE',
  },
  childTableStatusToggle: {
    REQUESTTYPE:THISACTION + 'CHILDTABLE_STATUS_TOGGLE_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'CHILDTABLE_STATUS_TOGGLE_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'CHILDTABLE_STATUS_TOGGLE_FAILURETYPE',
  },
  childFormGet: {
    REQUESTTYPE:THISACTION + 'CHILDFORM_GET_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'CHILDFORM_GET_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'CHILDFORM_GET_FAILURETYPE',
  },
  childFormSubmit: {
    REQUESTTYPE:THISACTION + 'CHILDFORM_SUBMIT_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'CHILDFORM_SUBMIT_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'CHILDFORM_SUBMIT_FAILURETYPE',
  },
}

const tableGet = params => dispatch => dispatch({
  [APIS.DICT_MANAGER_TABLE_GET_API]: {
    types: Object.values(thunk.tableGet),
    url: 'dictMenu/getDictMenuList.json',
    params: params,
  }
});

const formGet = params => dispatch => dispatch({
  [APIS.DICT_MANAGER_FORM_GET_API]: {
    types: Object.values(thunk.formGet),
    url: 'dictMenu/selectByPrimaryKey.json',
    params: params,
  }
});

const formAddSubmit = params => ({
  [APIS.DICT_MANAGER_FORM_ADD_SUBMIT_API]: {
    types: Object.values(thunk.formSubmit),
    url: 'dictMenu/saveDictMenu.json',
    params: params,
  }
})

const formEditSubmit = params => ({
  [APIS.DICT_MANAGER_FORM_EDIT_SUBMIT_API]: {
    types: Object.values(thunk.formSubmit),
    url: 'dictMenu/updateDictMenu.json',
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

const childTableGet = params => dispatch => dispatch({
  [APIS.DICT_MANAGER_CHILDTABLE_GET_API]: {
    types: Object.values(thunk.childTableGet),
    url: 'dict/dictList.json',
    params: params,
  }
});

const childTableStatusToggle = params => dispatch => dispatch({
  [APIS.DICT_MANAGER_CHILDTABLE_STATUS_TOGGLE_API]: {
    types: Object.values(thunk.childTableStatusToggle),
    url: 'dict/updateStatusByPrimaryKey.json',
    params: params,
  }
});

const childFormGet = params => dispatch => dispatch({
  [APIS.DICT_MANAGER_CHILDFORM_GET_API]: {
    types: Object.values(thunk.childFormGet),
    url: 'dict/selectByPrimaryKey.json',
    params: params,
  }
});

const childFormAddSubmit = params => ({
  [APIS.DICT_MANAGER_CHILDFORM_ADD_SUBMIT_API]: {
    types: Object.values(thunk.childFormSubmit),
    url: 'dict/saveDict.json',
    params: params,
  }
})

const childFormEditSubmit = params => ({
  [APIS.DICT_MANAGER_CHILDFORM_EDIT_SUBMIT_API]: {
    types: Object.values(thunk.childFormSubmit),
    url: 'dict/updateDict.json',
    params: params,
  }
})

const childFormSubmit = params => dispatch => {
  if (params.id) {
    return dispatch(childFormEditSubmit(params));
  } else {
    return dispatch(childFormAddSubmit(params));
  }
};

const action = {
  FORM_MENUTREE: THISACTION + 'FORM_MENUTREE',
  FORM_RESET: THISACTION + 'FORM_RESET',
  FORM_SHOW: THISACTION + 'FORM_SHOW',
  FORM_HIDE: THISACTION + 'FORM_HIDE',
  CHILDTABLE_RESET: THISACTION + 'CHILDTABLE_RESET',
  CHILDTABLE_SHOW: THISACTION + 'CHILDTABLE_SHOW',
  CHILDTABLE_HIDE: THISACTION + 'CHILDTABLE_HIDE',
  CHILDFORM_SETDATA: THISACTION + 'CHILDFORM_SETDATA',
  CHILDFORM_RESET: THISACTION + 'CHILDFORM_RESET',
  CHILDFORM_SHOW: THISACTION + 'CHILDFORM_SHOW',
  CHILDFORM_HIDE: THISACTION + 'CHILDFORM_HIDE',
};

const formGetMenuTree = opt => dispatch => dispatch({
  type: action.FORM_MENUTREE,
  opt: opt,
});

const formReset = () => dispatch => dispatch({
  type: action.FORM_RESET,
});

const formShow = title => dispatch => dispatch({
  type: action.FORM_SHOW,
  value: title,
});

const formHide = () => dispatch => dispatch({
  type: action.FORM_HIDE
});

const childTableReset = () => dispatch => dispatch({
  type: action.CHILDTABLE_RESET,
});

const childTableShow = title => dispatch => dispatch({
  type: action.CHILDTABLE_SHOW,
  value: title,
});

const childTableHide = () => dispatch => dispatch({
  type: action.CHILDTABLE_HIDE
});

const childFormSetData = params => dispatch => dispatch({
  type: action.CHILDFORM_SETDATA,
  params: params,
});

const childFormReset = () => dispatch => dispatch({
  type: action.CHILDFORM_RESET,
});

const childFormShow = title => dispatch => dispatch({
  type: action.CHILDFORM_SHOW,
  value: title,
});

const childFormHide = () => dispatch => dispatch({
  type: action.CHILDFORM_HIDE
});

export default {
  thunk, // 以下为接口调用
  tableGet,
  formGet,
  formSubmit,
  childTableGet,
  childTableStatusToggle,
  childFormGet,
  childFormSubmit,
  action, // 以下为修改数据
  formGetMenuTree,
  formShow,
  formHide,
  formReset,
  childTableShow,
  childTableHide,
  childTableReset,
  childFormSetData,
  childFormShow,
  childFormHide,
  childFormReset,
};