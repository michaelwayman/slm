
function loggedIn() {
    return !!localStorage.token
}

function logOut() {
    localStorage.clear()
}

function saveToken(token) {
    localStorage.setItem('token', token)
}

function getToken() {
    return localStorage.token
}


export {loggedIn, logOut, getToken, saveToken}
