import React, {useState,useMemo} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from "../../components/layout/SectionTitle";

const somar = function (a, b) {
    const futuro = Date.now() + 2000;
    while (Date.now() < futuro) {} //Sleep 2s
    return a + b;
}

const UseMemo = (props) => {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [n3, setN3] = useState(0);

    //Pode utilizar o useEffect também
    /*
    const [resultado, setResultado] = useState(0)
    useEffect(function () {
        setResultado(somar(n1, n2));
    }, [n1, n2]);
    //const resultado = somar(n1, n2);
    */

    //Utilizar o useMemo
    const resultado = useMemo(() => somar(n1, n2), [n1, n2]);

    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <input type="number" className="input" value={n1} onChange={e => setN1(parseInt(e.target.value))}/>
                <input type="number" className="input" value={n2} onChange={e => setN2(parseInt(e.target.value))}/>
                <input type="number" className="input" value={n3} onChange={e => setN3(parseInt(e.target.value))}/>
                <span className="text">{resultado}</span>
            </div>

        </div>
    )
}

export default UseMemo
