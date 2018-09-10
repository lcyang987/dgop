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
    FAILURETYPE: THISACTION + 'JOBREWARD_TABLE_FROZEN_FAILURETYPE',
  },
  jobRewardTableUnfrozen: {
    REQUESTTYPE: THISACTION + 'JOBREWARD_TABLE_UNFROZEN_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'JOBREWARD_TABLE_UNFROZEN_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'JOBREWARD_TABLE_UNFROZEN_FAILURETYPE',
  },
  depositDetailTableGet: {
    REQUESTTYPE: THISACTION + 'DEPOSITDETAIL_TABLE_GET_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'DEPOSITDETAIL_TABLE_GET_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'DEPOSITDETAIL_TABLE_GET_FAILURETYPE',
  },
  depositFlowTableGet: {
    REQUESTTYPE: THISACTION + 'DEPOSITFLOW_TABLE_GET_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'DEPOSITFLOW_TABLE_GET_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'DEPOSITFLOW_TABLE_GET_FAILURETYPE',
  },
  depositRefundFormSubmit: {
    REQUESTTYPE:THISACTION + 'DEPOSITREFUNDFORM_SUBMIT_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'DEPOSITREFUNDFORM_SUBMIT_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'DEPOSITREFUNDFORM_SUBMIT_FAILURETYPE',
  },
};

const tableGet = params => dispatch => dispatch({
  [APIS.JOBDEMAND_MANAGER_TABLE_GET_API]: {
    types: Object.values(thunk.tableGet),
    url: 'demand/jobDemandListPage.json',
    params: params,
  }
});

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

const depositDetailTableGet = params => dispatch => dispatch({
  [APIS.JOBDEMAND_MANAGER_DEPOSITDETAIL_TABLE_GET_API]: {
    types: Object.values(thunk.depositDetailTableGet),
    url: 'deposit/depositDetailListPage.json',
    params: params,
  }
});

const depositFlowTableGet = params => dispatch => dispatch({
  [APIS.JOBDEMAND_MANAGER_DEPOSITFLOW_TABLE_GET_API]: {
    types: Object.values(thunk.depositFlowTableGet),
    url: 'deposit/depositFlowListPage.json',
    params: params,
  }
});

const depositRefundFormSubmit = params => dispatch => dispatch({
  [APIS.JOBDEMAND_MANAGER_DEPOSITREFUNDFORM_SUBMIT_REQUESTTYPE]: {
    types: Object.values(thunk.depositRefundFormSubmit),
    url: 'deposit/refundDeposit.json',
    params: params,
  }
});

const action = {
  DEMANDDETAIL_TABLE_SHOW: THISACTION + 'DEMANDDETAIL_TABLE_SHOW',
  DEMANDDETAIL_TABLE_HIDE: THISACTION + 'DEMANDDETAIL_TABLE_HIDE',
  TASKCLAIM_TABLE_SHOW: THISACTION + 'TASKCLAIM_TABLE_SHOW',
  TASKCLAIM_TABLE_HIDE: THISACTION + 'TASKCLAIM_TABLE_HIDE',
  JOBREWARD_TABLE_SHOW: THISACTION + 'JOBREWARD_TABLE_SHOW',
  JOBREWARD_TABLE_HIDE: THISACTION + 'JOBREWARD_TABLE_HIDE',
  DEPOSIT_MODAL_SHOW: THISACTION + 'DEPOSIT_MODAL_SHOW',
  DEPOSIT_MODAL_HIDE: THISACTION + 'DEPOSIT_MODAL_HIDE',
  DEPOSITDETAIL_TABLE_SHOW: THISACTION + 'DEPOSITDETAIL_TABLE_SHOW',
  DEPOSITDETAIL_TABLE_HIDE: THISACTION + 'DEPOSITDETAIL_TABLE_HIDE',
  DEPOSITFLOW_TABLE_SHOW: THISACTION + 'DEPOSITFLOW_TABLE_SHOW',
  DEPOSITFLOW_TABLE_HIDE: THISACTION + 'DEPOSITFLOW_TABLE_HIDE',
  DEPOSITREFUNDFORM_SETDATA: THISACTION + 'DEPOSITREFUNDFORM_SETDATA',
  DEPOSITREFUNDFORM_RESET: THISACTION + 'DEPOSITREFUNDFORM_RESET',
  DEPOSITREFUNDFORM_SHOW: THISACTION + 'DEPOSITREFUNDFORM_SHOW',
  DEPOSITREFUNDFORM_HIDE: THISACTION + 'DEPOSITREFUNDFORM_HIDE',
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

const depositModalShow = title => dispatch => dispatch({
  type: action.DEPOSIT_MODAL_SHOW,
  value: title,
});

const depositModalHide = () => dispatch => dispatch({
  type: action.DEPOSIT_MODAL_HIDE,
});

const depositDetailTableShow = title => dispatch => dispatch({
  type: action.DEPOSITDETAIL_TABLE_SHOW,
});

const depositDetailTableHide = () => dispatch => dispatch({
  type: action.DEPOSITDETAIL_TABLE_HIDE,
});

const depositFlowTableShow = () => dispatch => dispatch({
  type: action.DEPOSITFLOW_TABLE_SHOW,
});

const depositFlowTableHide = () => dispatch => dispatch({
  type: action.DEPOSITFLOW_TABLE_HIDE,
});

const depositRefundFormSetData = params => dispatch => dispatch({
  type: action.DEPOSITREFUNDFORM_SETDATA,
  params: params,
});

const depositRefundFormReset = () => dispatch => dispatch({
  type: action.DEPOSITREFUNDFORM_RESET,
});

const depositRefundFormShow = title => dispatch => dispatch({
  type: action.DEPOSITREFUNDFORM_SHOW,
  value: title,
});

const depositRefundFormHide = () => dispatch => dispatch({
  type: action.DEPOSITREFUNDFORM_HIDE
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
  depositDetailTableGet,
  depositFlowTableGet,
  depositRefundFormSubmit,
  action, // 以下为修改数据
  demandDetailTableShow,
  demandDetailTableHide,
  taskClaimTableShow,
  taskClaimTableHide,
  jobRewardTableShow,
  jobRewardTableHide,
  depositModalShow,
  depositModalHide,
  depositDetailTableShow,
  depositDetailTableHide,
  depositFlowTableShow,
  depositFlowTableHide,
  depositRefundFormSetData,
  depositRefundFormShow,
  depositRefundFormHide,
  depositRefundFormReset,
  mapReset,
  mapSetData,
  mapShow,
  mapHide,
};