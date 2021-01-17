import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from "../../components/layout/SectionTitle";
import {useCounter} from "../../hooks/useCounter";
import {useFetch} from "../../hooks/useFetch";

const UseRef = (props) => {
    const [count, incrementar, decrementar] = useCounter(10);
    const url = "http://localhost:3000/estados.json";
    const responde = useFetch(url);

    function mostrarEstados(estados) {
        return estados.map(estado => <tr key={estado.sigla}>
            <td>{estado.sigla}</td>
            <td>{estado.nome}</td>
        </tr>)
    }

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={() => incrementar()}>+1</button>
                    <button className="btn" onClick={() => decrementar()}>-1</button>
                </div>
            </div>
            <SectionTitle title="Exercício #02"/>
            <p>Criando um Hook (useFetch) para recuperar informações de um arquivo JSON.</p>
            <div className="center">
                <table border="1">
                    <thead>
                    <tr>
                        <th>Sigla</th>
                        <th>Nome</th>
                    </tr>
                    </thead>
                    <tbody>
                    {responde.loading ? <tr>
                        <td colSpan="2">Carregando as informações...</td>
                    </tr> : mostrarEstados(responde.data)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UseRef
