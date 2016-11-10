// Import action type
import { FETCH_USER } from '../actions/types';

// User reducer checks what action to take against state based on supplied action.
export default function(state = [], action) {
    switch (action.type) {
        case FETCH_USER:
            return [...state, ...action.payload.data];
        default:
            return state;
    }
}
