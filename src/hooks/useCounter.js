import {useState} from "react";
export const useCounter = (inicialValue = 100) => {
    const [count, setCount] = useState(inicialValue);
    function incrementar() {
        setCount(count + 1);
    }
    function decrementar() {
        setCount(count - 1);
    }
    return [count, incrementar, decrementar];
}