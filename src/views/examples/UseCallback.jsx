import React, {useState, useCallback} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from "../../components/layout/SectionTitle";
import UseCallbackButtons from "./UseCallbackButtons";

const UseCallback = (props) => {
    const [contador, setContador] = useState(0);

    //Criar uma funcão "cacheada" para evitar renderização.
    const inc = useCallback(function (delta) {
        setContador(current => current + delta);
    }, [setContador]);

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <span className="text">{contador}</span>
                <UseCallbackButtons inc={inc}/>
            </div>
        </div>
    )
}

export default UseCallback
