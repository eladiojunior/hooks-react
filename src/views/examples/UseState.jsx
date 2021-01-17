import React, {useState} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from "../../components/layout/SectionTitle";

const UseState = (props) => {
    const [count, setCount] = useState(0);
    const [nome, setNome] = useState("Inicial...");

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={() => setCount(count+1)}>+1</button>
                    <button className="btn" onClick={() => setCount(count-1)}>-1</button>
                    <button className="btn" onClick={() => setCount(atual => atual + 100)}>+100</button>
                </div>
            </div>
            <SectionTitle title="Exercício #02"/>
            <input type="text" className="input" value={nome} onChange={e => setNome(e.target.value)}/>
        </div>
    )
}

export default UseState
