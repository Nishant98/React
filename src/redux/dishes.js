import * as ActionTypes from './ActionTypes';

export const Dishes = (state = {
        isLoading: true,
        errMess: null,
        dishes: []
    }, action) => {
    
    switch(action.type){
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload};
        
        case ActionTypes.DISHES_LOADING:
            // spread operator(...) keeps the state as it is (takes the current value of state, immutable) and adds the new parameters to it. 
            return {...state, isLoading: true, errMess: null, dishes: []};
            
        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, dishes: []};

        default:
            return state;
    }
}