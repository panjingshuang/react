import { CONST_MONTH_EXPENSES } from '../const'

export const deleteItem = (data) => {
  return { type: CONST_MONTH_EXPENSES.DELETE_ITEM, data };
};

export const addItem = () => {
  return { type: CONST_MONTH_EXPENSES.ADD_ITEM };
};

export const editIem = (data) => {
  return { type: CONST_MONTH_EXPENSES.EDIT_ITEM, data };
};

export const searchList = (data) => {
  return { type: CONST_MONTH_EXPENSES.SEARCH_LIST, data };
}