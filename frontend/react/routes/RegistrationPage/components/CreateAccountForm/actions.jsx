import fetch from 'isomorphic-fetch';


export const CREATE_ACCOUNT_SUCCESS_RESPONSE = 'CREATE_ACCOUNT_SUCCESS_RESPONSE';
export function createAccountSuccessResponse(responseData) {
    return {
        type: CREATE_ACCOUNT_SUCCESS_RESPONSE,
        data: responseData
    }
}

export const CREATE_ACCOUNT_FAIL_RESPONSE = 'CREATE_ACCOUNT_FAIL_RESPONSE';
export function createAccountFailResponse(responseData) {
    return {
        type: CREATE_ACCOUNT_FAIL_RESPONSE,
        data: responseData
    }
}

export function createAccount(formData, successCb, errorCb) {
    return (dispatch, getState) => {
        const user = getState().user;
        fetch(`/api/account/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${user.token}`
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.status === 20) {
                response.json().then(data => {
                    dispatch(createAccountSuccessResponse(data));
                    successCb(data);
                });
            }
            else if (response.status === 400) {
                response.json().then(data => {
                    dispatch(createAccountFailResponse(data));
                    errorCb(data)
                });
            }
        })
    }
}