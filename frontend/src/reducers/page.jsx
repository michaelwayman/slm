import {
    SET_PAGE_STATE,
    SET_PAGE_FORM_ERRORS,
} from '../actions/index.jsx';


export function pageReducer(state = {}, action) {
    switch (action.type) {
        case SET_PAGE_STATE:
            return Object.assign({}, state, action.newState);
        case SET_PAGE_FORM_ERRORS:
            return Object.assign({}, state, {formErrors: action.formErrors});
        default:
            return state;
    }
}
