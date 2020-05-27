import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';

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

// thunk fetchDishes returns a func that dispatches several actions, inner func has access to dispatch and getState, 
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));
    // delay of 2000 ms
    setTimeout(() => {
        dispatch(addDishes(DISHES)); 
    }, 2000);
}

export const dishesLoading = () => ({
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