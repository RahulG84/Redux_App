import {
  ADD_ITEMS,
  CHANGE_THEME,
  DECARSE,
  DELETE_ITEMS,
  INCREASE,
} from '../ActionTypes';

export const addItemToCart = (data: any) => ({
  type: ADD_ITEMS,
  payload: data,
});

export const removeItemFromcart = (index: any) => ({
  type: DELETE_ITEMS,
  payload: index,
});
export const toChangeTheme = (type: boolean) => ({
  type: CHANGE_THEME,
  payload: type,
});
export const increaseCount = () => ({
  type: INCREASE,
});
export const decarseCount = () => ({
  type: DECARSE,
});
