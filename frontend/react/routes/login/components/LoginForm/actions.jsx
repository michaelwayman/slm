import fetch from 'isomorphic-fetch';


export const LOGIN_SUCCESS_RESPONSE = 'LOGIN_SUCCESS_RESPONSE';
export function loginSuccessResponse(responseData) {
    return {
        type: LOGIN_SUCCESS_RESPONSE,
        data: responseData
    }
}

export const LOGIN_FAIL_RESPONSE = 'LOGIN_FAIL_RESPONSE';
export function loginFailResponse(responseData) {
    return {
        type: LOGIN_FAIL_RESPONSE,
        data: responseData
    }
}

export function logUserIn(formData, successCb, errorCb) {
    // dispatch(requestOrganizationData());
    return dispatch => {
        fetch('/api/obtain-auth-token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.status == 200) {
                response.json().then(data => {
                    dispatch(loginSuccessResponse(data));
                    successCb(data);
                });
            }
            else if (response.status == 400) {
                response.json().then(data => {
                    dispatch(loginFailResponse(data));
                    errorCb(data)
                });
            }
        })
    }
}