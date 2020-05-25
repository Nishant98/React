import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
}

// Reducer func (pure function) that receives current state and action and returns next state, default parameter for state is initialState.
// Reducer is called by the store
export const Reducer = (state = initialState, action) => {
    return state;
};
