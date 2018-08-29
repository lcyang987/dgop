import { combineReducers } from 'redux';
import { MEMBER_MANAGER } from '@/actions';

const thunkTypes = MEMBER_MANAGER.thunk;
const actionTypes = MEMBER_MANAGER.action;

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
      action.response.result.filter(t => t.headPortrait ? t.headPortrait = [t.headPortrait] : [])
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

const auditInfoInitState = {
  data: {},
  visible: false,
  loading: false,
  title: '',
};

const auditInfo = (state = auditInfoInitState, action) => {
  switch (action.type) {
    case thunkTypes.auditInfoGet.REQUESTTYPE:
      return {
        ...state,
        loading: true,
      }
    case thunkTypes.auditInfoGet.SUCCESSTYPE:
      return {
        ...state,
        data: action.response.result || {},
        loading: false,
      }
    case thunkTypes.auditInfoGet.FAILURETYPE:
      return {
        ...state,
        visible: false,
        loading: false,
      }
    case actionTypes.AUDITINFO_SHOW:
      return {
        ...state,
        title: action.value,
        visible: true
      }
    case actionTypes.AUDITINFO_HIDE:
      return {
        ...state,
        visible: false
      }
    case actionTypes.AUDITINFO_RESET:
      return {
        ...state,
        data: auditInfoInitState.data
      }
    default:
      return state
  }
};

const recommendInfoInitState = {
  data: {},
  visible: false,
  loading: false,
  title: '',
};

const recommendInfo = (state = recommendInfoInitState, action) => {
  switch (action.type) {
    case thunkTypes.recommendInfoGet.REQUESTTYPE:
      return {
        ...state,
        loading: true,
      }
    case thunkTypes.recommendInfoGet.SUCCESSTYPE:
      return {
        ...state,
        data: action.response.result || {},
        loading: false,
      }
    case thunkTypes.recommendInfoGet.FAILURETYPE:
      return {
        ...state,
        visible: false,
        loading: false,
      }
    case actionTypes.RECOMMENDINFO_SHOW:
      return {
        ...state,
        title: action.value,
        visible: true
      }
    case actionTypes.RECOMMENDINFO_HIDE:
      return {
        ...state,
        visible: false
      }
    case actionTypes.RECOMMENDINFO_RESET:
      return {
        ...state,
        data: recommendInfoInitState.data
      }
    default:
      return state
  }
};

const addressTableInitState = {
  data: [],
  params: {},
  visible: false,
  loading: false,
}

const addressTable = (state = addressTableInitState, action) => {
  switch (action.type) {
    case thunkTypes.addressTableGet.REQUESTTYPE:
      return {
        ...state,
        loading: true,
      }
    case thunkTypes.addressTableGet.SUCCESSTYPE:
      return {
        ...state,
        data: action.response.result.map(item => ({ ...item, loading: false })),
        loading: false,
      }
    case thunkTypes.addressTableGet.FAILURETYPE:
      return {
        ...state,
        loading: false,
      }
    case actionTypes.ADDRESSTABLE_RESET:
      return {
        ...state,
        data: addressTableInitState.data,
      }
    case actionTypes.ADDRESSTABLE_SET:
      return {
        ...state,
        params: action.params,
      }
    case actionTypes.ADDRESSTABLE_SHOW:
      return {
        ...state,
        visible: true,
      }
    case actionTypes.ADDRESSTABLE_HIDE:
      return {
        ...state,
        visible: false,
      }
    default:
      return state
  }
}

const bankTableInitState = {
  data: [],
  params: {},
  visible: false,
  loading: false,
}

const bankTable = (state = bankTableInitState, action) => {
  switch (action.type) {
    case thunkTypes.bankTableGet.REQUESTTYPE:
      return {
        ...state,
        loading: true,
      }
    case thunkTypes.bankTableGet.SUCCESSTYPE:
      return {
        ...state,
        data: action.response.result.map(item => ({ ...item, loading: false })),
        loading: false,
      }
    case thunkTypes.bankTableGet.FAILURETYPE:
      return {
        ...state,
        loading: false,
      }
    case actionTypes.BANKTABLE_RESET:
      return {
        ...state,
        data: bankTableInitState.data,
      }
    case actionTypes.BANKTABLE_SET:
      return {
        ...state,
        params: action.params,
      }
    case actionTypes.BANKTABLE_SHOW:
      return {
        ...state,
        visible: true,
      }
    case actionTypes.BANKTABLE_HIDE:
      return {
        ...state,
        visible: false,
      }
    default:
      return state
  }
}

const introducerTableInitState = {
  data: [],
  params: {},
  visible: false,
  loading: false,
  count: 0,
  searchData: {
    currentPage: 1,
    pageSize: 10,
  },
}

const introducerTable = (state = introducerTableInitState, action) => {
  switch (action.type) {
    case thunkTypes.introducerTableGet.REQUESTTYPE:
      return {
        ...state,
        searchData: {
          ...state.searchData,
          ...action.params,
        },
        loading: true,
      }
    case thunkTypes.introducerTableGet.SUCCESSTYPE:
      return {
        ...state,
        data: action.response.result,
        count: action.response.count,
        loading: false
      }
    case thunkTypes.introducerTableGet.FAILURETYPE:
      return {
        ...state,
        loading: false,
      }
    case actionTypes.INTRODUCERTABLE_RESET:
      return {
        ...state,
        data: introducerTableInitState.data,
      }
    case actionTypes.INTRODUCERTABLE_SET:
      return {
        ...state,
        params: action.params,
      }
    case actionTypes.INTRODUCERTABLE_SHOW:
      return {
        ...state,
        visible: true,
      }
    case actionTypes.INTRODUCERTABLE_HIDE:
      return {
        ...state,
        visible: false,
      }
    default:
      return state
  }
}

const rebateTableInitState = {
  data: [],
  params: {},
  visible: false,
  loading: false,
}

const rebateTable = (state = rebateTableInitState, action) => {
  switch (action.type) {
    case thunkTypes.rebateTableGet.REQUESTTYPE:
      return {
        ...state,
        loading: true,
      }
    case thunkTypes.rebateTableGet.SUCCESSTYPE:
      return {
        ...state,
        data: action.response.result.map(item => ({ ...item, loading: false, id: item.jobTypeId })),
        loading: false,
      }
    case thunkTypes.rebateTableGet.FAILURETYPE:
      return {
        ...state,
        loading: false,
      }
    case actionTypes.REBATETABLE_RESET:
      return {
        ...state,
        data: rebateTableInitState.data,
      }
    case actionTypes.REBATETABLE_SET:
      return {
        ...state,
        params: action.params,
      }
    case actionTypes.REBATETABLE_SHOW:
      return {
        ...state,
        visible: true,
      }
    case actionTypes.REBATETABLE_HIDE:
      return {
        ...state,
        visible: false,
      }
    default:
      return state
  }
}

const rebateFormInitState = {
  data: {},
  visible: false,
  loading: false,
  title: '',
}

const rebateForm = (state = rebateFormInitState, action) => {
  switch (action.type) {
    case actionTypes.REBATEFORM_SETDATA:
      return {
        ...state,
        data: action.params,
      }
    case actionTypes.REBATEFORM_RESET:
      return {
        ...state,
        data: rebateFormInitState.data,
      }
    case actionTypes.REBATEFORM_SHOW:
      return {
        ...state,
        title: action.value,
        visible: true,
      }
    case actionTypes.REBATEFORM_HIDE:
      return {
        ...state,
        visible: false,
      }
    case thunkTypes.rebateFormSubmit.REQUESTTYPE:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.params,
        },
        loading: true,
      }
    case thunkTypes.rebateFormSubmit.SUCCESSTYPE:
      return {
        ...state,
        loading: false,
      }
    case thunkTypes.rebateFormSubmit.FAILURETYPE:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}

const carouselInitState = {
  data: [],
  visible: false,
  title: '',
};

const carousel = (state = carouselInitState, action) => {
  switch (action.type) {
    case actionTypes.CAROUSEL_RESET:
      return {
        ...state,
        data: carouselInitState.data
      }
    case actionTypes.CAROUSEL_SETDATA:
      return {
        ...state,
        data: action.params,
      }
    case actionTypes.CAROUSEL_SHOW:
      return {
        ...state,
        title: action.value,
        visible: true
      }
    case actionTypes.CAROUSEL_HIDE:
      return {
        ...state,
        visible: false
      }
    default:
      return state
  }
};

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
  auditInfo,
  recommendInfo,
  addressTable,
  bankTable,
  introducerTable,
  rebateTable,
  rebateForm,
  carousel,
  map,
});