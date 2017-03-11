
export const SET_PAGE_STATE = 'SET_PAGE_STATE';
export function setPageState(newState) {
    return {
        type: SET_PAGE_STATE,
        newState: newState
    }
}