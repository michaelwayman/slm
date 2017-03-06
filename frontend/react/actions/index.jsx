import fetch from 'isomorphic-fetch';


export const REQUEST_ORGANIZATION_DATA = 'REQUEST_ORGANIZATION_DATA';
export function requestOrganizationData() {
    return {
        type: REQUEST_ORGANIZATION_DATA,
    }
}

export const RECEIVE_ORGANIZATION_DATA = 'RECEIVE_ORGANIZATION_DATA';
export function receiveOrganizationData(responseData) {
    return {
        type: RECEIVE_ORGANIZATION_DATA,
        data: responseData
    }
}

export function fetchOrganizationData(organizationDetailsUrl) {
    return dispatch => {
        dispatch(requestOrganizationData());
        return fetch(organizationDetailsUrl)
            .then(response => response.json())
            .then(json => dispatch(receiveOrganizationData(json)))
      }
}
