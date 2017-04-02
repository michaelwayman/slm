import {
    GET_ACCOUNT_DETAILS_SUCCESS_RESPONSE
} from '../actions/index.jsx';


export function accountReducer(state = {}, action) {
    switch (action.type) {
        case GET_ACCOUNT_DETAILS_SUCCESS_RESPONSE:
            return Object.assign({}, state, action.payload);
            break;
        default:
            return state;
    }
}
