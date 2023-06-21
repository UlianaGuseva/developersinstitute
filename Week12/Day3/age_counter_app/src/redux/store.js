import {createStore, applyMiddleware} from 'redux';
import {reducer} from './reducer';
import { LogFunc } from './logger';



const store = createStore(reducer, applyMiddleware(LogFunc));

export default store;