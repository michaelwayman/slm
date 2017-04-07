import fetch from 'isomorphic-fetch';

import { handleResponse, handleError } from './lib/index.jsx';


export const CONTACT_SUCCESS_RESPONSE = 'CONTACT_SUCCESS_RESPONSE';
export const CONTACT_FAIL_RESPONSE = 'CONTACT_FAIL_RESPONSE';
export const CONTACT_SUBMIT_REQUEST = 'CONTACT_SUBMIT_REQUEST';
export function contactSubmit(formData) {
    return dispatch => {

        dispatch({type: CONTACT_SUBMIT_REQUEST, data: formData});

        return fetch('/api/contact/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(handleResponse(dispatch, CONTACT_SUCCESS_RESPONSE))
        .catch(handleError(dispatch, CONTACT_FAIL_RESPONSE))
    }
}