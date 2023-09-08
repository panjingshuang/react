import {CONST_TYPE} from '../const'

export const deleteItem = (data) => {
  return { type: CONST_TYPE.DELETE_ITEM, data };
};