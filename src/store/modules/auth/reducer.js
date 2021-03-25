const INITIAL_STATE = {
    token: null,
    name: null,
};

export default function auth(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@auth/LOGIN': {
            return {
                ...state,
                token: action.payload.token
            }
        }
        case '@auth/LOGOUT': {
            return {
                ...state,
                token: null
            }
        }
        case '@auth/SETNAME': {
            return {
                ...state,
                name: action.payload.name
            }
        }
        default:
            return state;
    }
}