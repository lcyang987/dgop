import * as APIS from '@/middleware/api';

const THISACTION = 'MEMBER_MANAGER_';

const thunk = {
  tableGet: {
    REQUESTTYPE: THISACTION + 'TABLE_GET_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'TABLE_GET_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'TABLE_GET_FAILURETYPE',
  },
  auditInfoGet: {
    REQUESTTYPE: THISACTION + 'AUDITINFO_GET_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'AUDITINFO_GET_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'AUDITINFO_GET_FAILURETYPE',
  },
  recommendInfoGet: {
    REQUESTTYPE: THISACTION + 'RECOMMENDINFO_GET_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'RECOMMENDINFO_GET_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'RECOMMENDINFO_GET_FAILURETYPE',
  },
  addressTableGet: {
    REQUESTTYPE: THISACTION + 'ADDRESSTABLE_GET_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'ADDRESSTABLE_GET_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'ADDRESSTABLE_GET_FAILURETYPE',
  },
  bankTableGet: {
    REQUESTTYPE: THISACTION + 'BANKTABLE_GET_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'BANKTABLE_GET_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'BANKTABLE_GET_FAILURETYPE',
  },
  introducerTableGet: {
    REQUESTTYPE: THISACTION + 'INTRODUCERTABLE_GET_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'INTRODUCERTABLE_GET_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'INTRODUCERTABLE_GET_FAILURETYPE',
  },
  rebateTableGet: {
    REQUESTTYPE: THISACTION + 'REBATETABLE_GET_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'REBATETABLE_GET_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'REBATETABLE_GET_FAILURETYPE',
  },
  rebateFormSubmit: {
    REQUESTTYPE:THISACTION + 'REBATEFORM_SUBMIT_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'REBATEFORM_SUBMIT_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'REBATEFORM_SUBMIT_FAILURETYPE',
  },
}

const tableGet = params => dispatch => dispatch({
  [APIS.MEMBER_MANAGER_TABLE_GET_API]: {
    types: Object.values(thunk.tableGet),
    url: 'member/memberInfoListPage.json',
    params: params,
  }
});

const auditInfoGet = params => dispatch => dispatch({
  [APIS.MEMBER_MANAGER_AUDITINFO_GET_API]: {
    types: Object.values(thunk.auditInfoGet),
    url: 'member/memberAuthentication.json',
    params: params,
  }
});

const recommendInfoGet = params => dispatch => dispatch({
  [APIS.MEMBER_MANAGER_RECOMMENDINFO_GET_API]: {
    types: Object.values(thunk.recommendInfoGet),
    url: 'member/recommendInfo.json',
    params: params,
  }
});

const addressTableGet = params => dispatch => dispatch({
  [APIS.MEMBER_MANAGER_ADDRESSTABLE_GET_API]: {
    types: Object.values(thunk.addressTableGet),
    url: 'member/memberAddress.json',
    params: params,
  }
});

const bankTableGet = params => dispatch => dispatch({
  [APIS.MEMBER_MANAGER_BANKTABLE_GET_API]: {
    types: Object.values(thunk.bankTableGet),
    url: 'member/bankaccount.json',
    params: params,
  }
});

const introducerTableGet = params => dispatch => dispatch({
  [APIS.MEMBER_MANAGER_INTRODUCERTABLE_GET_API]: {
    types: Object.values(thunk.introducerTableGet),
    url: 'member/memberIntroducerList.json',
    params: params,
  }
});

const rebateTableGet = params => dispatch => dispatch({
  [APIS.MEMBER_MANAGER_REBATETABLE_GET_API]: {
    types: Object.values(thunk.rebateTableGet),
    url: 'member/rebateList.json',
    params: params,
  }
});

const rebateFormSubmit = params => dispatch => dispatch({
  [APIS.MACHINE_MANAGER_MODELFORM_SUBMIT_API]: {
    types: Object.values(thunk.rebateFormSubmit),
    url: 'member/rebateSetting.json',
    params: params,
  }
})

const action = {
  AUDITINFO_SHOW: THISACTION + 'AUDITINFO_SHOW',
  AUDITINFO_HIDE: THISACTION + 'AUDITINFO_HIDE',
  AUDITINFO_RESET: THISACTION + 'AUDITINFO_RESET',
  RECOMMENDINFO_SHOW: THISACTION + 'RECOMMENDINFO_SHOW',
  RECOMMENDINFO_HIDE: THISACTION + 'RECOMMENDINFO_HIDE',
  RECOMMENDINFO_RESET: THISACTION + 'RECOMMENDINFO_RESET',
  ADDRESSTABLE_RESET: THISACTION + 'ADDRESSTABLE_RESET',
  ADDRESSTABLE_SET: THISACTION + 'ADDRESSTABLE_SET',
  ADDRESSTABLE_SHOW: THISACTION + 'ADDRESSTABLE_SHOW',
  ADDRESSTABLE_HIDE: THISACTION + 'ADDRESSTABLE_HIDE',
  BANKTABLE_RESET: THISACTION + 'BANKTABLE_RESET',
  BANKTABLE_SET: THISACTION + 'BANKTABLE_SET',
  BANKTABLE_SHOW: THISACTION + 'BANKTABLE_SHOW',
  BANKTABLE_HIDE: THISACTION + 'BANKTABLE_HIDE',
  INTRODUCERTABLE_RESET: THISACTION + 'INTRODUCERTABLE_RESET',
  INTRODUCERTABLE_SET: THISACTION + 'INTRODUCERTABLE_SET',
  INTRODUCERTABLE_SHOW: THISACTION + 'INTRODUCERTABLE_SHOW',
  INTRODUCERTABLE_HIDE: THISACTION + 'INTRODUCERTABLE_HIDE',
  REBATETABLE_RESET: THISACTION + 'REBATETABLE_RESET',
  REBATETABLE_SET: THISACTION + 'REBATETABLE_SET',
  REBATETABLE_SHOW: THISACTION + 'REBATETABLE_SHOW',
  REBATETABLE_HIDE: THISACTION + 'REBATETABLE_HIDE',
  REBATEFORM_SETDATA: THISACTION + 'REBATEFORM_SETDATA',
  REBATEFORM_RESET: THISACTION + 'REBATEFORM_RESET',
  REBATEFORM_SHOW: THISACTION + 'REBATEFORM_SHOW',
  REBATEFORM_HIDE: THISACTION + 'REBATEFORM_HIDE',
  CAROUSEL_RESET: THISACTION + 'CAROUSEL_RESET',
  CAROUSEL_SETDATA: THISACTION + 'CAROUSEL_SETDATA',
  CAROUSEL_SHOW: THISACTION + 'CAROUSEL_SHOW',
  CAROUSEL_HIDE: THISACTION + 'CAROUSEL_HIDE',
  MAP_RESET: THISACTION + 'MAP_RESET',
  MAP_SETDATA: THISACTION + 'MAP_SETDATA',
  MAP_SHOW: THISACTION + 'MAP_SHOW',
  MAP_HIDE: THISACTION + 'MAP_HIDE',
};

const auditInfoShow = title => dispatch => dispatch({
  type: action.AUDITINFO_SHOW,
  value: title,
});

const auditInfoHide = () => dispatch => dispatch({
  type: action.AUDITINFO_HIDE,
});

const auditInfoReset = () => dispatch => dispatch({
  type: action.AUDITINFO_RESET,
});

const recommendInfoShow = title => dispatch => dispatch({
  type: action.RECOMMENDINFO_SHOW,
  value: title,
});

const recommendInfoHide = () => dispatch => dispatch({
  type: action.RECOMMENDINFO_HIDE,
});

const recommendInfoReset = () => dispatch => dispatch({
  type: action.RECOMMENDINFO_RESET,
});

const addressTableReset = () => dispatch => dispatch({
  type: action.ADDRESSTABLE_RESET,
});

const addressTableSet = params => dispatch => dispatch({
  type: action.ADDRESSTABLE_SET,
  params: params,
});

const addressTableShow = title => dispatch => dispatch({
  type: action.ADDRESSTABLE_SHOW,
  value: title,
});

const addressTableHide = () => dispatch => dispatch({
  type: action.ADDRESSTABLE_HIDE,
});

const bankTableReset = () => dispatch => dispatch({
  type: action.BANKTABLE_RESET,
});

const bankTableSet = params => dispatch => dispatch({
  type: action.BANKTABLE_SET,
  params: params,
});

const bankTableShow = title => dispatch => dispatch({
  type: action.BANKTABLE_SHOW,
  value: title,
});

const bankTableHide = () => dispatch => dispatch({
  type: action.BANKTABLE_HIDE,
});

const introducerTableReset = () => dispatch => dispatch({
  type: action.INTRODUCERTABLE_RESET,
});

const introducerTableSet = params => dispatch => dispatch({
  type: action.INTRODUCERTABLE_SET,
  params: params,
});

const introducerTableShow = title => dispatch => dispatch({
  type: action.INTRODUCERTABLE_SHOW,
  value: title,
});

const introducerTableHide = () => dispatch => dispatch({
  type: action.INTRODUCERTABLE_HIDE,
});

const rebateTableReset = () => dispatch => dispatch({
  type: action.REBATETABLE_RESET,
});

const rebateTableSet = params => dispatch => dispatch({
  type: action.REBATETABLE_SET,
  params: params,
});

const rebateTableShow = title => dispatch => dispatch({
  type: action.REBATETABLE_SHOW,
  value: title,
});

const rebateTableHide = () => dispatch => dispatch({
  type: action.REBATETABLE_HIDE,
});

const rebateFormSetData = params => dispatch => dispatch({
  type: action.REBATEFORM_SETDATA,
  params: params,
});

const rebateFormReset = () => dispatch => dispatch({
  type: action.REBATEFORM_RESET,
});

const rebateFormShow = title => dispatch => dispatch({
  type: action.REBATEFORM_SHOW,
  value: title,
});

const rebateFormHide = () => dispatch => dispatch({
  type: action.REBATEFORM_HIDE
});

const carouselReset = () => dispatch => dispatch({
  type: action.CAROUSEL_RESET,
});

const carouselSetData = params => dispatch => dispatch({
  type: action.CAROUSEL_SETDATA,
  params: params,
});

const carouselShow = title => dispatch => dispatch({
  type: action.CAROUSEL_SHOW,
  value: title,
});

const carouselHide = () => dispatch => dispatch({
  type: action.CAROUSEL_HIDE,
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
  auditInfoGet,
  recommendInfoGet,
  addressTableGet,
  bankTableGet,
  introducerTableGet,
  rebateTableGet,
  rebateFormSubmit,
  action, // 以下为修改数据
  auditInfoShow,
  auditInfoHide,
  auditInfoReset,
  recommendInfoShow,
  recommendInfoHide,
  recommendInfoReset,
  addressTableReset,
  addressTableSet,
  addressTableShow,
  addressTableHide,
  bankTableReset,
  bankTableSet,
  bankTableShow,
  bankTableHide,
  introducerTableReset,
  introducerTableSet,
  introducerTableShow,
  introducerTableHide,
  rebateTableReset,
  rebateTableSet,
  rebateTableShow,
  rebateTableHide,
  rebateFormSetData,
  rebateFormShow,
  rebateFormHide,
  rebateFormReset,
  carouselReset,
  carouselSetData,
  carouselShow,
  carouselHide,
  mapReset,
  mapSetData,
  mapShow,
  mapHide,
};