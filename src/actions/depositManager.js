import * as APIS from '@/middleware/api';

const THISACTION = 'DEPOSIT_MANAGER_';

const thunk = {
  tableGet: {
    REQUESTTYPE: THISACTION + 'TABLE_GET_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'TABLE_GET_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'TABLE_GET_FAILURETYPE',
  },
  detailTableGet: {
    REQUESTTYPE: THISACTION + 'DETAIL_TABLE_GET_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'DETAIL_TABLE_GET_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'DETAIL_TABLE_GET_FAILURETYPE',
  },
  flowTableGet: {
    REQUESTTYPE: THISACTION + 'FLOW_TABLE_GET_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'FLOW_TABLE_GET_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'FLOW_TABLE_GET_FAILURETYPE',
  },
  refundFormSubmit: {
    REQUESTTYPE:THISACTION + 'REFUNDFORM_SUBMIT_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'REFUNDFORM_SUBMIT_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'REFUNDFORM_SUBMIT_FAILURETYPE',
  },
};

const tableGet = params => dispatch => dispatch({
  [APIS.DEPOSIT_MANAGER_TABLE_GET_API]: {
    types: Object.values(thunk.tableGet),
    url: 'deposit/depositAccountListPage.json',
    params: params,
  }
});

const detailTableGet = params => dispatch => dispatch({
  [APIS.DEPOSIT_MANAGER_DETAIL_TABLE_GET_API]: {
    types: Object.values(thunk.detailTableGet),
    url: 'deposit/depositDetailListPage.json',
    params: params,
  }
});

const flowTableGet = params => dispatch => dispatch({
  [APIS.DEPOSIT_MANAGER_FLOW_TABLE_GET_API]: {
    types: Object.values(thunk.flowTableGet),
    url: 'deposit/depositFlowListPage.json',
    params: params,
  }
});

const refundFormSubmit = params => dispatch => dispatch({
  [APIS.DEPOSIT_MANAGER_REFUNDFORM_SUBMIT_REQUESTTYPE]: {
    types: Object.values(thunk.refundFormSubmit),
    url: 'deposit/refundDeposit.json',
    params: params,
  }
});

const action = {
  DETAIL_TABLE_SHOW: THISACTION + 'DETAIL_TABLE_SHOW',
  DETAIL_TABLE_HIDE: THISACTION + 'DETAIL_TABLE_HIDE',
  FLOW_TABLE_SHOW: THISACTION + 'FLOW_TABLE_SHOW',
  FLOW_TABLE_HIDE: THISACTION + 'FLOW_TABLE_HIDE',
  REFUNDFORM_SETDATA: THISACTION + 'REFUNDFORM_SETDATA',
  REFUNDFORM_RESET: THISACTION + 'REFUNDFORM_RESET',
  REFUNDFORM_SHOW: THISACTION + 'REFUNDFORM_SHOW',
  REFUNDFORM_HIDE: THISACTION + 'REFUNDFORM_HIDE',
};

const detailTableShow = () => dispatch => dispatch({
  type: action.DETAIL_TABLE_SHOW,
});

const detailTableHide = () => dispatch => dispatch({
  type: action.DETAIL_TABLE_HIDE,
});

const flowTableShow = () => dispatch => dispatch({
  type: action.FLOW_TABLE_SHOW,
});

const flowTableHide = () => dispatch => dispatch({
  type: action.FLOW_TABLE_HIDE,
});

const refundFormSetData = params => dispatch => dispatch({
  type: action.REFUNDFORM_SETDATA,
  params: params,
});

const refundFormReset = () => dispatch => dispatch({
  type: action.REFUNDFORM_RESET,
});

const refundFormShow = title => dispatch => dispatch({
  type: action.REFUNDFORM_SHOW,
  value: title,
});

const refundFormHide = () => dispatch => dispatch({
  type: action.REFUNDFORM_HIDE
});

export default {
  thunk, // 以下为接口调用
  tableGet,
  detailTableGet,
  flowTableGet,
  refundFormSubmit,
  action, // 以下为修改数据
  detailTableShow,
  detailTableHide,
  flowTableShow,
  flowTableHide,
  refundFormSetData,
  refundFormShow,
  refundFormHide,
  refundFormReset,
};