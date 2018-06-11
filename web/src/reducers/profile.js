import * as types from './../actions/profile/types';

export default function(state = {}, action) {
    switch(action.type) {
        case types.PROFILE_FETCH:
            return  action.payload;
        default:
            return state;
    }
}