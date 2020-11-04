import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload; // it receives the payload
            comment.id = state.length; // I generate the comment.id -> state here = the COMMENTS object.
            comment.date = new Date().toISOString();
            console.log("Comment: ", comment);
            return state.concat(comment); // it pushes the new element into the array - Immutable operation

        default:
          return state;
      }
};

// Here I receive the action (with action type: ADD_COMMENT) and the the Reducer function does something to the state