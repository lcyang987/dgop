import * as APIS from '@/middleware/api';

const THISACTION = 'ACCEPT_WITHDRAW_APPLY_';

const thunk = {
  tableGet: {
    REQUESTTYPE: THISACTION + 'TABLE_GET_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'TABLE_GET_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'TABLE_GET_FAILURETYPE',
  },
  tableApply: {
    REQUESTTYPE: THISACTION + 'TABLE_APPLY_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'TABLE_APPLY_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'TABLE_APPLY_FAILURETYPE',
  },
};

const tableGet = params => dispatch => dispatch({
  [APIS.ACCEPT_WITHDRAW_APPLY_TABLE_GET_API]: {
    types: Object.values(thunk.tableGet),
    url: 'withdraw/waitAcceptedWithdrawApply.json',
    params: params,
  }
});

const tableApply = params => dispatch => dispatch({
  [APIS.ACCEPT_WITHDRAW_APPLY_TABLE_APPLY_API]: {
    types: Object.values(thunk.tableApply),
    url: 'withdraw/acceptWithdrawApply.json',
    params: params,
  }
});

const action = {
  TABLE_SETBATCHAPPLY: THISACTION + 'TABLE_SETBATCHAPPLY',
};

const tableSetBatchApply = ids => dispatch => dispatch({
  type: action.TABLE_SETBATCHAPPLY,
  ids: ids,
});

export default {
  thunk, // 以下为接口调用
  tableGet,
  tableApply,
  action,
  tableSetBatchApply,
};