import React, {useContext, useEffect} from 'react'
import PageTitle from '../../components/layout/PageTitle'

import DataContext from "../../data/DataContext";
import SectionTitle from "../../components/layout/SectionTitle";
import {AppContext} from "../../data/Store";

const UseContext = (props) => {

    //Exercício #01

    //Primeiro exemplo (dataContext.context...
    //const dataContext = useContext(DataContext);

    //Desestrutura utilizando diretamente, mais simples...
    const {context, setContext} = useContext(DataContext);
    function setNumberContext(number) {
        setContext({
            ...context, //Manter os dados do contexto e alterar somente o que precisa.
            number: context.number + number
        })
    }

    //Exercício #02
    const {number, setNumber} = useContext(AppContext);
    const {text, setText} = useContext(AppContext);

    useEffect(function () {
        if (number > 1250) {
            setText("Eita!!! Estorou");
        }
        // eslint-disable-next-line
    }, [number]);

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <span className="text">{context.number}</span>
                <span className="text">{context.text}</span>
                <div>
                    <button className="btn" onClick={() => setNumberContext(-1)}>-1</button>
                    <button className="btn" onClick={() => setNumberContext(1)}>+1</button>
                </div>
            </div>

            <SectionTitle title="Exercício #02 - Store"/>
            <div className="center">
                <span className="text">{number}</span>
                <span className="text">{text}</span>
                <div>
                    <button className="btn" onClick={() => setNumber(number-1)}>-1</button>
                    <button className="btn" onClick={() => setNumber(number+1)}>+1</button>
                </div>
            </div>

        </div>
    )
}

export default UseContext
