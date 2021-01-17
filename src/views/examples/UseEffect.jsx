import React, {useState, useEffect} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from "../../components/layout/SectionTitle";

function calcularFatorial(n) {
    const numero = parseInt(n);
    if (numero < 0) return -1;
    if (numero === 0) return 1;
    return calcularFatorial( numero - 1) * numero;
}

function calcularParOuImpar(n) {
    const numero = parseInt(n);
    return ((numero % 2) === 0 ? "Par" : "Ímpar");
}

const qtdMaxTexto = 50;

function calcularQtdTexto(n) {
    const tam = parseInt(n);
    if (tam > qtdMaxTexto) {
        return -1;
    }
    return qtdMaxTexto - tam;
}


const UseEffect = (props) => {
    const [qtd, setQtd] = useState(1);
    const [fatorial, setFatorial] = useState(1);
    const [parOuImpar, setParOuImpar] = useState("Ímpar");

    useEffect(function (){
        setFatorial(calcularFatorial(qtd));
        setParOuImpar(calcularParOuImpar(qtd));
    }, [qtd]);

    const [qtdTexto, setQtdTexto] = useState(qtdMaxTexto);
    const [limiteExcedido, setLimiteExcedido] = useState(false);
    const [conteudo, setConteudo] = useState("");

    useEffect(function (){
        const qtdTexto = calcularQtdTexto(conteudo.length);
        setQtdTexto( (qtdTexto === -1 ? "0" : qtdTexto));
        setLimiteExcedido(qtdTexto === -1);
    }, [conteudo]);

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? "Inválido" : fatorial}</span>
                </div>
                <input type="number" className="input" value={qtd} onChange={e => setQtd(e.target.value)}/>
            </div>

            <SectionTitle title="Exercício #02 - Desafio"/>
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{parOuImpar}</span>
                </div>
            </div>
            <SectionTitle title="Exercício #03"/>
            <textarea className={limiteExcedido ? "text-area red" : "text-area"} rows="5" value={conteudo} onChange={e => setConteudo(e.target.value)}/>
            <span className={limiteExcedido ? "red" : ""}>Quantidade caracteres: {qtdTexto}</span>
        </div>
    )
}

export default UseEffect
