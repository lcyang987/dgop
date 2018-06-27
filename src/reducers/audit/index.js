import { combineReducers } from 'redux';
import auditMember from './auditMember';
import auditMachine from './auditMachine';
import auditJobDemand from './auditJobDemand';

export default combineReducers({
  auditMember,
  auditMachine,
  auditJobDemand,
})