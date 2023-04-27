import {ADD_ITEMS, DELETE_ITEMS, INCREASE} from '../ActionTypes';

export const addItemToCart = (data: any) => ({
  type: ADD_ITEMS,
  payload: data,
});

export const removeItemFromcart = (index: any) => ({
  type: DELETE_ITEMS,
  payload: index,
});

export const increaseItem = () => ({
  type: INCREASE,
});
