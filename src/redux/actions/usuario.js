export function loginUsuario(dispatch, infoUsuario) {
    dispatch({type:"login", payload: infoUsuario});
}