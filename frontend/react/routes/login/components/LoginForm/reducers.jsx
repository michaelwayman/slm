import {
    LOGIN_SUCCESS_RESPONSE,
    LOGIN_FAIL_RESPONSE
} from './actions.jsx';

const initialState = {
    id: '',
    token: localStorage.token || '',
    email: localStorage.email || '',
};

function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS_RESPONSE:
            return Object.assign({}, state, {
                id: action.data.id,
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