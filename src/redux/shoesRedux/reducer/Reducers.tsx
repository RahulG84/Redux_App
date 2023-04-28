import {ADD_ITEMS, DELETE_ITEMS} from '../ActionTypes';

export const Reducers = (state = [], action: any) => {
  switch (action.type) {
    case ADD_ITEMS:
      return [...state, action.payload];

    case DELETE_ITEMS:
      const deleteArray = state.filter((item: any, index: any) => {
        return index !== action.payload;
      });
      return deleteArray;
    default:
      return state;
  }
};
