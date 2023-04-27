/* eslint-disable no-unreachable */
import {ADD_ITEMS, DELETE_ITEMS, INCREASE} from '../ActionTypes';

const initialState = {
  shoesData: [{}],
  counter: 0,
};

export const Reducers = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_ITEMS:
      return {
        ...state,
        shoesData: [...state.shoesData, action.payload],
      };

    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };

    case DELETE_ITEMS:
      const deleteArray = action.apyload.filter((item: any, index: number) => {
        return (item.payload = index);
      });
      return deleteArray;
      // eslint-disable-next-line no-labels
      defaulte: return state;
  }
};
