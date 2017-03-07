import { combineReducers } from 'redux';

import loginReducer from './routes/login/components/LoginForm/reducers.jsx';
import registrationReducer from './routes/home/components/RegistrationForm/reducers.jsx';
import dashboardReducer from './routes/dashboard/reducers.jsx';


function reduceReducers(...reducers) {
  return (previous, current) =>
    reducers.reduce(
      (p, r) => r(p, current), previous
    );
}


const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    user: reduceReducers(loginReducer, registrationReducer)
});

export default rootReducer;