import {createStore} from 'redux';
import { Reducer, initialState } from './reducer'

// Function that we will use to create the Redux Store:
export const ConfigureStore = () => {
    const store = createStore(
        Reducer, // reducer
        initialState, // our initialState
    );

    return store;
}