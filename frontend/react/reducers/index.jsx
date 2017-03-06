import { combineReducers } from 'redux';

import {
    RECEIVE_ORGANIZATION_DATA,
} from '../actions/index.jsx';

const initialState = {
    organization: {
        organizationDetails: null
    },
    licenses: [],
    users: [],
    groups: []
};

import loginReducer from '../routes/login/components/LoginForm/reducers.jsx';
import registrationReducer from '../routes/home/components/RegistrationForm/reducers.jsx';

function mainReducer(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_ORGANIZATION_DATA:
            return Object.assign({}, state, {
                organization: action.data
            });
            break;
        default:
            return state
    }
}

function reduceReducers(...reducers) {
  return (previous, current) =>
    reducers.reduce(
      (p, r) => r(p, current), previous
    );
}

const rootReducer = combineReducers(
    mainReducer,
    reduceReducers(loginReducer, registrationReducer)
);

export default reduceReducers(loginReducer, registrationReducer);