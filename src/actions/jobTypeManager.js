import * as APIS from '@/middleware/api';

const THISACTION = 'JOBTYPE_MANAGER_';

const thunk = {
  tableGet: {
    REQUESTTYPE: THISACTION + 'TABLE_GET_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'TABLE_GET_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'TABLE_GET_FAILURETYPE',
  },
  tableStatusToggle: {
    REQUESTTYPE: THISACTION + 'TABLE_STATUS_TOGGLE_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'TABLE_STATUS_TOGGLE_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'TABLE_STATUS_TOGGLE_FAILURETYPE',
  },
  formGet: {
    REQUESTTYPE: THISACTION + 'FORM_GET_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'FORM_GET_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'FORM_GET_FAILURETYPE',
  },
  formSubmit: {
    REQUESTTYPE: THISACTION + 'FORM_SUBMIT_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'FORM_SUBMIT_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'FORM_SUBMIT_FAILURETYPE',
  },
  tableRemove: {
    REQUESTTYPE: THISACTION + 'TABLE_REMOVE_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'TABLE_REMOVE_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'TABLE_REMOVE_FAILURETYPE'
  },
  machineTableGet: {
    REQUESTTYPE: THISACTION + 'MACHINETABLE_GET_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'MACHINETABLE_GET_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'MACHINETABLE_GET_FAILURETYPE',
  },
  machineFormMachineListGet: {
    REQUESTTYPE: THISACTION + 'MACHINEFORM_MACHINELIST_GET_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'MACHINEFORM_MACHINELIST_GET_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'MACHINEFORM_MACHINELIST_GET_FAILURETYPE',
  },
  machineFormMachineComponentListGet: {
    REQUESTTYPE: THISACTION + 'MACHINEFORM_MACHINECOMPONENTLIST_GET_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'MACHINEFORM_MACHINECOMPONENTLIST_GET_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'MACHINEFORM_MACHINECOMPONENTLIST_GET_FAILURETYPE',
  },
  machineFormSubmit: {
    REQUESTTYPE: THISACTION + 'MACHINEFORM_SUBMIT_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'MACHINEFORM_SUBMIT_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'MACHINEFORM_SUBMIT_FAILURETYPE',
  },
  machineTableRemove: {
    REQUESTTYPE: THISACTION + 'MACHINETABLE_REMOVE_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'MACHINETABLE_REMOVE_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'MACHINETABLE_REMOVE_FAILURETYPE'
  },
  jobPoundageTableGet: {
    REQUESTTYPE: THISACTION + 'JOPOUNDAGETABLE_GET_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'JOPOUNDAGETABLE_GET_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'JOPOUNDAGETABLE_GET_FAILURETYPE',
  },
  jobPoundageTableEditSubmit: {
    REQUESTTYPE: THISACTION + 'JOPOUNDAGETABLE_EIDIT_SUBMIT_REQUESTTYPE',
    SUCCESSTYPE: THISACTION + 'JOPOUNDAGETABLE_EIDIT_SUBMIT_SUCCESSTYPE',
    FAILURETYPE: THISACTION + 'JOPOUNDAGETABLE_EIDIT_SUBMIT_FAILURETYPE',
  },
}

const tableGet = params => dispatch => dispatch({
  [APIS.JOBTYPE_MANAGER_TABLE_GET_API]: {
    types: Object.values(thunk.tableGet),
    url: 'job/jobTypeListPage.json',
    params: params,
  }
});

const tableStatusToggle = params => dispatch => dispatch({
  [APIS.JOBTYPE_MANAGER_TABLE_STATUS_TOGGLE_API]: {
    types: Object.values(thunk.tableStatusToggle),
    url: 'job/updateJobType.json',
    params: params,
  }
});

const formGet = params => dispatch => dispatch({
  [APIS.JOBTYPE_MANAGER_FORM_GET_API]: {
    types: Object.values(thunk.formGet),
    url: 'job/jobTypeInfo.json',
    params: params,
  }
});

const formAddSubmit = params => ({
  [APIS.JOBTYPE_MANAGER_FORM_ADD_SUBMIT_API]: {
    types: Object.values(thunk.formSubmit),
    url: 'job/addJobType.json',
    params: params,
  }
})

const formEditSubmit = params => ({
  [APIS.JOBTYPE_MANAGER_FORM_EDIT_SUBMIT_API]: {
    types: Object.values(thunk.formSubmit),
    url: 'job/updateJobType.json',
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
  [APIS.JOBTYPE_MANAGER_TABLE_REMOVE_API]: {
    types: Object.values(thunk.tableRemove),
    url: 'job/delJobType.json',
    params: params,
  }
});

const machineTableGet = params => dispatch => dispatch({
  [APIS.JOBTYPE_MANAGER_MACHINETABLE_GET_API]: {
    types: Object.values(thunk.machineTableGet),
    url: 'job/queryJobMachineByJobTypeId.json',
    params: params,
  }
});

const machineFormMachineListGet = params => dispatch => dispatch({
  [APIS.JOBTYPE_MANAGER_MACHINEFORM_MACHINELIST_GET_API]: {
    types: Object.values(thunk.machineFormMachineListGet),
    url: 'mach/machineList.json',
    params: params,
  }
});

const machineFormMachineComponentListGet = params => dispatch => dispatch({
  [APIS.JOBTYPE_MANAGER_MACHINEFORM_MACHINECOMPONENTLIST_GET_API]: {
    types: Object.values(thunk.machineFormMachineComponentListGet),
    url: 'mach/queryComponentByMachineId.json',
    params: params,
  }
});

const machineFormAddSubmit = params => ({
  [APIS.JOBTYPE_MANAGER_MACHINEFORM_ADD_SUBMIT_API]: {
    types: Object.values(thunk.machineFormSubmit),
    url: 'job/addJobMachine.json',
    params: params,
  }
})

const machineFormEditSubmit = params => ({
  [APIS.JOBTYPE_MANAGER_MACHINEFORM_EDIT_SUBMIT_API]: {
    types: Object.values(thunk.machineFormSubmit),
    url: 'job/updateJobMachine.json',
    params: params,
  }
})

const machineFormSubmit = params => dispatch => {
  if (params.id) {
    return dispatch(machineFormEditSubmit(params));
  } else {
    return dispatch(machineFormAddSubmit(params));
  }
};

const machineTableRemove = params => dispatch => dispatch({
  [APIS.JOBTYPE_MANAGER_MACHINETABLE_REMOVE_API]: {
    types: Object.values(thunk.machineTableRemove),
    url: 'job/delJobMachine.json',
    params: params,
  }
});

const jobPoundageTableGet = params => dispatch => dispatch({
  [APIS.JOBTYPE_MANAGER_JOBPOUNDAGETABLE_GET_API]: {
    types: Object.values(thunk.jobPoundageTableGet),
    url: 'job/queryJobPoundageByJobTypeId.json',
    params: params,
  }
});

const jobPoundageTableEditSubmit = params => ({
  [APIS.JOBTYPE_MANAGER_JOBPOUNDAGETABLE_EDIT_SUBMIT_API]: {
    types: Object.values(thunk.jobPoundageTableEditSubmit),
    url: 'job/updateJobPoundage.json',
    params: params,
  }
})

const action = {
  FORM_SHOW: THISACTION + 'FORM_SHOW',
  FORM_HIDE: THISACTION + 'FORM_HIDE',
  FORM_RESET: THISACTION + 'FORM_RESET',
  MACHINETABLE_RESET: THISACTION + 'MACHINETABLE_RESET',
  MACHINETABLE_SHOW: THISACTION + 'MACHINETABLE_SHOW',
  MACHINETABLE_HIDE: THISACTION + 'MACHINETABLE_HIDE',
  MACHINEFORM_SETDATA: THISACTION + 'MACHINEFORM_SETDATA',
  MACHINEFORM_RESET: THISACTION + 'MACHINEFORM_RESET',
  MACHINEFORM_SHOW: THISACTION + 'MACHINEFORM_SHOW',
  MACHINEFORM_HIDE: THISACTION + 'MACHINEFORM_HIDE',
  JOBPOUNDAGETABLE_RESET: THISACTION + 'JOBPOUNDAGETABLE_RESET',
  JOBPOUNDAGETABLE_SETDATA: THISACTION + 'JOBPOUNDAGETABLE_SETDATA',
  JOBPOUNDAGETABLE_SHOW: THISACTION + 'JOBPOUNDAGETABLE_SHOW',
  JOBPOUNDAGETABLE_HIDE: THISACTION + 'JOBPOUNDAGETABLE_HIDE',
  JOBPOUNDAGETABLE_ENABLEEDIT: THISACTION + 'JOBPOUNDAGETABLE_ENABLEEDIT',
  JOBPOUNDAGETABLE_DISABLEEDIT: THISACTION + 'JOBPOUNDAGETABLE_DISABLEEDIT',
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

const machineTableReset = () => dispatch => dispatch({
  type: action.MACHINETABLE_RESET,
});

const machineTableShow = title => dispatch => dispatch({
  type: action.MACHINETABLE_SHOW,
  value: title,
});

const machineTableHide = () => dispatch => dispatch({
  type: action.MACHINETABLE_HIDE
});

const machineFormSetData = params => dispatch => dispatch({
  type: action.MACHINEFORM_SETDATA,
  params: params,
});

const machineFormReset = () => dispatch => dispatch({
  type: action.MACHINEFORM_RESET,
});

const machineFormShow = title => dispatch => dispatch({
  type: action.MACHINEFORM_SHOW,
  value: title,
});

const machineFormHide = () => dispatch => dispatch({
  type: action.MACHINEFORM_HIDE
});

const jobPoundageTableReset = () => dispatch => dispatch({
  type: action.JOBPOUNDAGETABLE_RESET,
});

const jobPoundageTableSetData = params => dispatch => dispatch({
  type: action.JOBPOUNDAGETABLE_SETDATA,
  params: params,
});

const jobPoundageTableShow = title => dispatch => dispatch({
  type: action.JOBPOUNDAGETABLE_SHOW,
  value: title,
});

const jobPoundageTableHide = () => dispatch => dispatch({
  type: action.JOBPOUNDAGETABLE_HIDE
});

const jobPoundageTableEnableEdit = id => dispatch => dispatch({
  type: action.JOBPOUNDAGETABLE_ENABLEEDIT,
  id: id,
});

const jobPoundageTableDisableEdit = id => dispatch => dispatch({
  type: action.JOBPOUNDAGETABLE_DISABLEEDIT,
  id: id,
});

export default {
  thunk, // 以下为接口调用
  tableGet,
  tableStatusToggle,
  formGet,
  formSubmit,
  tableRemove,
  machineTableGet,
  machineFormMachineListGet,
  machineFormMachineComponentListGet,
  machineFormSubmit,
  machineTableRemove,
  jobPoundageTableGet,
  jobPoundageTableEditSubmit,
  action, // 以下为修改数据
  formShow,
  formHide,
  formReset,
  machineTableReset,
  machineTableShow,
  machineTableHide,
  machineFormSetData,
  machineFormShow,
  machineFormHide,
  machineFormReset,
  jobPoundageTableReset,
  jobPoundageTableSetData,
  jobPoundageTableShow,
  jobPoundageTableHide,
  jobPoundageTableEnableEdit,
  jobPoundageTableDisableEdit,
};