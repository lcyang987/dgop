import { combineReducers } from 'redux';
import { filterAllKey } from '@/util'
import { MENU } from '@/actions';

const thunkTypes = MENU.thunk;
const actionTypes = MENU.action;

const list = (state = [], action) => {
  switch (action.type) {
    case thunkTypes.getList.REQUESTTYPE:
      return state
    case thunkTypes.getList.SUCCESSTYPE:
      function arrToTree(tree, data, parent, parentUrl) {
        for (var i = 0; i < data.length; i++) {
          if (data[i].parentId === parent) {
            data[i].children = []
            data[i].url = parentUrl + '/' + data[i].url
            data[i].isLeaf = data[i].isLeaf === 'y' ? true : false
            bread.push({
              path: data[i].url,
              icon: data[i].icon,
              isLeaf: data[i].isLeaf,
              breadcrumbName: data[i].name
            })
            var json = Object.assign({}, data[i])
            tree.push(json)
            data.splice(i, 1)
            i--
            arrToTree(json.children, data, json.id, json.url)
          }
        }
      }
      const newTree = []
      const bread = []
      const result = action.response.result.map(item => ({...item}))
      arrToTree(newTree, result, 0, '')
      action.response.result = bread
      return newTree
    case thunkTypes.getList.FAILURETYPE:
      return state
    default:
      return state
  }
}


const key = (state = filterAllKey(window.location.pathname), action) => {
  switch (action.type) {
    case actionTypes.KEY:
      return filterAllKey(action.value)
    default:
      return state
  }
}

const collapsed = (state = localStorage.getItem('menuCollapsed') ? JSON.parse(localStorage.getItem('menuCollapsed')) : false, action) => {
  switch (action.type) {
    case actionTypes.COLLAPSED:
      localStorage.setItem('menuCollapsed', action.value)
      return action.value
    default:
      return state
  }
}

export default combineReducers({
  list,
  key,
  collapsed
})