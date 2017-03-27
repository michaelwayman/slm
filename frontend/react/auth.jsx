
function loggedIn() {
    return !!localStorage.token
}

function logOut() {
    localStorage.clear()
}

function getToken() {
    return localStorage.token
}


export {loggedIn, logOut, getToken}
