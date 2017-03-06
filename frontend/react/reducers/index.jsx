import {
    RECEIVE_LOGIN_SUCCESS_RESPONSE,
    RECEIVE_REGISTRATION_SUCCESS_RESPONSE
} from '../actions/index.jsx';


const initialState = {
    user: {
        id: null,
        token: localStorage.token || null,
        email: localStorage.email || '',
        userDetails: null
    },
    licenses: [],
    users: [],
    groups: []
};

function mainReducer(state = initialState, action) {
    console.log(action, state, 'REDUCER');
    let nextState = {};
    switch (action.type) {
        case RECEIVE_LOGIN_SUCCESS_RESPONSE:
            nextState = Object.assign({}, state, {
                user: {
                    id: action.data.id,
                    userDetails: action.data.userDetails,
                    token: action.data.token,
                    email: action.data.email
                }
            });
            break;
        case RECEIVE_REGISTRATION_SUCCESS_RESPONSE:
            nextState = Object.assign({}, state, {
                user: {
                    email: action.data.email
                }
            });
            break;
        default:
            return state
    }
    console.log(nextState);
    return nextState;
}

export {mainReducer, initialState}
