import * as APIS from '@/middleware/api';

const THISACTION = 'AUDIT_MACHINE_';

const thunk = {
  tableGet: {
    REQUESTTYPE: THISACTION + 'TABLE_GET_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'TABLE_GET_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'TABLE_GET_FAILURETYPE',
  },
  tableSuccess: {
    REQUESTTYPE: THISACTION + 'TABLE_SUCCESS_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'TABLE_SUCCESS_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'TABLE_SUCCESS_FAILURETYPE'
  },
  formFailure: {
    REQUESTTYPE: THISACTION + 'FORM_FAILURE_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'FORM_FAILURE_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'FORM_FAILURE_FAILURETYPE'
  },
}

const tableGet = params => dispatch => dispatch({
  [APIS.AUDIT_MACHINE_TABLE_GET_API]: {
    types: Object.values(thunk.tableGet),
    url: 'mbr/memberMachineList.json',
    params: params,
  }
});


const tableSuccess = params => dispatch => dispatch({
  [APIS.AUDIT_MACHINE_TABLE_SUCCESS_API]: {
    types: Object.values(thunk.tableSuccess),
    url: 'mbr/auditMemberMachine.json',
    params: { ...params, auditResult: 'AUDIT_SUCCESS' },
  }
});

const formFailure = params => dispatch => dispatch({
  [APIS.AUDIT_MACHINE_FORM_FAILURE_API]: {
    types: Object.values(thunk.formFailure),
    url: 'mbr/auditMemberMachine.json',
    params: { ...params, auditResult: 'AUDIT_FAIL' },
  }
});

const action = {
  FORM_RESET: THISACTION + 'FORM_RESET',
  FORM_SETDATA: THISACTION + 'FORM_SETDATA',
  FORM_SHOW: THISACTION + 'FORM_SHOW',
  FORM_HIDE: THISACTION + 'FORM_HIDE',
  CAROUSEL_RESET: THISACTION + 'CAROUSEL_RESET',
  CAROUSEL_SETDATA: THISACTION + 'CAROUSEL_SETDATA',
  CAROUSEL_SHOW: THISACTION + 'CAROUSEL_SHOW',
  CAROUSEL_HIDE: THISACTION + 'CAROUSEL_HIDE',
};

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

const carouselReset = () => dispatch => dispatch({
  type: action.CAROUSEL_RESET,
});

const carouselSetData = params => dispatch => dispatch({
  type: action.CAROUSEL_SETDATA,
  params: params,
});

const carouselShow = title => dispatch => dispatch({
  type: action.CAROUSEL_SHOW,
  value: title,
});

const carouselHide = () => dispatch => dispatch({
  type: action.CAROUSEL_HIDE
});

export default {
  thunk, // 以下为接口调用
  tableGet,
  tableSuccess,
  formFailure,
  action, // 以下为修改数据
  formReset,
  formSetData,
  formShow,
  formHide,
  carouselReset,
  carouselSetData,
  carouselShow,
  carouselHide,
};