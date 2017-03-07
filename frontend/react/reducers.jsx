import { combineReducers } from 'redux';

import loginReducer from './routes/LoginPage/components/LoginForm/reducers.jsx';
import registrationReducer from './routes/HomePage/components/RegistrationForm/reducers.jsx';

import dashboardReducer from './routes/Dashboard/reducers.jsx';
import {USER_LOGOUT} from './routes/Dashboard/actions.jsx';


function reduceReducers(...reducers) {
  return (previous, current) =>
    reducers.reduce(
      (p, r) => r(p, current), previous
    );
}


const appReducer = combineReducers({
    dashboard: dashboardReducer,
    user: reduceReducers(loginReducer, registrationReducer)
});

const rootReducer = (state, action) => {
    if (action.type === USER_LOGOUT) {
        state = undefined;
    }
    return appReducer(state, action)
};

export default rootReducer;
