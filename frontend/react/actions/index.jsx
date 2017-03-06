import fetch from 'isomorphic-fetch';


export const RECEIVE_LOGIN_SUCCESS_RESPONSE = 'RECEIVE_LOGIN_SUCCESS_RESPONSE';
export function receiveLoginSuccessResponse(responseData) {
    return {
        type: RECEIVE_LOGIN_SUCCESS_RESPONSE,
        data: responseData
    }
}

export const RECEIVE_REGISTRATION_SUCCESS_RESPONSE = 'RECEIVE_REGISTRATION_SUCCESS_RESPONSE';
export function receiveRegistrationSuccessResponse(responseData) {
    return {
        type: RECEIVE_REGISTRATION_SUCCESS_RESPONSE,
        data: responseData
    }
}
