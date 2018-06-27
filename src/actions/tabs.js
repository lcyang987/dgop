const THISACTION = 'TABS_';

const action = {
  ADD: THISACTION + 'ADD',
  REMOVE: THISACTION + 'REMOVE',
  RESERVE: THISACTION + 'RESERVE',
  CLEAR: THISACTION + 'CLEAR'
};

const add = tab => dispatch => dispatch({
  type: action.ADD,
  value: tab
});

const remove = path => dispatch => dispatch({
  type: action.REMOVE,
  value: path
});

const reserve = tab => dispatch => dispatch({
  type: action.RESERVE,
  value: tab
});

const clear = () => dispatch => dispatch({
  type: action.CLEAR,
  value: []
});

export default {
  action, // 以下为修改数据
  add,
  remove,
  reserve,
  clear,
};