import {CHANGE_LANGUAGE} from '../ActionTypes';

export const LanguageReducer = (state = 'ENGLISH', action: any) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return action.payload;

    default:
      return state;
  }
};
