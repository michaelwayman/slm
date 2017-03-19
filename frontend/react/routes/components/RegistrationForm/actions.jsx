import fetch from 'isomorphic-fetch';


export const REGISTRATION_SUCCESS_RESPONSE = 'REGISTRATION_SUCCESS_RESPONSE';
export function registrationSuccessResponse(responseData) {
    return {
        type: REGISTRATION_SUCCESS_RESPONSE,
        data: responseData
    }
}

export const REGISTRATION_FAIL_RESPONSE = 'REGISTRATION_FAIL_RESPONSE';
export function registrationFailResponse(responseData) {
    return {
        type: REGISTRATION_FAIL_RESPONSE,
        data: responseData
    }
}

export function registerUser(formData, successCb, errorCb) {
    return dispatch => {
        fetch('/api/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.status == 201) {
                response.json().then(data => {
                    dispatch(registrationSuccessResponse(data));
                    successCb(data);
                });
            }
            else if (response.status == 400) {
                response.json().then(data => {
                    dispatch(registrationFailResponse(data));
                    errorCb(data)
                });
            }
        })
    }
}