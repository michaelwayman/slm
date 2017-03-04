import $ from 'jquery';


function login(username, pass, cb) {
    $.ajax({
        type: 'POST',
        url: '/api/obtain-auth-token/',
        data: {
            username: username,
            password: pass
        },
        success: function(response) {
            localStorage.token = response.token;
            cb({
                token: response.token,
                user: response.user
            })
        }
    });
}

function deleteToken() {
    delete localStorage.token
}

function loggedIn() {
    return !!localStorage.token
}

function requireAuth(nextState, replace) {
    console.log(nextState);
    console.log(replace);
    if (!loggedIn()) {
        replace({
            pathname:'/',
            state: {nextPathname: '/dashboard'}
        })
    }
}

export default {login, loggedIn, requireAuth, deleteToken}
