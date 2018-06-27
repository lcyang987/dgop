import * as APIS from '@/middleware/api';

const THISACTION = 'BANK_CONFIG_';

const thunk = {
  tableGet: {
    REQUESTTYPE:THISACTION + 'TABLE_GET_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'TABLE_GET_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'TABLE_GET_FAILURETYPE',
  },
  tableStatusToggle: {
    REQUESTTYPE:THISACTION + 'TABLE_STATUS_TOGGLE_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'TABLE_STATUS_TOGGLE_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'TABLE_STATUS_TOGGLE_FAILURETYPE',
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
}

const tableGet = params => dispatch => dispatch({
  [APIS.BANK_CONFIG_TABLE_GET_API]: {
    types: Object.values(thunk.tableGet),
    url: 'bank/bankListPage.json',
    params: params,
  }
});

const tableStatusToggle = params => dispatch => dispatch({
  [APIS.BANK_CONFIG_TABLE_STATUS_TOGGLE_API]: {
    types: Object.values(thunk.tableStatusToggle),
    url: 'bank/updateBank.json',
    params: params,
  }
});

const formGet = params => dispatch => dispatch({
  [APIS.BANK_CONFIG_FORM_GET_API]: {
    types: Object.values(thunk.formGet),
    url: 'bank/getBankByPrimaryKey.json',
    params: params,
  }
});

const formAddSubmit = params => ({
  [APIS.BANK_CONFIG_FORM_ADD_SUBMIT_API]: {
    types: Object.values(thunk.formSubmit),
    url: 'bank/addBank.json',
    params: params,
  }
})

const formEditSubmit = params => ({
  [APIS.BANK_CONFIG_FORM_EDIT_SUBMIT_API]: {
    types: Object.values(thunk.formSubmit),
    url: 'bank/updateBank.json',
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
  [APIS.BANK_CONFIG_TABLE_REMOVE_API]: {
    types: Object.values(thunk.tableRemove),
    url: 'bank/delBank.json',
    params: params,
  }
});

const action = {
  FORM_SHOW: THISACTION + 'FORM_SHOW',
  FORM_HIDE: THISACTION + 'FORM_HIDE',
  FORM_RESET: THISACTION + 'FORM_RESET',
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


export default {
  thunk, // 以下为接口调用
  tableGet,
  tableStatusToggle,
  formGet,
  formSubmit,
  tableRemove,
  action, // 以下为修改数据
  formShow,
  formHide,
  formReset,
};