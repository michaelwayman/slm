
export function loggedIn() {
    return !!getUser()
}

export function logOut() {
    localStorage.clear()
}

export function saveUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
}

export function getUser() {
    try {
        return JSON.parse(localStorage.user)
    }
    catch(e) {
        return null;
    }
}
