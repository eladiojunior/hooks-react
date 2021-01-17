export function usuarioReducer(state, action) {
    switch (action.type) {
        case 'login':
            return {...state, usuario: {login: action.payload.email}};
        default:
            return state;
    }
}