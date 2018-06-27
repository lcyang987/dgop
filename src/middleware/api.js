import { notification } from 'antd';

const ajax = (url, params) => {
  const fullUrl = /^https:/.test(url) ? url : '../../' + url
  // console.log('params', params)
  var formData = ''
  for (var attr in params){
    formData += attr + '=' + params[attr] + '&'
  }
  formData = formData.slice(0, -1)
  // console.log('formData', formData)
  return fetch(fullUrl, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    credentials: "include",
    method: params ? 'POST' : 'GET',
    body: formData || {}
  }).then(response => 
    response.json().then(json => {
      if (!json.success) {
        return Promise.reject(json)
      }
      return json
    }),
    error => {
      console.log('fetchError:', error)
    }
  )
}

export const LOGIN_API = 'LOGIN_API';
export const LOGOUT_API = 'LOGOUT_API';
export const USERCENTER_GET_API = 'USERCENTER_GET_API';
export const MENU_API = 'MENU_API';
export const DICT_GET_API = 'DICT_GET_API';
// MENU_MANAGER
export const MENU_MANAGER_TABLE_GET_API = 'MENU_MANAGER_TABLE_GET_API';
export const MENU_MANAGER_FORM_GET_API = 'MENU_MANAGER_FORM_GET_API';
export const MENU_MANAGER_FORM_ADD_SUBMIT_API = 'MENU_MANAGER_FORM_ADD_SUBMIT_API';
export const MENU_MANAGER_FORM_EDIT_SUBMIT_API = 'MENU_MANAGER_FORM_EDIT_SUBMIT_API';
export const MENU_MANAGER_TABLE_REMOVE_API = 'MENU_MANAGER_TABLE_REMOVE_API';
// ROLE_MANAGER
export const ROLE_MANAGER_TABLE_GET_API = 'ROLE_MANAGER_TABLE_GET_API';
export const ROLE_MANAGER_FORM_GET_API = 'ROLE_MANAGER_FORM_GET_API';
export const ROLE_MANAGER_FORM_ADD_SUBMIT_API = 'ROLE_MANAGER_FORM_ADD_SUBMIT_API';
export const ROLE_MANAGER_FORM_EDIT_SUBMIT_API = 'ROLE_MANAGER_FORM_EDIT_SUBMIT_API';
export const ROLE_MANAGER_TABLE_REMOVE_API = 'ROLE_MANAGER_TABLE_REMOVE_API';
export const ROLE_MANAGER_CONFIGFORM_GETALLMENU_API = 'ROLE_MANAGER_CONFIGFORM_GETALLMENU_API';
export const ROLE_MANAGER_CONFIGFORM_GETMENUBYROLE_API = 'ROLE_MANAGER_CONFIGFORM_GETMENUBYROLE_API';
export const ROLE_MANAGER_CONFIGFORM_SUBMIT_API = 'ROLE_MANAGER_CONFIGFORM_SUBMIT_API';
// USER_MANAGER
export const USER_MANAGER_TABLE_GET_API = 'USER_MANAGER_TABLE_GET_API';
export const USER_MANAGER_TABLE_STATUS_TOGGLE_API = 'USER_MANAGER_TABLE_STATUS_TOGGLE_API';
export const USER_MANAGER_FORM_GET_API = 'USER_MANAGER_FORM_GET_API';;
export const USER_MANAGER_FORM_PIC_UPLOAD_API = 'USER_MANAGER_FORM_PIC_UPLOAD_API';
export const USER_MANAGER_FORM_ADD_SUBMIT_API = 'USER_MANAGER_FORM_ADD_SUBMIT_API';
export const USER_MANAGER_FORM_EDIT_SUBMIT_API = 'USER_MANAGER_FORM_EDIT_SUBMIT_API';
export const USER_MANAGER_PASSWORDFORMSUBMIT_GET_API = 'USER_MANAGER_PASSWORDFORMSUBMIT_GET_API';
// BANK_CONFIG
export const BANK_CONFIG_TABLE_GET_API = 'BANK_CONFIG_TABLE_GET_API';
export const BANK_CONFIG_TABLE_STATUS_TOGGLE_API = 'BANK_CONFIG_TABLE_STATUS_TOGGLE_API';
export const BANK_CONFIG_FORM_GET_API = 'BANK_CONFIG_FORM_GET_API';
export const BANK_CONFIG_FORM_ADD_SUBMIT_API = 'BANK_CONFIG_FORM_ADD_SUBMIT_API';
export const BANK_CONFIG_FORM_EDIT_SUBMIT_API = 'BANK_CONFIG_FORM_EDIT_SUBMIT_API';
export const BANK_CONFIG_TABLE_REMOVE_API = 'BANK_CONFIG_TABLE_REMOVE_API';
// DICT_MANAGER
export const DICT_MANAGER_TABLE_GET_API = 'DICT_MANAGER_TABLE_GET_API';
export const DICT_MANAGER_FORM_GET_API = 'DICT_MANAGER_FORM_GET_API';
export const DICT_MANAGER_FORM_ADD_SUBMIT_API = 'DICT_MANAGER_FORM_ADD_SUBMIT_API';
export const DICT_MANAGER_FORM_EDIT_SUBMIT_API = 'DICT_MANAGER_FORM_EDIT_SUBMIT_API';
export const DICT_MANAGER_TABLE_REMOVE_API = 'DICT_MANAGER_TABLE_REMOVE_API';
export const DICT_MANAGER_CHILDTABLE_GET_API = 'DICT_MANAGER_CHILDTABLE_GET_API';
export const DICT_MANAGER_CHILDFORM_GET_API = 'DICT_MANAGER_CHILDFORM_GET_API';
export const DICT_MANAGER_CHILDTABLE_STATUS_TOGGLE_API ='DICT_MANAGER_CHILDTABLE_STATUS_TOGGLE_API';
export const DICT_MANAGER_CHILDFORM_ADD_SUBMIT_API = 'DICT_MANAGER_CHILDFORM_ADD_SUBMIT_API';
export const DICT_MANAGER_CHILDFORM_EDIT_SUBMIT_API = 'DICT_MANAGER_CHILDFORM_EDIT_SUBMIT_API';
export const DICT_MANAGER_CHILDTABLE_REMOVE_API = 'DICT_MANAGER_CHILDTABLE_REMOVE_API';
// AUDIT_MEMBER
export const AUDIT_MEMBER_TABLE_GET_API = 'AUDIT_MEMBER_TABLE_GET_API';
export const AUDIT_MEMBER_TABLE_SUCCESS_API = 'AUDIT_MEMBER_TABLE_SUCCESS_API';
export const AUDIT_MEMBER_FORM_FAILURE_API = 'AUDIT_MEMBER_FORM_FAILURE_API';
// AUDIT_JOBDEMAND
export const AUDIT_JOBDEMAND_TABLE_GET_API = 'AUDIT_JOBDEMAND_TABLE_GET_API';
export const AUDIT_JOBDEMAND_TABLE_SUCCESS_API = 'AUDIT_JOBDEMAND_TABLE_SUCCESS_API';
export const AUDIT_JOBDEMAND_FORM_FAILURE_API = 'AUDIT_JOBDEMAND_FORM_FAILURE_API';
// AUDIT_MACHINE
export const AUDIT_MACHINE_TABLE_GET_API = 'AUDIT_MACHINE_TABLE_GET_API';
export const AUDIT_MACHINE_TABLE_SUCCESS_API = 'AUDIT_MACHINE_TABLE_SUCCESS_API';
export const AUDIT_MACHINE_FORM_FAILURE_API = 'AUDIT_MACHINE_FORM_FAILURE_API';
// CROP_MANAGER
export const CROP_MANAGER_TABLE_GET_API = 'CROP_MANAGER_TABLE_GET_API';
export const CROP_MANAGER_TABLE_STATUS_TOGGLE_API ='CROP_MANAGER_TABLE_STATUS_TOGGLE_API';
export const CROP_MANAGER_FORM_GET_API = 'CROP_MANAGER_FORM_GET_API';
export const CROP_MANAGER_FORM_ADD_SUBMIT_API = 'CROP_MANAGER_FORM_ADD_SUBMIT_API';
export const CROP_MANAGER_FORM_EDIT_SUBMIT_API = 'CROP_MANAGER_FORM_EDIT_SUBMIT_API';
export const CROP_MANAGER_TABLE_REMOVE_API = 'CROP_MANAGER_TABLE_REMOVE_API';
// MACHINE_MANAGER
export const MACHINE_MANAGER_TABLE_GET_API = 'MACHINE_MANAGER_TABLE_GET_API';
export const MACHINE_MANAGER_TABLE_STATUS_TOGGLE_API = 'MACHINE_MANAGER_TABLE_STATUS_TOGGLE_API'
export const MACHINE_MANAGER_FORM_GET_API = 'MACHINE_MANAGER_FORM_GET_API';
export const MACHINE_MANAGER_FORM_ADD_SUBMIT_API = 'MACHINE_MANAGER_FORM_ADD_SUBMIT_API';
export const MACHINE_MANAGER_FORM_EDIT_SUBMIT_API = 'MACHINE_MANAGER_FORM_EDIT_SUBMIT_API';
export const MACHINE_MANAGER_TABLE_REMOVE_API = 'MACHINE_MANAGER_TABLE_REMOVE_API';
export const MACHINE_MANAGER_BRANDTABLE_GET_API = 'MACHINE_MANAGER_BRANDTABLE_GET_API';
export const MACHINE_MANAGER_BRANDFORM_GET_API = 'MACHINE_MANAGER_BRANDFORM_GET_API';
export const MACHINE_MANAGER_BRANDTABLE_STATUS_TOGGLE_API ='MACHINE_MANAGER_BRANDTABLE_STATUS_TOGGLE_API';
export const MACHINE_MANAGER_BRANDFORM_ADD_SUBMIT_API = 'MACHINE_MANAGER_BRANDFORM_ADD_SUBMIT_API';
export const MACHINE_MANAGER_BRANDFORM_EDIT_SUBMIT_API = 'MACHINE_MANAGER_BRANDFORM_EDIT_SUBMIT_API';
export const MACHINE_MANAGER_BRANDTABLE_REMOVE_API = 'MACHINE_MANAGER_BRANDTABLE_REMOVE_API';
export const MACHINE_MANAGER_COMPONENTTABLE_GET_API = 'MACHINE_MANAGER_COMPONENTTABLE_GET_API';
export const MACHINE_MANAGER_COMPONENTFORM_GET_API = 'MACHINE_MANAGER_COMPONENTFORM_GET_API';
export const MACHINE_MANAGER_COMPONENTTABLE_STATUS_TOGGLE_API ='MACHINE_MANAGER_COMPONENTTABLE_STATUS_TOGGLE_API';
export const MACHINE_MANAGER_COMPONENTFORM_ADD_SUBMIT_API = 'MACHINE_MANAGER_COMPONENTFORM_ADD_SUBMIT_API';
export const MACHINE_MANAGER_COMPONENTFORM_EDIT_SUBMIT_API = 'MACHINE_MANAGER_COMPONENTFORM_EDIT_SUBMIT_API';
export const MACHINE_MANAGER_COMPONENTTABLE_REMOVE_API = 'MACHINE_MANAGER_COMPONENTTABLE_REMOVE_API';
export const MACHINE_MANAGER_MODELTABLE_GET_API = 'MACHINE_MANAGER_MODELTABLE_GET_API';
export const MACHINE_MANAGER_MODELFORM_GET_API = 'MACHINE_MANAGER_MODELFORM_GET_API';
export const MACHINE_MANAGER_MODELTABLE_STATUS_TOGGLE_API ='MACHINE_MANAGER_MODELTABLE_STATUS_TOGGLE_API';
export const MACHINE_MANAGER_MODELFORM_ADD_SUBMIT_API = 'MACHINE_MANAGER_MODELFORM_ADD_SUBMIT_API';
export const MACHINE_MANAGER_MODELFORM_EDIT_SUBMIT_API = 'MACHINE_MANAGER_MODELFORM_EDIT_SUBMIT_API';
export const MACHINE_MANAGER_MODELTABLE_REMOVE_API = 'MACHINE_MANAGER_MODELTABLE_REMOVE_API';
// JOBTYPE_MANAGER
export const JOBTYPE_MANAGER_TABLE_GET_API = 'JOBTYPE_MANAGER_TABLE_GET_API';
export const JOBTYPE_MANAGER_TABLE_STATUS_TOGGLE_API = 'JOBTYPE_MANAGER_TABLE_STATUS_TOGGLE_API'
export const JOBTYPE_MANAGER_FORM_GET_API = 'JOBTYPE_MANAGER_FORM_GET_API';
export const JOBTYPE_MANAGER_FORM_ADD_SUBMIT_API = 'JOBTYPE_MANAGER_FORM_ADD_SUBMIT_API';
export const JOBTYPE_MANAGER_FORM_EDIT_SUBMIT_API = 'JOBTYPE_MANAGER_FORM_EDIT_SUBMIT_API';
export const JOBTYPE_MANAGER_TABLE_REMOVE_API = 'JOBTYPE_MANAGER_TABLE_REMOVE_API';
export const JOBTYPE_MANAGER_MACHINETABLE_GET_API = 'JOBTYPE_MANAGER_MACHINETABLE_GET_API';
export const JOBTYPE_MANAGER_MACHINEFORM_GET_API = 'JOBTYPE_MANAGER_MACHINEFORM_GET_API';
export const JOBTYPE_MANAGER_MACHINETABLE_STATUS_TOGGLE_API ='JOBTYPE_MANAGER_MACHINETABLE_STATUS_TOGGLE_API';
export const JOBTYPE_MANAGER_MACHINEFORM_MACHINELIST_GET_API = 'JOBTYPE_MANAGER_MACHINEFORM_MACHINELIST_GET_API';
export const JOBTYPE_MANAGER_MACHINEFORM_MACHINECOMPONENTLIST_GET_API = 'JOBTYPE_MANAGER_MACHINEFORM_MACHINECOMPONENTLIST_GET_API';
export const JOBTYPE_MANAGER_MACHINEFORM_ADD_SUBMIT_API = 'JOBTYPE_MANAGER_MACHINEFORM_ADD_SUBMIT_API';
export const JOBTYPE_MANAGER_MACHINEFORM_EDIT_SUBMIT_API = 'JOBTYPE_MANAGER_MACHINEFORM_EDIT_SUBMIT_API';
export const JOBTYPE_MANAGER_MACHINETABLE_REMOVE_API = 'JOBTYPE_MANAGER_MACHINETABLE_REMOVE_API';
export const JOBTYPE_MANAGER_JOBPOUNDAGETABLE_GET_API = 'JOBTYPE_MANAGER_JOBPOUNDAGETABLE_GET_API';
export const JOBTYPE_MANAGER_JOBPOUNDAGETABLE_EDIT_SUBMIT_API = 'JOBTYPE_MANAGER_JOBPOUNDAGETABLE_EDIT_SUBMIT_API';

export default store => next => action => {
  const NOW_API = Object.keys(action)[0]
  
  if (NOW_API === 'type') {
    return next(action)
  }

  const API = action[NOW_API]

  const { types, url, params } = API

  const actionWith = data => {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[NOW_API]
    return finalAction
  }

  const [REQUESTTYPE, SUCCESSTYPE, FAILURETYPE, ...OTHERTYPE] = types
  
  next(actionWith({
    type: REQUESTTYPE,
    url,
    params,
  }))
  return ajax(url, params).then(
    response => {
      next(actionWith({
        type: SUCCESSTYPE,
        response,
      }))
      if (OTHERTYPE) {
        OTHERTYPE.forEach(type => {
          next(actionWith({
            type: type,
            response,
          }))
        })
      }
    },
    error => {
      if (error.errCode === '401') {
        window.location.href = '/'
        next(actionWith({
          type: 'LOGIN_SUCCESSTYPE',
          response: {
            success: false
          }
        }))
      } else {
        next(actionWith({ type: FAILURETYPE }))
  
        notification['error']({
          message: error.errCode || '错误！',
          description: error.info || '发生了不知名的错误',
        })
  
        return Promise.reject(error.errCode || 'failure')
      }
    }
  )
}