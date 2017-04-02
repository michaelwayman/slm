import fetch from 'isomorphic-fetch';

import { setPageFormErrors } from './page.jsx';

import { getToken } from '../auth.jsx';


export const GET_ACCOUNT_DETAILS_REQUEST = 'GET_ACCOUNT_DETAILS_REQUEST';
export const GET_ACCOUNT_DETAILS_SUCCESS_RESPONSE = 'GET_ACCOUNT_DETAILS_SUCCESS_RESPONSE';
export const GET_ACCOUNT_DETAILS_FAIL_RESPONSE = 'GET_ACCOUNT_DETAILS_FAIL_RESPONSE';
export function getAccountDetails(successCb, errorCb) {
    return (dispatch, getState) => {
        dispatch({type: GET_ACCOUNT_DETAILS_REQUEST});
        const {user, account} = getState();
        fetch(`/api/accounts/${user.account}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${getToken()}`
            }
        })
        .then(response => {
            if (response.status === 200) {
                response.json().then(data => {
                    dispatch({type: GET_ACCOUNT_DETAILS_SUCCESS_RESPONSE, data});
                    if (successCb) successCb(data);
                });
            }
            else {
                response.json().then(data => {
                    dispatch({type: GET_ACCOUNT_DETAILS_FAIL_RESPONSE, data});
                    if (errorCb) errorCb(data)
                });
            }
        })
    }
}


export const UPDATE_ACCOUNT_REQUEST = 'UPDATE_ACCOUNT_REQUEST';
export const UPDATE_ACCOUNT_SUCCESS_RESPONSE = 'UPDATE_ACCOUNT_SUCCESS_RESPONSE';
export const UPDATE_ACCOUNT_FAIL_RESPONSE = 'UPDATE_ACCOUNT_FAIL_RESPONSE';
export function updateAccount(payload, successCb, errorCb) {
    return (dispatch, getState) => {
        dispatch({type: UPDATE_ACCOUNT_REQUEST, payload});
        const {user, account} = getState();
        fetch(`/api/accounts/${user.account}/`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${getToken()}`
            },
            body: JSON.stringify(payload)
        })
        .then(response => {
            if (response.status === 200) {
                response.json().then(data => {
                    dispatch({type: UPDATE_ACCOUNT_SUCCESS_RESPONSE, data});
                    if (successCb) successCb(data);
                });
            }
            else if (response.status === 400) {
                response.json().then(data => {
                    dispatch({type: UPDATE_ACCOUNT_FAIL_RESPONSE, data});
                    dispatch(setPageFormErrors(data));
                    if (errorCb) errorCb(data)
                });
            }
        })
    }
}
