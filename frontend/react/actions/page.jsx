
export const SET_PAGE_STATE = 'SET_PAGE_STATE';
export function setPageState(newState) {
    return {
        type: SET_PAGE_STATE,
        newState: newState
    }
}


export const SET_PAGE_FORM_ERRORS = 'SET_PAGE_FORM_ERRORS';
export function setPageFormErrors(formErrors) {
    return {
        type: SET_PAGE_FORM_ERRORS,
        formErrors: formErrors
    }
}
