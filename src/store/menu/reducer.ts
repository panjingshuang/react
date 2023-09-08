import {CONST_TYPE} from '../const'
const initState = 0
export default function taskReducer(preState = initState, action) {
  if (!preState) preState = initState;
  const { type, data } = action;
  switch (type) {
    case CONST_TYPE.DELETE_ITEM:
      return preState - 1;
    default:
      return preState;
  }
}