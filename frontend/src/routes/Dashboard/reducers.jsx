import {
    DASHBOARD_DETAILS_SUCCESS_RESPONSE,
    DASHBOARD_DETAILS_FAIL_RESPONSE
} from './actions.jsx';

const initialState = {
    licenses: [],
    users: [],
    groups: []
};

function dashboardReducer(state = initialState, action) {
    switch (action.type) {
        case DASHBOARD_DETAILS_SUCCESS_RESPONSE:
            return Object.assign({}, state, action.data);
            break;
        case DASHBOARD_DETAILS_FAIL_RESPONSE:
            return state;
            break;
        default:
            return state
    }
}

export default dashboardReducer