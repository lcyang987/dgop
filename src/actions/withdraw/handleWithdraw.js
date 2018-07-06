import * as APIS from '@/middleware/api';

const THISACTION = 'HANDLE_WITHDRAW';

const thunk = {
  tableGet: {
    REQUESTTYPE: THISACTION + 'TABLE_GET_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'TABLE_GET_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'TABLE_GET_FAILURETYPE',
  },
  tableDetailGet: {
    REQUESTTYPE: THISACTION + 'TABLE_DETAIL_GET_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'TABLE_DETAIL_GET_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'TABLE_DETAIL_GET_FAILURETYPE',
  },
  tableCancel: {
    REQUESTTYPE: THISACTION + 'TABLE_CANCEL_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'TABLE_CANCEL_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'TABLE_CANCEL_FAILURETYPE',
  },
  tableHandle: {
    REQUESTTYPE: THISACTION + 'TABLE_HANDLE_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'TABLE_HANDLE_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'TABLE_HANDLE_FAILURETYPE',
  },
};

const tableGet = params => dispatch => dispatch({
  [APIS.HANDLE_WITHDRAW_TABLE_GET_API]: {
    types: Object.values(thunk.tableGet),
    url: 'withdraw/handleListPage.json',
    params: params,
  }
});

const tableDetailGet = params => dispatch => dispatch({
  [APIS.HANDLE_WITHDRAW_TABLE_DETAIL_GET_API]: {
    types: Object.values(thunk.tableDetailGet),
    url: 'withdraw/handleDetail.json',
    params: params,
  }
});

const tableCancel = params => dispatch => dispatch({
  [APIS.HANDLE_WITHDRAW_TABLE_CANCEL_API]: {
    types: Object.values(thunk.tableCancel),
    url: 'withdraw/cancelHandle.json',
    params: params,
  }
});

const tableHandle = params => dispatch => dispatch({
  [APIS.HANDLE_WITHDRAW_TABLE_HANDLE_API]: {
    types: Object.values(thunk.tableHandle),
    url: 'withdraw/solvedHandle.json',
    params: params,
  }
});

const action = {
  TABLE_DETAIL_ROW_SUCCESS: THISACTION + 'TABLE_DETAIL_ROW_SUCCESS',
  TABLE_DETAIL_ROW_FAILURE: THISACTION + 'TABLE_DETAIL_ROW_FAILURE',
  TABLE_DETAIL_ROW_RESET: THISACTION + 'TABLE_DETAIL_ROW_RESET',
  DETAIL_ROW_FAILURE_FORM_RESET: THISACTION + 'DETAIL_ROW_FAILURE_FORM_RESET',
  DETAIL_ROW_FAILURE_FORM_SETDATA: THISACTION + 'DETAIL_ROW_FAILURE_FORM_SETDATA',
  DETAIL_ROW_FAILURE_FORM_SHOW: THISACTION + 'DETAIL_ROW_FAILURE_FORM_SHOW',
  DETAIL_ROW_FAILURE_FORM_HIDE: THISACTION + 'DETAIL_ROW_FAILURE_FORM_HIDE',
};

const tableDetailRowSuccess = params => dispatch => dispatch({
  type: action.TABLE_DETAIL_ROW_SUCCESS,
  params: params,
});

const tableDetailRowReset = params => dispatch => dispatch({
  type: action.TABLE_DETAIL_ROW_RESET,
  params: params,
});

const detailRowFailureFormReset = () => dispatch => dispatch({
  type: action.DETAIL_ROW_FAILURE_FORM_RESET,
});

const detailRowFailureFormSetData = params => dispatch => dispatch({
  type: action.DETAIL_ROW_FAILURE_FORM_SETDATA,
  params: params,
});

const detailRowFailureFormShow = title => dispatch => dispatch({
  type: action.DETAIL_ROW_FAILURE_FORM_SHOW,
  value: title,
});

const detailRowFailureFormHide = () => dispatch => dispatch({
  type: action.DETAIL_ROW_FAILURE_FORM_HIDE
});

const detailRowFormFailure = params => dispatch => dispatch({
  type: action.TABLE_DETAIL_ROW_FAILURE,
  params: params,
});

export default {
  thunk, // 以下为接口调用
  tableGet,
  tableDetailGet,
  tableCancel,
  tableHandle,
  action,
  tableDetailRowSuccess,
  tableDetailRowReset,
  detailRowFailureFormReset,
  detailRowFailureFormSetData,
  detailRowFailureFormShow,
  detailRowFailureFormHide,
  detailRowFormFailure,
};