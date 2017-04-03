import fetch from 'isomorphic-fetch';


export const DASHBOARD_DETAILS_SUCCESS_RESPONSE = 'DASHBOARD_DETAILS_SUCCESS_RESPONSE';
export function dashboardDetailsSuccessResponse(responseData) {
    return {
        type: DASHBOARD_DETAILS_SUCCESS_RESPONSE,
        data: responseData
    }
}

export const DASHBOARD_DETAILS_FAIL_RESPONSE = 'DASHBOARD_DETAILS_FAIL_RESPONSE';
export function dashboardDetailsFailResponse(responseData) {
    return {
        type: DASHBOARD_DETAILS_FAIL_RESPONSE,
        data: responseData
    }
}

export const REQUEST_DASHBOARD_DETAILS = 'REQUEST_DASHBOARD_DETAILS';
export function requestDashboardDetails() {
    return {
        type: REQUEST_DASHBOARD_DETAILS,
    }
}

export const USER_LOGOUT = 'USER_LOGOUT';
export function logUserOut() {
    delete localStorage.token;
    return {
        type: USER_LOGOUT,
    }
}

export function fetchDashboardDetails(token, successCb, errorCb) {
    return dispatch => {
        dispatch(requestDashboardDetails());
        fetch('/api/dashboard/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        })
        .then(response => {
            if (response.status == 200) {
                response.json().then(data => {
                    dispatch(dashboardDetailsSuccessResponse(data));
                    successCb(data);
                });
            }
            else {
                response.json().then(data => {
                    dispatch(dashboardDetailsFailResponse(data));
                    errorCb(data)
                });
            }
        })
    }
}