import {CONST_TABS} from '../const'

export const deleteItem = (data) => {
  return { type: CONST_TABS.DELETE_ITEM, data };
};

export const addItem = (data) => {
  return { type: CONST_TABS.ADD_ITEM, data };
};