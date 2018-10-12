// let username = localStorage.getItem('username');
// let pw = localStorage.getItem('pw');
// const initialState = [username,pw];
export function authentication(state = [], action) {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return {
                user: action.user
            };
        case 'LOGIN_SUCCESS':
            return {
                user: action.user
            };
        case 'LOGIN_FAILURE':
            return {
                error:action.error
            };
        case 'LOGOUT':
            return {};
        default:
            return state
    }
}