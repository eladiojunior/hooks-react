import React, {useReducer, useState} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from "../../components/layout/SectionTitle";

//Exemplo para segmentar a solução, deixar mais profissional.
import {reducer, initialState} from "../../redux"
import {adicionarDois, multiplicarPorSete, dividirPorVinteCinto, converterParaInteiro, adicionarNumeroInformado, loginUsuario} from "../../redux/actions";

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [numeroSomar, setNumeroSomar] = useState(0);
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <div>
                    <span className="text">{(state.usuario ? state.usuario.login : "Não logado")}</span>
                    {state.usuario ? "" :
                        <button className="btn" onClick={() => loginUsuario(dispatch, {nome: "Eladio Júnior", email: "eladio.junior@gmail.com"})}>Logar</button>
                    }
                </div>
                <span className="text">{state.numero}</span>
                <div>
                    <button className="btn" onClick={() => adicionarDois(dispatch)}>+2</button>
                </div>
            </div>

            <SectionTitle title="Exercício #02 - Desafio"/>
            <p>Multiplicar por 7, dividir 25, transformar em Inteiro (parseInt) e adicionar um número informado.</p>
            <div className="center">
                <span className="text">{state.numero}</span>
                <input type="number" className="input" value={numeroSomar} onChange={e => setNumeroSomar(e.target.value)}/>
                <div>
                    <button className="btn" onClick={() => multiplicarPorSete(dispatch)}>x7</button>
                    <button className="btn" onClick={() => dividirPorVinteCinto(dispatch)}>÷25</button>
                    <button className="btn" onClick={() => converterParaInteiro(dispatch)}>Int</button>
                    <button className="btn" onClick={() => adicionarNumeroInformado(dispatch, numeroSomar)}>+Número</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
