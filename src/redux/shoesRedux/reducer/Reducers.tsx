/* eslint-disable no-unreachable */
import {ADD_ITEMS, DELETE_ITEMS, INCREASE} from '../ActionTypes';

// const initialState = {
//   shoesData: [],
//   counter: 0,
// };

// case INCREASE:
//   return {
//     ...state,
//     counter: state.counter + 1,
//   };

export const Reducers = (state = [], action: any) => {
  switch (action.type) {
    case ADD_ITEMS:
      return [...state, action.payload];

    case DELETE_ITEMS:
      const deleteArray = state.filter((item: any, index: any) => {
        return index !== action.payload;
      });
      return deleteArray;
      // eslint-disable-next-line no-labels
      defaulte: return state;
  }
};
