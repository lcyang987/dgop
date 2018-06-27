import * as APIS from '@/middleware/api';

const THISACTION = 'USER_MANAGER_';

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
  formPicUpload: {
    REQUESTTYPE:THISACTION + 'FORM_PIC_UPLOAD_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'FORM_PIC_UPLOAD_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'FORM_PIC_UPLOAD_FAILURETYPE',
  },
  formSubmit: {
    REQUESTTYPE:THISACTION + 'FORM_SUBMIT_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'FORM_SUBMIT_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'FORM_SUBMIT_FAILURETYPE',
  },
  passwordFormSubmit: {
    REQUESTTYPE:THISACTION + 'PASSWORDFORM_SUBMIT_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'PASSWORDFORM_SUBMIT_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'PASSWORDFORM_SUBMIT_FAILURETYPE',
  },
}

const tableGet = params => dispatch => dispatch({
  [APIS.USER_MANAGER_TABLE_GET_API]: {
    types: Object.values(thunk.tableGet),
    url: 'user/userListPage.json',
    params: params,
  }
});

const tableStatusToggle = params => dispatch => dispatch({
  [APIS.USER_MANAGER_TABLE_STATUS_TOGGLE_API]: {
    types: Object.values(thunk.tableStatusToggle),
    url: 'user/updateUserInfo.json',
    params: params,
  }
});

const formGet = params => dispatch => dispatch({
  [APIS.USER_MANAGER_FORM_GET_API]: {
    types: Object.values(thunk.formGet),
    url: 'user/selectByPrimaryKey.json',
    params: params,
  }
});

const formPicUpload = params => dispatch => dispatch({
  [APIS.USER_MANAGER_FORM_PIC_UPLOAD_API]: {
    types: Object.values(thunk.formGet),
    url: 'common/uploadFile.json',
    params: params,
  }
});

const formAddSubmit = params => ({
  [APIS.USER_MANAGER_FORM_ADD_SUBMIT_API]: {
    types: Object.values(thunk.formSubmit),
    url: 'user/addUserInfo.json',
    params: params,
  }
})

const formEditSubmit = params => ({
  [APIS.USER_MANAGER_FORM_EDIT_SUBMIT_API]: {
    types: Object.values(thunk.formSubmit),
    url: 'user/updateUserInfo.json',
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

const passwordFormSubmit = params => dispatch => dispatch({
  [APIS.USER_MANAGER_PASSWORDFORMSUBMIT_GET_API]: {
    types: Object.values(thunk.passwordFormSubmit),
    url: 'user/updatePasswordByPrimaryKey.json',
    params: params,
  }
});

const action = {
  FORM_SETDATA: THISACTION + 'FORM_SETDATA',
  FORM_RESET: THISACTION + 'FORM_RESET',
  FORM_SHOW: THISACTION + 'FORM_SHOW',
  FORM_HIDE: THISACTION + 'FORM_HIDE',
  PASSWORDFORM_SETDATA: THISACTION + 'PASSWORDFORM_SETDATA',
  PASSWORDFORM_RESET: THISACTION + 'PASSWORDFORM_RESET',
  PASSWORDFORM_SHOW: THISACTION + 'PASSWORDFORM_SHOW',
  PASSWORDFORM_HIDE: THISACTION + 'PASSWORDFORM_HIDE',
};

const formSetData = params => dispatch => dispatch({
  type: action.FORM_SETDATA,
  params: params,
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

const passwordFormSetData = params => dispatch => dispatch({
  type: action.PASSWORDFORM_SETDATA,
  params: params,
});

const passwordFormReset = () => dispatch => dispatch({
  type: action.PASSWORDFORM_RESET,
});

const passwordFormShow = title => dispatch => dispatch({
  type: action.PASSWORDFORM_SHOW,
  value: title,
});

const passwordFormHide = () => dispatch => dispatch({
  type: action.PASSWORDFORM_HIDE
});


export default {
  thunk, // 以下为接口调用
  tableGet,
  tableStatusToggle,
  formGet,
  formPicUpload,
  formSubmit,
  passwordFormSubmit,
  action, // 以下为修改数据
  formSetData,
  formReset,
  formShow,
  formHide,
  passwordFormSetData,
  passwordFormReset,
  passwordFormShow,
  passwordFormHide,
};