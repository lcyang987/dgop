import { DICT } from '@/actions';

const thunkTypes = DICT.thunk;

const dictInitState = {
  data: {},
  loading: false,
}

export default (state = dictInitState, action) => {
  switch (action.type) {
    case thunkTypes.dictGet.REQUESTTYPE:
      return {
        ...state,
        loading: true,
      }
    case thunkTypes.dictGet.SUCCESSTYPE:
      const dictData = {};
      const filterResult = action.response.result.filter(item => item.status === 'y');
      filterResult.forEach(item => {
        dictData[item.codeType] = [];
      });
      filterResult.forEach(item => {
        dictData[item.codeType].push({
          name: item.codeName,
          value: item.codeValue,
        });
      });
      return {
        ...state,
        data: dictData,
        loading: false,
      }
    case thunkTypes.dictGet.FAILURETYPE:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}