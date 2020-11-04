import * as ActionTypes from './ActionTypes';

export const addComment = (dishId, rating, author, comment) => ({ // Function that creates an action object
    type: ActionTypes.ADD_COMMENT, // I send this action type to the store
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});