import { combineReducers } from 'redux';
import { JOBDEMAND_MANAGER } from '@/actions';

const thunkTypes = JOBDEMAND_MANAGER.thunk;
const actionTypes = JOBDEMAND_MANAGER.action;

const tableInitState = {
  data: [],
  loading: false,
  count: 0,
  searchData: {
    currentPage: 1,
    pageSize: 10,
  },
};

const table = (state = tableInitState, action) => {
  switch (action.type) {
    case thunkTypes.tableGet.REQUESTTYPE:
      return {
        ...state,
        searchData: {
          ...state.searchData,
          ...action.params,
        },
        loading: true,
      }
    case thunkTypes.tableGet.SUCCESSTYPE:
      return {
        ...state,
        data: action.response.result,
        count: action.response.count,
        loading: false
      }
    case thunkTypes.tableGet.FAILURETYPE:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
};

const demandDetailTableInitState = {
  data: [],
  visible: false,
  loading: false,
  searchData: {},
};

const demandDetailTable = (state = demandDetailTableInitState, action) => {
  switch (action.type) {
    case thunkTypes.demandDetailTableGet.REQUESTTYPE:
      return {
        ...state,
        searchData: {
          ...state.searchData,
          ...action.params,
        },
        loading: true,
      }
    case thunkTypes.demandDetailTableGet.SUCCESSTYPE:
      return {
        ...state,
        data: action.response.result,
        loading: false
      }
    case thunkTypes.demandDetailTableGet.FAILURETYPE:
      return {
        ...state,
        loading: false,
      }
    case actionTypes.DEMANDDETAIL_TABLE_SHOW:
      return {
        ...state,
        visible: true
      }
    case actionTypes.DEMANDDETAIL_TABLE_HIDE:
      return {
        ...state,
        visible: false
      }
    default:
      return state
  }
};

const taskClaimTableInitState = {
  data: [],
  visible: false,
  loading: false,
  searchData: {},
};

const taskClaimTable = (state = taskClaimTableInitState, action) => {
  switch (action.type) {
    case thunkTypes.taskClaimTableGet.REQUESTTYPE:
      return {
        ...state,
        searchData: {
          ...state.searchData,
          ...action.params,
        },
        loading: true,
      }
    case thunkTypes.taskClaimTableGet.SUCCESSTYPE:
      return {
        ...state,
        data: action.response.result,
        loading: false
      }
    case thunkTypes.taskClaimTableGet.FAILURETYPE:
      return {
        ...state,
        loading: false,
      }
    case actionTypes.TASKCLAIM_TABLE_SHOW:
      return {
        ...state,
        visible: true
      }
    case actionTypes.TASKCLAIM_TABLE_HIDE:
      return {
        ...state,
        visible: false
      }
    default:
      return state
  }
};

const jobRewardTableInitState = {
  data: [],
  visible: false,
  loading: false,
  searchData: {},
};

const jobRewardTable = (state = jobRewardTableInitState, action) => {
  switch (action.type) {
    case thunkTypes.jobRewardTableGet.REQUESTTYPE:
      return {
        ...state,
        searchData: {
          ...state.searchData,
          ...action.params,
        },
        loading: true,
      }
    case thunkTypes.jobRewardTableGet.SUCCESSTYPE:
      return {
        ...state,
        data: action.response.result,
        loading: false
      }
    case thunkTypes.jobRewardTableGet.FAILURETYPE:
      return {
        ...state,
        loading: false,
      }
    case actionTypes.JOBREWARD_TABLE_SHOW:
      return {
        ...state,
        visible: true
      }
    case actionTypes.JOBREWARD_TABLE_HIDE:
      return {
        ...state,
        visible: false
      }
    case thunkTypes.jobRewardTableFrozen.REQUESTTYPE:
      return {
        ...state,
        loading: true,
      }
    case thunkTypes.jobRewardTableFrozen.SUCCESSTYPE:
      return {
        ...state,
        loading: false,
      }
    case thunkTypes.jobRewardTableFrozen.FAILURETYPE:
      return {
        ...state,
        loading: false,
      }
    case thunkTypes.jobRewardTableUnfrozen.REQUESTTYPE:
      return {
        ...state,
        loading: true,
      }
    case thunkTypes.jobRewardTableUnfrozen.SUCCESSTYPE:
      return {
        ...state,
        loading: false,
      }
    case thunkTypes.jobRewardTableUnfrozen.FAILURETYPE:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
};

const depositModalInitState = {
  visible: false,
  loading: false,
  title: '',
};

const depositModal = (state = depositModalInitState, action) => {
  switch (action.type) {
    case actionTypes.DEPOSIT_MODAL_SHOW:
      return {
        ...state,
        title: action.value,
        visible: true
      }
    case actionTypes.DEPOSIT_MODAL_HIDE:
      return {
        ...state,
        visible: false
      }
    default:
      return state
  }
};

const depositDetailTableInitState = {
  data: [],
  visible: false,
  loading: false,
  count: 0,
  searchData: {
    currentPage: 1,
    pageSize: 10,
  },
  params: {},
};

const depositDetailTable = (state = depositDetailTableInitState, action) => {
  switch (action.type) {
    case thunkTypes.depositDetailTableGet.REQUESTTYPE:
      return {
        ...state,
        searchData: {
          ...state.searchData,
          ...action.params,
        },
        loading: true,
      }
    case thunkTypes.depositDetailTableGet.SUCCESSTYPE:
      return {
        ...state,
        data: action.response.result,
        count: action.response.count,
        loading: false
      }
    case thunkTypes.depositDetailTableGet.FAILURETYPE:
      return {
        ...state,
        loading: false,
      }
    case actionTypes.DEPOSITDETAIL_TABLE_SHOW:
      return {
        ...state,
        visible: true
      }
    case actionTypes.DEPOSITDETAIL_TABLE_HIDE:
      return {
        ...state,
        visible: false
      }
    default:
      return state
  }
};

const depositFlowTableInitState = {
  data: [],
  visible: false,
  loading: false,
  count: 0,
  searchData: {
    currentPage: 1,
    pageSize: 10,
  },
  params: {},
};

const depositFlowTable = (state = depositFlowTableInitState, action) => {
  switch (action.type) {
    case thunkTypes.depositFlowTableGet.REQUESTTYPE:
      return {
        ...state,
        searchData: {
          ...state.searchData,
          ...action.params,
        },
        loading: true,
      }
    case thunkTypes.depositFlowTableGet.SUCCESSTYPE:
      return {
        ...state,
        data: action.response.result,
        count: action.response.count,
        loading: false
      }
    case thunkTypes.depositFlowTableGet.FAILURETYPE:
      return {
        ...state,
        loading: false,
      }
    case actionTypes.DEPOSITFLOW_TABLE_SHOW:
      return {
        ...state,
        visible: true
      }
    case actionTypes.DEPOSITFLOW_TABLE_HIDE:
      return {
        ...state,
        visible: false
      }
    default:
      return state
  }
};

const depositRefundFormInitState = {
  data: {},
  visible: false,
  loading: false,
  title: '',
}

const depositRefundForm = (state = depositRefundFormInitState, action) => {
  switch (action.type) {
    case actionTypes.DEPOSITREFUNDFORM_SETDATA:
      return {
        ...state,
        data: action.params,
      }
    case actionTypes.DEPOSITREFUNDFORM_RESET:
      return {
        ...state,
        data: depositRefundFormInitState.data,
      }
    case actionTypes.DEPOSITREFUNDFORM_SHOW:
      return {
        ...state,
        title: action.value,
        visible: true,
      }
    case actionTypes.DEPOSITREFUNDFORM_HIDE:
      return {
        ...state,
        visible: false,
      }
    case thunkTypes.depositRefundFormSubmit.REQUESTTYPE:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.params,
        },
        loading: true,
      }
    case thunkTypes.depositRefundFormSubmit.SUCCESSTYPE:
      return {
        ...state,
        loading: false,
      }
    case thunkTypes.depositRefundFormSubmit.FAILURETYPE:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}

const mapInitState = {
  data: {},
  visible: false,
  title: '',
};

const map = (state = mapInitState, action) => {
  switch (action.type) {
    case actionTypes.MAP_RESET:
      return {
        ...state,
        data: mapInitState.data
      }
    case actionTypes.MAP_SETDATA:
      return {
        ...state,
        data: action.params,
      }
    case actionTypes.MAP_SHOW:
      return {
        ...state,
        title: action.value,
        visible: true
      }
    case actionTypes.MAP_HIDE:
      return {
        ...state,
        visible: false
      }
    default:
      return state
  }
};

export default combineReducers({
  table,
  demandDetailTable,
  taskClaimTable,
  jobRewardTable,
  depositModal,
  depositDetailTable,
  depositFlowTable,
  depositRefundForm,
  map,
});