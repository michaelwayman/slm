import {
    LOGIN_SUCCESS_RESPONSE,
    LOGIN_FAIL_RESPONSE
} from './actions.jsx';

const initialState = {
    id: null,
    token: localStorage.token || null,
    email: localStorage.email || '',
    userDetails: null
};

function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS_RESPONSE:
            return Object.assign({}, state, {
                id: action.data.id,
                userDetails: action.data.userDetails,
                token: action.data.token,
                email: action.data.email
            });
            break;
        case LOGIN_FAIL_RESPONSE:
            return state;
            break;
        default:
            return state
    }
}

export default loginReducer;