export function accountReducer(state = {}, action) {
    switch (action.type) {
        case '':
            return Object.assign({}, state, action.newState);
            break;
        default:
            return state;
    }
}
