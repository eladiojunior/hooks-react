import React, {useState} from "react";

const initStateApp = {
    number: 1234,
    text: "Context API + Hooks"
}

export const AppContext = React.createContext(initStateApp);

const Store = (props) => {
    const [context, setContext] = useState(initStateApp);
    function updateContext(key, value) {
        setContext({
            ...context, [key]: value
        })
    }
    return (
        //Estrutura segura de passar as funções de alteração de contexto.
        <AppContext.Provider value={{
            number: context.number,
            text: context.text,
            setNumber: n => updateContext("number", n),
            setText: t => updateContext("text", t)
        }}>
            {props.children}
        </AppContext.Provider>
    );
}
export default Store;