/*
Utilizando para funcionalidades mais complexas, exemplo buscar algo no backend...
fetch('url')
    .then(resp => resp.json())
    .then(json => dispacth({type:"listarProdutos", playload: json}));
*/
export function adicionarDois(dispatch) {
    dispatch({type: "adicionarMaisDois"});
}
export function multiplicarPorSete(dispatch) {
    dispatch({type:"multiplicarPorSete"});
}
export function dividirPorVinteCinto(dispatch) {
    dispatch({type:"dividirPorVinteCinto"});
}
export function converterParaInteiro(dispatch) {
    dispatch({type: "converterParaInteiro"});
}
export function adicionarNumeroInformado(dispatch, numero) {
    dispatch({type:"adicionarNumeroInformado", playload: {numero: numero}});
}
