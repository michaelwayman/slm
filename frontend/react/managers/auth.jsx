import $ from 'jquery';


function getToken(username, pass, cb) {
    $.ajax({
        type: 'POST',
        url: '/api/obtain-auth-token/',
        data: {
            username: username,
            password: pass
        },
        success: function(response){
            cb({
                authenticated: true,
                token: response.token
            })
        }
    })
}

function login(username, pass, cb) {
    if (localStorage.token) {
        if (cb) cb(true);
        return
    }
    getToken(username, pass, (response) => {
        if (response.authenticated) {
            localStorage.token = response.token;
            if (cb) cb(true)
        } else {
            if (cb) cb(false)
        }
    })
}

function logout() {
    delete localStorage.token
}

function loggedIn() {
    return !!localStorage.token
}

function requireAuth(nextState, replace) {
    if (!loggedIn()) {
        replace({
            pathname:'/login/',
            state: {nextPathname: '/app/'}
        })
    }
}

export default {login, loggedIn, requireAuth}