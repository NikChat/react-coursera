// Here I will implement my Reducer Function (Reducer function = pure function): 
// Here I will set up my state.
// We need to set up the Reducer function, because our store needs to know what to do when an action is dispached to it.
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

export const initialState = { // My initial state. I removed the state from the Main Component.
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

// My reducer function -> recieves the current state & an action to generate the next state:
// I can't modify the state directly here in the Reducer. I can only do an immutable change and return an updated version of the state
// When the Reduced is first called by my store, my store doesn't have state (it would be undefined). To avoid issues, 
// I say if state == undefined -> state = initialState.
export const Reducer = (state = initialState, action) => { // the default value for state parameter = initialState (ES6)
    return state; // I am just returning the state as it is for now. I haven't implemented any actions
};