import * as APIS from '@/middleware/api';

const thunk = {
  dictGet: {
    REQUESTTYPE:'DICT_GET_REQUESTTYPE',
    SUCCESSTYPE: 'DICT_GET_SUCCESSTYPE',
    FAILURETYPE: 'DICT_GET_FAILURETYPE',
  },
};

const dictGet = () => dispatch => dispatch({
  [APIS.DICT_GET_API]: {
    types: Object.values(thunk.dictGet),
    url: 'dict/dictList.json',
  }
});

export default {
  thunk, // 以下为接口调用
  dictGet,
};