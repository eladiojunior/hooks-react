import {numberReducer} from "./number";
import {usuarioReducer} from "./usuario";

//Controle o estado (state) e o fluxo de ações (action) do módulo.
export function reducer(state, action) {
    let newRedurce = numberReducer(state, action);
    return usuarioReducer(newRedurce, action);
}