import * as ActionTypes from './ActionTypes';

//function addComment that creates an action object, takes 4 parameters, sends to reducer func
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});