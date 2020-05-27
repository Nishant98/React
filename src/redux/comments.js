import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const Comments = (state = COMMENTS, action) => {
    
    switch(action.type){
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            //cant modify the state, hence use concat (pushes the new ele in array)
            return state.concat(comment);
        default:
            return state;
    }
}