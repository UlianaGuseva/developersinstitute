import {createStore, applyMiddleware} from 'redux';
import {reducer} from './reducer';
import thunk from 'redux-thunk'
import { Logger } from './logger';



const store = createStore(reducer, applyMiddleware(thunk, Logger));

export default store;