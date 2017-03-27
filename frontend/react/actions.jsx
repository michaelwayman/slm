import {logOut} from './auth.jsx';


export const SET_PAGE_STATE = 'SET_PAGE_STATE';
export function setPageState(newState) {
    return {
        type: SET_PAGE_STATE,
        newState: newState
    }
}


export const USER_LOGOUT = 'USER_LOGOUT';
export function userLogout() {
    logOut();
    return {type: USER_LOGOUT}
}
