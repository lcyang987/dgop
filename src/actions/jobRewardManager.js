import * as APIS from '@/middleware/api';

const THISACTION = 'JOBREWARD_MANAGER_';

const thunk = {
  tableGet: {
    REQUESTTYPE: THISACTION + 'TABLE_GET_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'TABLE_GET_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'TABLE_GET_FAILURETYPE',
  },
  tableFrozen: {
    REQUESTTYPE: THISACTION + 'TABLE_FROZEN_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'TABLE_FROZEN_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'TABLE_FROZEN_FAILURETYPE',
  },
  tableUnfrozen: {
    REQUESTTYPE: THISACTION + 'TABLE_UNFROZEN_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'TABLE_UNFROZEN_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'TABLE_UNFROZEN_FAILURETYPE',
  },
};

const tableGet = params => dispatch => dispatch({
  [APIS.JOBREWARD_MANAGER_TABLE_GET_API]: {
    types: Object.values(thunk.tableGet),
    url: 'job/rewardSettlementListPage.json',
    params: params,
  }
});

const tableFrozen = params => dispatch => dispatch({
  [APIS.JOBREWARD_MANAGER_TABLE_FROZEN_API]: {
    types: Object.values(thunk.tableFrozen),
    url: 'demand/frozenRewardSettlement.json',
    params: { ...params, targetStatus: 'FROZEN' },
  }
});

const tableUnfrozen = params => dispatch => dispatch({
  [APIS.JOBREWARD_MANAGER_TABLE_UNFROZEN_API]: {
    types: Object.values(thunk.tableUnfrozen),
    url: 'demand/frozenRewardSettlement.json',
    params: { ...params, targetStatus: 'UNFROZEN' },
  }
});

export default {
  thunk, // 以下为接口调用
  tableGet,
  tableFrozen,
  tableUnfrozen,
};