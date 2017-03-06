import fetch from 'isomorphic-fetch';


export const RECEIVE_LOGIN_RESPONSE = 'RECEIVE_LOGIN_RESPONSE';
export function receiveLoginResponse(responseData) {
    return {
        type: RECEIVE_LOGIN_RESPONSE,
        data: responseData
    }
}
