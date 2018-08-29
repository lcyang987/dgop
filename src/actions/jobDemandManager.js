import * as APIS from '@/middleware/api';

const THISACTION = 'JOBDEMAND_MANAGER_';

const thunk = {
  tableGet: {
    REQUESTTYPE: THISACTION + 'TABLE_GET_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'TABLE_GET_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'TABLE_GET_FAILURETYPE',
  },
  demandDetailTableGet: {
    REQUESTTYPE: THISACTION + 'DEMANDDETAIL_TABLE_GET_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'DEMANDDETAIL_TABLE_GET_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'DEMANDDETAIL_TABLE_GET_FAILURETYPE',
  },
  taskClaimTableGet: {
    REQUESTTYPE: THISACTION + 'TASKCLAIM_TABLE_GET_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'TASKCLAIM_TABLE_GET_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'TASKCLAIM_TABLE_GET_FAILURETYPE',
  },
  jobRewardTableGet: {
    REQUESTTYPE: THISACTION + 'JOBREWARD_TABLE_GET_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'JOBREWARD_TABLE_GET_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'JOBREWARD_TABLE_GET_FAILURETYPE',
  },
  jobRewardTableFrozen: {
    REQUESTTYPE: THISACTION + 'JOBREWARD_TABLE_FROZEN_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'JOBREWARD_TABLE_FROZEN_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'JOBREWARD_TABLE_FROZEN_FAILURETYPE'
  },
  jobRewardTableUnfrozen: {
    REQUESTTYPE: THISACTION + 'JOBREWARD_TABLE_UNFROZEN_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'JOBREWARD_TABLE_UNFROZEN_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'JOBREWARD_TABLE_UNFROZEN_FAILURETYPE'
  },
};

const tableGet = params => dispatch => {
  dispatch({ type: action.DEMANDDETAIL_TABLE_HIDE });
  dispatch({ type: action.TASKCLAIM_TABLE_HIDE });
  dispatch({
    [APIS.JOBDEMAND_MANAGER_TABLE_GET_API]: {
      types: Object.values(thunk.tableGet),
      url: 'demand/jobDemandListPage.json',
      params: params,
    }
  });
};

const demandDetailTableGet = params => dispatch => dispatch({
  [APIS.JOBDEMAND_MANAGER_DEMANDDETAIL_TABLE_GET_API]: {
    types: Object.values(thunk.demandDetailTableGet),
    url: 'demand/demandDetail.json',
    params: params,
  }
});

const taskClaimTableGet = params => dispatch => dispatch({
  [APIS.JOBDEMAND_MANAGER_TASKCLAIM_TABLE_GET_API]: {
    types: Object.values(thunk.taskClaimTableGet),
    url: 'demand/taskClaim.json',
    params: params,
  }
});

const jobRewardTableGet = params => dispatch => dispatch({
  [APIS.JOBDEMAND_MANAGER_JOBREWARD_TABLE_GET_API]: {
    types: Object.values(thunk.jobRewardTableGet),
    url: 'job/jobRewardSettlement.json',
    params: params,
  }
});

const jobRewardTableFrozen = params => dispatch => dispatch({
  [APIS.JOBDEMAND_MANAGER_JOBREWARD_TABLE_FROZEN_API]: {
    types: Object.values(thunk.jobRewardTableFrozen),
    url: 'demand/frozenRewardSettlement.json',
    params: { ...params, targetStatus: 'FROZEN' },
  }
});

const jobRewardTableUnfrozen = params => dispatch => dispatch({
  [APIS.JOBDEMAND_MANAGER_JOBREWARD_TABLE_UNFROZEN_API]: {
    types: Object.values(thunk.jobRewardTableUnfrozen),
    url: 'demand/frozenRewardSettlement.json',
    params: { ...params, targetStatus: 'UNFROZEN' },
  }
});

const action = {
  DEMANDDETAIL_TABLE_SHOW: THISACTION + 'DEMANDDETAIL_TABLE_SHOW',
  DEMANDDETAIL_TABLE_HIDE: THISACTION + 'DEMANDDETAIL_TABLE_HIDE',
  TASKCLAIM_TABLE_SHOW: THISACTION + 'TASKCLAIM_TABLE_SHOW',
  TASKCLAIM_TABLE_HIDE: THISACTION + 'TASKCLAIM_TABLE_HIDE',
  JOBREWARD_TABLE_SHOW: THISACTION + 'JOBREWARD_TABLE_SHOW',
  JOBREWARD_TABLE_HIDE: THISACTION + 'JOBREWARD_TABLE_HIDE',
  MAP_RESET: THISACTION + 'MAP_RESET',
  MAP_SETDATA: THISACTION + 'MAP_SETDATA',
  MAP_SHOW: THISACTION + 'MAP_SHOW',
  MAP_HIDE: THISACTION + 'MAP_HIDE',
};

const demandDetailTableShow = () => dispatch => dispatch({
  type: action.DEMANDDETAIL_TABLE_SHOW,
});

const demandDetailTableHide = () => dispatch => dispatch({
  type: action.DEMANDDETAIL_TABLE_HIDE,
});

const taskClaimTableShow = () => dispatch => dispatch({
  type: action.TASKCLAIM_TABLE_SHOW,
});

const taskClaimTableHide = () => dispatch => dispatch({
  type: action.TASKCLAIM_TABLE_HIDE,
});

const jobRewardTableShow = () => dispatch => dispatch({
  type: action.JOBREWARD_TABLE_SHOW,
});

const jobRewardTableHide = () => dispatch => dispatch({
  type: action.JOBREWARD_TABLE_HIDE,
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
  type: action.MAP_HIDE,
});

export default {
  thunk, // 以下为接口调用
  tableGet,
  demandDetailTableGet,
  taskClaimTableGet,
  jobRewardTableGet,
  jobRewardTableFrozen,
  jobRewardTableUnfrozen,
  action,
  demandDetailTableShow,
  demandDetailTableHide,
  taskClaimTableShow,
  taskClaimTableHide,
  jobRewardTableShow,
  jobRewardTableHide,
  mapReset,
  mapSetData,
  mapShow,
  mapHide,
};