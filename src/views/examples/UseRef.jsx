import React, {useState, useEffect, useRef} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from "../../components/layout/SectionTitle";

const mergeValor = function (s1, s2) {
    /*
    // Exemplo instrutor
    return [...s1].map(function (letra, idx) {
        return `${letra}${(s2[idx] || "")}`
    }).join("");
    */

    let result = "";
    const qtd = ((s1 || "").length > (s2 || "").length) ? (s1 || "").length : (s2 || "").length;
    for (let i=0; i < qtd; i++) {
        result += (s1[i] || "") + (s2[i] || "");
    }
    return result;
}

const UseRef = (props) => {

    const [valor1, setValor1] = useState("");
    const [valor2, setValor2] = useState("");
    const qtd = useRef(0);
    const input1 = useRef(null);
    const input2 = useRef(null);

    useEffect(function () {
        qtd.current++;
        input2.current.focus();
    }, [valor1]);

    useEffect(function () {
        qtd.current++;
        input1.current.focus();
    }, [valor2]);


    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{mergeValor(valor1, valor2)} [</span>
                    <span className="text red">{qtd.current}</span>
                    <span className="text">]</span>
                </div>
                <input type="text" className="input" ref={input1}
                       value={valor1} onChange={e => setValor1(e.target.value)}/>
            </div>
            <SectionTitle title="Exercício #02"/>
            <div className="center">
                <input type="text" className="input" ref={input2}
                    value={valor2} onChange={e => setValor2(e.target.value)}/>
            </div>
        </div>
    )
}

export default UseRef
