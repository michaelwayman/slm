import fetch from 'isomorphic-fetch';

import {logOut, saveUser} from '../auth.jsx';

import { handleResponse, handleError } from './lib/index.jsx';


export const LOGOUT_USER= 'LOGOUT_USER';
export function logoutUser() {
    logOut();
    return {type: LOGOUT_USER}
}


export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const CREATE_USER_SUCCESS_RESPONSE = 'CREATE_USER_SUCCESS_RESPONSE';
export const CREATE_USER_FAIL_RESPONSE = 'CREATE_USER_FAIL_RESPONSE';
export function createUser(username, password) {
    return (dispatch, getState) => {

        const payload = {email: username, password};

        dispatch({type: CREATE_USER_REQUEST, payload});

        return fetch(`/api/users/`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        })
        .then(handleResponse(dispatch, CREATE_USER_SUCCESS_RESPONSE))
        .catch(handleError(dispatch, CREATE_USER_FAIL_RESPONSE))
    }
}


export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS_RESPONSE = 'LOGIN_USER_SUCCESS_RESPONSE';
export const LOGIN_USER_FAIL_RESPONSE = 'LOGIN_USER_FAIL_RESPONSE';
export function loginUser(username, password) {
    return (dispatch, getState) => {

        const payload = {username, password};

        dispatch({type: LOGIN_USER_REQUEST, payload});

        return fetch(`/api/obtain-auth-token/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        })
        .then(handleResponse(dispatch, LOGIN_USER_SUCCESS_RESPONSE))
        .then((json) => {
            saveUser(json)
        })
        .catch(handleError(dispatch, LOGIN_USER_FAIL_RESPONSE))
    }
}
