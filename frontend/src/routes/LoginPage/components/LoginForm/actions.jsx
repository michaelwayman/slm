import fetch from 'isomorphic-fetch';


export const SAVE_TOKEN_DATA = 'SAVE_TOKEN_DATA';
export function saveTokenData(data) {
    localStorage.email = data.email;
    localStorage.token = data.token;
    return {
        type: SAVE_TOKEN_DATA,
        data: data
    }
}

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

export const REQUEST_USER_LOGIN = 'REQUEST_USER_LOGIN';
export function requestUserLogin(formData) {
    return {
        type: REQUEST_USER_LOGIN,
        data: formData
    }
}

export function logUserIn(formData, successCb, errorCb) {
    return dispatch => {
        dispatch(requestUserLogin(formData));
        fetch('/api/obtain-auth-token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.status === 200) {
                response.json().then(data => {
                    dispatch(loginSuccessResponse(data));
                    dispatch(saveTokenData(data));
                    successCb(data);
                });
            }
            else if (response.status === 400) {
                response.json().then(data => {
                    dispatch(loginFailResponse(data));
                    errorCb(data)
                });
            }
        })
    }
}