export function numberReducer(state, action) {
    switch (action.type) {
        case 'adicionarMaisDois':
            return {...state, numero: state.numero + 2};
        case 'multiplicarPorSete':
            return {...state, numero: state.numero * 7};
        case 'dividirPorVinteCinto':
            return {...state, numero: state.numero / 25};
        case 'converterParaInteiro':
            return {...state, numero: parseInt(state.numero)};
        case 'adicionarNumeroInformado':
            return {...state, numero: state.numero + parseInt(action.playload.numero)};
        default:
            return state;
    }
}