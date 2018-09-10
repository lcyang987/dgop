import * as APIS from '@/middleware/api';

const THISACTION = 'TASKCLAIM_MANAGER_';

const thunk = {
  tableGet: {
    REQUESTTYPE: THISACTION + 'TABLE_GET_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'TABLE_GET_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'TABLE_GET_FAILURETYPE',
  },
  jobRewardTableGet: {
    REQUESTTYPE: THISACTION + 'JOBREWARD_TABLE_GET_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'JOBREWARD_TABLE_GET_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'JOBREWARD_TABLE_GET_FAILURETYPE',
  },
  jobRewardTableFrozen: {
    REQUESTTYPE: THISACTION + 'JOBREWARD_TABLE_FROZEN_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'JOBREWARD_TABLE_FROZEN_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'JOBREWARD_TABLE_FROZEN_FAILURETYPE',
  },
  jobRewardTableUnfrozen: {
    REQUESTTYPE: THISACTION + 'JOBREWARD_TABLE_UNFROZEN_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'JOBREWARD_TABLE_UNFROZEN_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'JOBREWARD_TABLE_UNFROZEN_FAILURETYPE',
  },
};

const tableGet = params => dispatch => dispatch({
  [APIS.TASKCLAIM_MANAGER_TABLE_GET_API]: {
    types: Object.values(thunk.tableGet),
    url: 'job/taskClaimListPage.json',
    params: params,
  }
});

const jobRewardTableGet = params => dispatch => dispatch({
  [APIS.TASKCLAIM_MANAGER_JOBREWARD_TABLE_GET_API]: {
    types: Object.values(thunk.jobRewardTableGet),
    url: 'job/jobRewardSettlement.json',
    params: params,
  }
});

const jobRewardTableFrozen = params => dispatch => dispatch({
  [APIS.TASKCLAIM_MANAGER_JOBREWARD_TABLE_FROZEN_API]: {
    types: Object.values(thunk.jobRewardTableFrozen),
    url: 'demand/frozenRewardSettlement.json',
    params: { ...params, targetStatus: 'FROZEN' },
  }
});

const jobRewardTableUnfrozen = params => dispatch => dispatch({
  [APIS.TASKCLAIM_MANAGER_JOBREWARD_TABLE_UNFROZEN_API]: {
    types: Object.values(thunk.jobRewardTableUnfrozen),
    url: 'demand/frozenRewardSettlement.json',
    params: { ...params, targetStatus: 'UNFROZEN' },
  }
});

const action = {
  JOBREWARD_TABLE_SHOW: THISACTION + 'JOBREWARD_TABLE_SHOW',
  JOBREWARD_TABLE_HIDE: THISACTION + 'JOBREWARD_TABLE_HIDE',
};

const jobRewardTableShow = () => dispatch => dispatch({
  type: action.JOBREWARD_TABLE_SHOW,
});

const jobRewardTableHide = () => dispatch => dispatch({
  type: action.JOBREWARD_TABLE_HIDE,
});

export default {
  thunk, // 以下为接口调用
  tableGet,
  jobRewardTableGet,
  jobRewardTableFrozen,
  jobRewardTableUnfrozen,
  action, // 以下为修改数据
  jobRewardTableShow,
  jobRewardTableHide,
};