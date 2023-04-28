import {combineReducers, createStore} from 'redux';
import {Reducers} from '../reducer/Reducers';
import {ThemeReducer} from '../reducer/ThemeReducer';
import {CounterReducer} from '../reducer/CounterReducer';

const allReducers = combineReducers({Reducers, ThemeReducer, CounterReducer});

export const Store = createStore(allReducers);
