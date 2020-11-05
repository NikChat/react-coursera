import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes'; //removed from dishes.js -> the action creator will suply this info to the reducer

export const addComment = (dishId, rating, author, comment) => ({ // Function that creates an action object
    type: ActionTypes.ADD_COMMENT, // I send this action type to the store
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

export const fetchDishes = () => (dispatch) => { // thunk -> returns a function that is going to dispatch several actions

    dispatch(dishesLoading(true));

    setTimeout(() => { // introduce a delay of 2 seconds
        dispatch(addDishes(DISHES));
    }, 2000);
}

export const dishesLoading = () => ({ // returns an action object
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});