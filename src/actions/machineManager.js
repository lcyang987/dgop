import * as APIS from '@/middleware/api';

const THISACTION = 'MACHINE_MANAGER_';

const thunk = {
  tableGet: {
    REQUESTTYPE:THISACTION + 'TABLE_GET_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'TABLE_GET_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'TABLE_GET_FAILURETYPE',
  },
  tableStatusToggle: {
    REQUESTTYPE:THISACTION + 'TABLE_STATUS_TOGGLE_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'TABLE_STATUS_TOGGLE_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'TABLE_STATUS_TOGGLE_FAILURETYPE',
  },
  formGet: {
    REQUESTTYPE:THISACTION + 'FORM_GET_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'FORM_GET_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'FORM_GET_FAILURETYPE',
  },
  formSubmit: {
    REQUESTTYPE:THISACTION + 'FORM_SUBMIT_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'FORM_SUBMIT_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'FORM_SUBMIT_FAILURETYPE',
  },
  tableRemove: {
    REQUESTTYPE:THISACTION + 'TABLE_REMOVE_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'TABLE_REMOVE_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'TABLE_REMOVE_FAILURETYPE'
  },
  brandTableGet: {
    REQUESTTYPE:THISACTION + 'BRANDTABLE_GET_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'BRANDTABLE_GET_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'BRANDTABLE_GET_FAILURETYPE',
  },
  brandTableStatusToggle: {
    REQUESTTYPE:THISACTION + 'BRANDTABLE_STATUS_TOGGLE_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'BRANDTABLE_STATUS_TOGGLE_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'BRANDTABLE_STATUS_TOGGLE_FAILURETYPE',
  },
  brandFormSubmit: {
    REQUESTTYPE:THISACTION + 'BRANDFORM_SUBMIT_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'BRANDFORM_SUBMIT_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'BRANDFORM_SUBMIT_FAILURETYPE',
  },
  brandTableRemove: {
    REQUESTTYPE:THISACTION + 'BRANDTABLE_REMOVE_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'BRANDTABLE_REMOVE_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'BRANDTABLE_REMOVE_FAILURETYPE'
  },
  componentTableGet: {
    REQUESTTYPE:THISACTION + 'COMPONENTTABLE_GET_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'COMPONENTTABLE_GET_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'COMPONENTTABLE_GET_FAILURETYPE',
  },
  componentFormSubmit: {
    REQUESTTYPE:THISACTION + 'COMPONENTFORM_SUBMIT_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'COMPONENTFORM_SUBMIT_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'COMPONENTFORM_SUBMIT_FAILURETYPE',
  },
  componentTableRemove: {
    REQUESTTYPE:THISACTION + 'COMPONENTTABLE_REMOVE_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'COMPONENTTABLE_REMOVE_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'COMPONENTTABLE_REMOVE_FAILURETYPE'
  },
  modelTableGet: {
    REQUESTTYPE:THISACTION + 'MODELTABLE_GET_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'MODELTABLE_GET_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'MODELTABLE_GET_FAILURETYPE',
  },
  modelFormSubmit: {
    REQUESTTYPE:THISACTION + 'MODELFORM_SUBMIT_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'MODELFORM_SUBMIT_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'MODELFORM_SUBMIT_FAILURETYPE',
  },
  modelTableRemove: {
    REQUESTTYPE:THISACTION + 'MODELTABLE_REMOVE_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'MODELTABLE_REMOVE_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'MODELTABLE_REMOVE_FAILURETYPE'
  },
}

const tableGet = params => dispatch => dispatch({
  [APIS.MACHINE_MANAGER_TABLE_GET_API]: {
    types: Object.values(thunk.tableGet),
    url: 'mach/machineListPage.json',
    params: params,
  }
});

const tableStatusToggle = params => dispatch => dispatch({
  [APIS.MACHINE_MANAGER_TABLE_STATUS_TOGGLE_API]: {
    types: Object.values(thunk.tableStatusToggle),
    url: 'mach/updateMachineInfo.json',
    params: params,
  }
});

const formGet = params => dispatch => dispatch({
  [APIS.MACHINE_MANAGER_FORM_GET_API]: {
    types: Object.values(thunk.formGet),
    url: 'mach/machineDetail.json',
    params: params,
  }
});

const formAddSubmit = params => ({
  [APIS.MACHINE_MANAGER_FORM_ADD_SUBMIT_API]: {
    types: Object.values(thunk.formSubmit),
    url: 'mach/addMachineInfo.json',
    params: params,
  }
})

const formEditSubmit = params => ({
  [APIS.MACHINE_MANAGER_FORM_EDIT_SUBMIT_API]: {
    types: Object.values(thunk.formSubmit),
    url: 'mach/updateMachineInfo.json',
    params: params,
  }
})

const formSubmit = params => dispatch => {
  if (params.id) {
    return dispatch(formEditSubmit(params));
  } else {
    return dispatch(formAddSubmit(params));
  }
};

const tableRemove = params => dispatch => dispatch({
  [APIS.MACHINE_MANAGER_TABLE_REMOVE_API]: {
    types: Object.values(thunk.tableRemove),
    url: 'mach/delMachineInfo.json',
    params: params,
  }
});

const brandTableGet = params => dispatch => dispatch({
  [APIS.MACHINE_MANAGER_BRANDTABLE_GET_API]: {
    types: Object.values(thunk.brandTableGet),
    url: 'mach/queryBrandByMachineId.json',
    params: params,
  }
});

const brandTableStatusToggle = params => dispatch => dispatch({
  [APIS.MACHINE_MANAGER_BRANDTABLE_STATUS_TOGGLE_API]: {
    types: Object.values(thunk.brandTableStatusToggle),
    url: 'mach/updateMachineBrand.json',
    params: params,
  }
});

const brandFormAddSubmit = params => ({
  [APIS.MACHINE_MANAGER_BRANDFORM_ADD_SUBMIT_API]: {
    types: Object.values(thunk.brandFormSubmit),
    url: 'mach/addMachineBrand.json',
    params: params,
  }
})

const brandFormEditSubmit = params => ({
  [APIS.MACHINE_MANAGER_BRANDFORM_EDIT_SUBMIT_API]: {
    types: Object.values(thunk.brandFormSubmit),
    url: 'mach/updateMachineBrand.json',
    params: params,
  }
})

const brandFormSubmit = params => dispatch => {
  if (params.id) {
    return dispatch(brandFormEditSubmit(params));
  } else {
    return dispatch(brandFormAddSubmit(params));
  }
};

const brandTableRemove = params => dispatch => dispatch({
  [APIS.MACHINE_MANAGER_BRANDTABLE_REMOVE_API]: {
    types: Object.values(thunk.brandTableRemove),
    url: 'mach/delMachineBrand.json',
    params: params,
  }
});

const componentTableGet = params => dispatch => dispatch({
  [APIS.MACHINE_MANAGER_COMPONENTTABLE_GET_API]: {
    types: Object.values(thunk.componentTableGet),
    url: 'mach/queryComponentByMachineId.json',
    params: params,
  }
});

const componentFormAddSubmit = params => ({
  [APIS.MACHINE_MANAGER_COMPONENTFORM_ADD_SUBMIT_API]: {
    types: Object.values(thunk.componentFormSubmit),
    url: 'mach/addMachineComponent.json',
    params: params,
  }
})

const componentFormEditSubmit = params => ({
  [APIS.MACHINE_MANAGER_COMPONENTFORM_EDIT_SUBMIT_API]: {
    types: Object.values(thunk.componentFormSubmit),
    url: 'mach/updateMachineComponent.json',
    params: params,
  }
})

const componentFormSubmit = params => dispatch => {
  if (params.id) {
    return dispatch(componentFormEditSubmit(params));
  } else {
    return dispatch(componentFormAddSubmit(params));
  }
};

const componentTableRemove = params => dispatch => dispatch({
  [APIS.MACHINE_MANAGER_COMPONENTTABLE_REMOVE_API]: {
    types: Object.values(thunk.componentTableRemove),
    url: 'mach/delMachineComponent.json',
    params: params,
  }
});

const modelTableGet = params => dispatch => dispatch({
  [APIS.MACHINE_MANAGER_MODELTABLE_GET_API]: {
    types: Object.values(thunk.modelTableGet),
    url: 'mach/queryModelByMachineId.json',
    params: params,
  }
});

const modelFormAddSubmit = params => ({
  [APIS.MACHINE_MANAGER_MODELFORM_ADD_SUBMIT_API]: {
    types: Object.values(thunk.modelFormSubmit),
    url: 'mach/addMachineModel.json',
    params: params,
  }
})

const modelFormEditSubmit = params => ({
  [APIS.MACHINE_MANAGER_MODELFORM_EDIT_SUBMIT_API]: {
    types: Object.values(thunk.modelFormSubmit),
    url: 'mach/updateMachineModel.json',
    params: params,
  }
})

const modelFormSubmit = params => dispatch => {
  if (params.id) {
    return dispatch(modelFormEditSubmit(params));
  } else {
    return dispatch(modelFormAddSubmit(params));
  }
};

const modelTableRemove = params => dispatch => dispatch({
  [APIS.MACHINE_MANAGER_MODELTABLE_REMOVE_API]: {
    types: Object.values(thunk.modelTableRemove),
    url: 'mach/delMachineModel.json',
    params: params,
  }
});

const action = {
  FORM_SHOW: THISACTION + 'FORM_SHOW',
  FORM_HIDE: THISACTION + 'FORM_HIDE',
  FORM_RESET: THISACTION + 'FORM_RESET',
  BRANDTABLE_RESET: THISACTION + 'BRANDTABLE_RESET',
  BRANDTABLE_SHOW: THISACTION + 'BRANDTABLE_SHOW',
  BRANDTABLE_HIDE: THISACTION + 'BRANDTABLE_HIDE',
  BRANDFORM_SETDATA: THISACTION + 'BRANDFORM_SETDATA',
  BRANDFORM_RESET: THISACTION + 'BRANDFORM_RESET',
  BRANDFORM_SHOW: THISACTION + 'BRANDFORM_SHOW',
  BRANDFORM_HIDE: THISACTION + 'BRANDFORM_HIDE',
  COMPONENTTABLE_RESET: THISACTION + 'COMPONENTTABLE_RESET',
  COMPONENTTABLE_SHOW: THISACTION + 'COMPONENTTABLE_SHOW',
  COMPONENTTABLE_HIDE: THISACTION + 'COMPONENTTABLE_HIDE',
  COMPONENTFORM_SETDATA: THISACTION + 'COMPONENTFORM_SETDATA',
  COMPONENTFORM_RESET: THISACTION + 'COMPONENTFORM_RESET',
  COMPONENTFORM_SHOW: THISACTION + 'COMPONENTFORM_SHOW',
  COMPONENTFORM_HIDE: THISACTION + 'COMPONENTFORM_HIDE',
  MODELTABLE_RESET: THISACTION + 'MODELTABLE_RESET',
  MODELTABLE_SHOW: THISACTION + 'MODELTABLE_SHOW',
  MODELTABLE_HIDE: THISACTION + 'MODELTABLE_HIDE',
  MODELFORM_SETDATA: THISACTION + 'MODELFORM_SETDATA',
  MODELFORM_RESET: THISACTION + 'MODELFORM_RESET',
  MODELFORM_SHOW: THISACTION + 'MODELFORM_SHOW',
  MODELFORM_HIDE: THISACTION + 'MODELFORM_HIDE',
};

const formShow = title => dispatch => dispatch({
  type: action.FORM_SHOW,
  value: title,
});

const formHide = () => dispatch => dispatch({
  type: action.FORM_HIDE
});

const formReset = () => dispatch => dispatch({
  type: action.FORM_RESET,
});

const brandTableReset = () => dispatch => dispatch({
  type: action.BRANDTABLE_RESET,
});

const brandTableShow = title => dispatch => dispatch({
  type: action.BRANDTABLE_SHOW,
  value: title,
});

const brandTableHide = () => dispatch => dispatch({
  type: action.BRANDTABLE_HIDE
});

const brandFormSetData = params => dispatch => dispatch({
  type: action.BRANDFORM_SETDATA,
  params: params,
});

const brandFormReset = () => dispatch => dispatch({
  type: action.BRANDFORM_RESET,
});

const brandFormShow = title => dispatch => dispatch({
  type: action.BRANDFORM_SHOW,
  value: title,
});

const brandFormHide = () => dispatch => dispatch({
  type: action.BRANDFORM_HIDE
});

const componentTableReset = () => dispatch => dispatch({
  type: action.COMPONENTTABLE_RESET,
});

const componentTableShow = title => dispatch => dispatch({
  type: action.COMPONENTTABLE_SHOW,
  value: title,
});

const componentTableHide = () => dispatch => dispatch({
  type: action.COMPONENTTABLE_HIDE
});

const componentFormSetData = params => dispatch => dispatch({
  type: action.COMPONENTFORM_SETDATA,
  params: params,
});

const componentFormReset = () => dispatch => dispatch({
  type: action.COMPONENTFORM_RESET,
});

const componentFormShow = title => dispatch => dispatch({
  type: action.COMPONENTFORM_SHOW,
  value: title,
});

const componentFormHide = () => dispatch => dispatch({
  type: action.COMPONENTFORM_HIDE
});

const modelTableReset = () => dispatch => dispatch({
  type: action.MODELTABLE_RESET,
});

const modelTableShow = title => dispatch => dispatch({
  type: action.MODELTABLE_SHOW,
  value: title,
});

const modelTableHide = () => dispatch => dispatch({
  type: action.MODELTABLE_HIDE
});

const modelFormSetData = params => dispatch => dispatch({
  type: action.MODELFORM_SETDATA,
  params: params,
});

const modelFormReset = () => dispatch => dispatch({
  type: action.MODELFORM_RESET,
});

const modelFormShow = title => dispatch => dispatch({
  type: action.MODELFORM_SHOW,
  value: title,
});

const modelFormHide = () => dispatch => dispatch({
  type: action.MODELFORM_HIDE
});

export default {
  thunk, // 以下为接口调用
  tableGet,
  tableStatusToggle,
  formGet,
  formSubmit,
  tableRemove,
  brandTableGet,
  brandTableStatusToggle,
  brandFormSubmit,
  brandTableRemove,
  componentTableGet,
  componentFormSubmit,
  componentTableRemove,
  modelTableGet,
  modelFormSubmit,
  modelTableRemove,
  action, // 以下为修改数据
  formShow,
  formHide,
  formReset,
  brandTableReset,
  brandTableShow,
  brandTableHide,
  brandFormSetData,
  brandFormShow,
  brandFormHide,
  brandFormReset,
  componentTableReset,
  componentTableShow,
  componentTableHide,
  componentFormSetData,
  componentFormShow,
  componentFormHide,
  componentFormReset,
  modelTableReset,
  modelTableShow,
  modelTableHide,
  modelFormSetData,
  modelFormShow,
  modelFormHide,
  modelFormReset,
};