import {INSERT, UPDATE, DELETE, UPDATE_INDEX} from './actions'
import { addToLocalStorage, getFromLocalStorage } from '../utils/storage'

const initState = {
    listOfTrasactions: getFromLocalStorage('transactions'),
    currentIndex: -1,
}

export const reducer = (state = initState, action={}) => {
    switch (action.type) {
        case DELETE:
            state.listOfTrasactions.splice(action.payload, 1)
            addToLocalStorage('transactions', [...state.listOfTrasactions])
            return {...state, listOfTrasactions:[...state.listOfTrasactions], currentIndex:-1}
        case UPDATE:
            state.listOfTrasactions[state.currentIndex] = action.payload
            addToLocalStorage('transactions', [...state.listOfTrasactions])
            return {...state, listOfTrasactions:[...state.listOfTrasactions], currentIndex:-1 }
        case INSERT:
            state.listOfTrasactions.push(action.payload)
            addToLocalStorage('transactions', [...state.listOfTrasactions])
            return {...state, listOfTrasactions: [...state.listOfTrasactions]}
        case UPDATE_INDEX:
            return {...state, currentIndex:action.payload}


            default:
            return {...state};
    }
}