import * as APIS from '@/middleware/api';

const THISACTION = 'AUDIT_JOBDEMAND_';

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
  [APIS.AUDIT_JOBDEMAND_TABLE_GET_API]: {
    types: Object.values(thunk.tableGet),
    url: 'demand/waitAuditDemandList.json',
    params: params,
  }
});


const tableSuccess = params => dispatch => dispatch({
  [APIS.AUDIT_JOBDEMAND_TABLE_SUCCESS_API]: {
    types: Object.values(thunk.tableSuccess),
    url: 'demand/auditJobDemand.json',
    params: { ...params, auditResult: 'AUDIT_SUCCESS' },
  }
});

const formFailure = params => dispatch => dispatch({
  [APIS.AUDIT_JOBDEMAND_FORM_FAILURE_API]: {
    types: Object.values(thunk.formFailure),
    url: 'demand/auditJobDemand.json',
    params: { ...params, auditResult: 'AUDIT_FAIL' },
  }
});

const action = {
  FORM_RESET: THISACTION + 'FORM_RESET',
  FORM_SETDATA: THISACTION + 'FORM_SETDATA',
  FORM_SHOW: THISACTION + 'FORM_SHOW',
  FORM_HIDE: THISACTION + 'FORM_HIDE',
  MAP_RESET: THISACTION + 'MAP_RESET',
  MAP_SETDATA: THISACTION + 'MAP_SETDATA',
  MAP_SHOW: THISACTION + 'MAP_SHOW',
  MAP_HIDE: THISACTION + 'MAP_HIDE',
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

const mapReset = () => dispatch => dispatch({
  type: action.MAP_RESET,
});

const mapSetData = params => dispatch => dispatch({
  type: action.MAP_SETDATA,
  params: params,
});

const mapShow = title => dispatch => dispatch({
  type: action.MAP_SHOW,
  value: title,
});

const mapHide = () => dispatch => dispatch({
  type: action.MAP_HIDE
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
  mapReset,
  mapSetData,
  mapShow,
  mapHide,
};