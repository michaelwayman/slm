import { combineReducers } from 'redux';

import loginReducer from './routes/LoginPage/components/LoginForm/reducers.jsx';
import registrationReducer from './routes/HomePage/components/RegistrationForm/reducers.jsx';

import {SET_PAGE_STATE} from './actions.jsx';

import dashboardReducer from './routes/Dashboard/reducers.jsx';
import {USER_LOGOUT} from './routes/Dashboard/actions.jsx';


function pageReducer(state = {}, action) {
    switch (action.type) {
        case SET_PAGE_STATE:
            return Object.assign({}, state, action.newState);
            break;
        default:
            return state;
    }
}

function reduceReducers(...reducers) {
  return (previous, current) =>
    reducers.reduce(
      (p, r) => r(p, current), previous
    );
}


const appReducer = combineReducers({
    dashboard: dashboardReducer,
    user: reduceReducers(loginReducer, registrationReducer),
    page: pageReducer
});

const rootReducer = (state, action) => {
    if (action.type === USER_LOGOUT) {
        state = undefined;
    }
    return appReducer(state, action)
};

export default rootReducer;
