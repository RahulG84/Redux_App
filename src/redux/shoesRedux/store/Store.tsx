import {combineReducers, createStore} from 'redux';
import {Reducers} from '../reducer/Reducers';
import {ThemeReducer} from '../reducer/ThemeReducer';
import {CounterReducer} from '../reducer/CounterReducer';
import {LanguageReducer} from '../reducer/LanguageReducer';

const allReducers = combineReducers({
  Reducers,
  ThemeReducer,
  CounterReducer,
  LanguageReducer,
});

export const Store = createStore(allReducers);
