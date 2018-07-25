import * as APIS from '@/middleware/api';

const THISACTION = 'REVENUE';

const thunk = {
  tableGet: {
    REQUESTTYPE: THISACTION + 'TABLE_GET_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'TABLE_GET_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'TABLE_GET_FAILURETYPE',
  },
}

const tableGet = params => dispatch => dispatch({
  [APIS.REVENUE_TABLE_GET_API]: {
    types: Object.values(thunk.tableGet),
    url: 'cap/platformRevenueListPage.json',
    params: params,
  }
});

export default {
  thunk, // 以下为接口调用
  tableGet,
};