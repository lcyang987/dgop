import { combineReducers } from 'redux';
import acceptWithdrawApply from './acceptWithdrawApply';
import collectWithdrawApply from './collectWithdrawApply';
import handleWithdraw from './handleWithdraw';

export default combineReducers({
  acceptWithdrawApply,
  collectWithdrawApply,
  handleWithdraw,
})