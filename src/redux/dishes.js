import { DISHES } from '../shared/dishes';

export const Dishes = (state = DISHES, action) => { // Reducer function which manages only the dishes
    switch (action.type) {
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