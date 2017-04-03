
function loggedIn() {
    return !!localStorage.token
}

function requireAuthorization(nextState, replace) {
    if (!loggedIn()) replace({pathname:'/login', state: {nextPathname: '/dashboard'}})
}

function authorizedRedirect(nextState, replace) {
    if (loggedIn()) replace({pathname:'/dashboard', state: {nextPathname: '/'}})
}

export {loggedIn, requireAuthorization, authorizedRedirect}
