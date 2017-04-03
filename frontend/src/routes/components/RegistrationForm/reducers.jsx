import {
    REGISTRATION_SUCCESS_RESPONSE,
    REGISTRATION_FAIL_RESPONSE
} from './actions.jsx';

function registrationReducer(state = {}, action) {
    switch (action.type) {
        case REGISTRATION_SUCCESS_RESPONSE:
            return Object.assign({}, state, {
                email: action.data.email
            });
            break;
        case REGISTRATION_FAIL_RESPONSE:
            return state;
            break;
        default:
            return state
    }
}

export default registrationReducer