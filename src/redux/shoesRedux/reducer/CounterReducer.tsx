import {DECARSE, INCREASE} from '../ActionTypes';

const initialState = {
  counter: 0,
};
export const CounterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECARSE:
      return {
        ...state,
        counter: state.counter - 1,
      };

    default:
      return state;
  }
};
