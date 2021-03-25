export function loginAction(token) {
    return {
        type: '@auth/LOGIN',
        payload: { token }
    }
}

export function logoutAction() {
    return {
        type: '@auth/LOGOUT'
    }
}

export function setName(name) {
    return {
        type: '@auth/SETNAME',
        payload: { name }
    }
}