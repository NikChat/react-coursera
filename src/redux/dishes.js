import * as ActionTypes from './ActionTypes';

export const Dishes = (state = { isLoading: true,
    errMess: null,
    dishes:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload}; // state is not mutated

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []}

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};

// Here I will implement my Reducer Function (Reducer function = pure function): 
// Here I will set up my state.
// We need to set up the Reducer function, because our store needs to know what to do when an action is dispached to it.
// I can't modify the state directly here in the Reducer. I can only do an immutable change and return an updated version of the state
// When the Reducer is first called by my store, my store doesn't have state (it would be undefined). To avoid issues, 
// I say if state == undefined -> state = initialState.