import { setPageFormErrors } from '../page.jsx';

export function handleResponse(dispatch, successActionType) {
    return (response) => {
        if (response.ok) {
            return response.json().then(json => {
                dispatch({type: successActionType, data: json});
                return json;
            });
        }
        else if (response.status === 400) {
            response.json().then(json => {
                dispatch(setPageFormErrors(json));
            });
        }
        const error = new Error();
        error.response = response;
        throw error;
    }
}

export function handleError(dispatch, failActionType) {
    return (error) => {
        const {response} = error;
        dispatch({type: failActionType, response});
        throw error;
    }
}
