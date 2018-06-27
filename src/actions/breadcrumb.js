const action = {
  KEY: 'BREADCRUMB_KEY'
}

const setKey = path => dispatch => dispatch({
  type: action.KEY,
  value: path
})

export default {
  action, // 以下为修改数据
  setKey,
};