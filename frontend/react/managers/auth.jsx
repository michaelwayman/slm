
function logout(cb) {
    deleteTokenData();
    if (cb) cb();
}

function register(email, pass, cb) {

    // $.ajax({
    //     type: 'POST',
    //     url: '/api/users/',
    //     data: {
    //         email: email,
    //         password: pass
    //     },
    //     success: function(data, textStatus, jqXHR) {
    //         localStorage.email = email;
    //         cb(jqXHR.status, data)
    //     },
    //     error: function(jqXHR, textStatus, errorThrown) {
    //         cb(jqXHR.status, jqXHR.responseJSON)
    //     }
    // });
}

function saveTokenData(token, email) {
    localStorage.token = token;
    localStorage.email = email;
}

function deleteTokenData() {
    delete localStorage.token;
    // delete localStorage.email;
}

function loggedIn() {
    return !!localStorage.token
}

function requireAuthorization(nextState, replace) {
    if (!loggedIn()) {
        replace({
            pathname:'/login',
            state: {nextPathname: '/dashboard'}
        })
    }
}

function authorizedRedirect(nextState, replace) {
    if (loggedIn()) {
        replace({
            pathname:'/dashboard',
            state: {nextPathname: '/'}
        })
    }
}

export default {loggedIn, requireAuthorization, logout, authorizedRedirect, register, saveTokenData}
