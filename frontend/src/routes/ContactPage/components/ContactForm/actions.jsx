import fetch from 'isomorphic-fetch';


export const CONTACT_SUCCESS_RESPONSE = 'CONTACT_SUCCESS_RESPONSE';
export function contactSuccessResponse(responseData) {
    return {
        type: CONTACT_SUCCESS_RESPONSE,
        data: responseData
    }
}

export const CONTACT_FAIL_RESPONSE = 'CONTACT_FAIL_RESPONSE';
export function contactFailResponse(responseData) {
    return {
        type: CONTACT_FAIL_RESPONSE,
        data: responseData
    }
}

export const REQUEST_CONTACT_SUBMIT = 'REQUEST_CONTACT_SUBMIT';
export function requestContactSubmit(formData) {
    return {
        type: REQUEST_CONTACT_SUBMIT,
        data: formData
    }
}

export function contactSubmit(formData, successCb, errorCb) {
    return dispatch => {
        dispatch(requestContactSubmit(formData));
        fetch('/api/contact/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.status === 201) {
                response.json().then(data => {
                    dispatch(contactSuccessResponse(data));
                    successCb(data);
                });
            }
            else {
                response.json().then(data => {
                    dispatch(contactFailResponse(data));
                    errorCb(data)
                });
            }
        })
    }
}