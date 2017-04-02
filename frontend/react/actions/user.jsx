import fetch from 'isomorphic-fetch';

import { setPageFormErrors } from './page.jsx';

import {logOut, saveToken} from '../auth.jsx';


export const LOGOUT_USER= 'LOGOUT_USER';
export function logoutUser() {
    logOut();
    return {type: LOGOUT_USER}
}


export const PERSIST_USER = 'PERSIST_USER';
export function persistUser(token) {
    saveToken(token);
    return {type: PERSIST_USER, token}
}


export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const CREATE_USER_SUCCESS_RESPONSE = 'CREATE_USER_SUCCESS_RESPONSE';
export const CREATE_USER_FAIL_RESPONSE = 'CREATE_USER_FAIL_RESPONSE';
export function createUser(payload, successCb, errorCb) {
    return (dispatch, getState) => {
        dispatch({type: CREATE_USER_REQUEST});
        fetch(`/api/users/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        })
        .then(response => {
            if (response.status === 201) {
                response.json().then(data => {
                    dispatch({type: CREATE_USER_SUCCESS_RESPONSE, payload: data});
                    if (successCb) successCb(data);
                });
            }
            else if (response.status === 400) {
                response.json().then(data => {
                    dispatch({type: CREATE_USER_FAIL_RESPONSE, payload: data});
                    if (errorCb) errorCb(data)
                });
            }
        })
    }
}


export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS_RESPONSE = 'LOGIN_USER_SUCCESS_RESPONSE';
export const LOGIN_USER_FAIL_RESPONSE = 'LOGIN_USER_FAIL_RESPONSE';
export function loginUser(payload, successCb, errorCb) {
    return (dispatch, getState) => {
        dispatch({type: LOGIN_USER_REQUEST, payload});
        fetch(`/api/obtain-auth-token/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: payload.email, password: payload.password})
        })
        .then(response => {
            if (response.status === 200) {
                response.json().then(data => {
                    dispatch({type: LOGIN_USER_SUCCESS_RESPONSE, payload:  data});
                    dispatch(persistUser(data['token']));
                    if (successCb) successCb(data);
                });
            }
            else if (response.status === 400) {
                response.json().then(data => {
                    dispatch({type: LOGIN_USER_FAIL_RESPONSE, payload: data});
                    dispatch(setPageFormErrors(data));
                    if (errorCb) errorCb(data)
                });
            }
        })
    }
}
