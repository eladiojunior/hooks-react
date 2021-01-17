import "./App.css";
import React, {useState} from "react";
import {BrowserRouter as Router} from "react-router-dom";

import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";
import DataContext, {data} from "../data/DataContext";
import Store from "../data/Store";

const App = props => {

    //Criar um estado para o contexto. Passar para Provider...
    const [context, setContext] = useState(data);

    return (
        <Store>
            <DataContext.Provider value={{context, setContext}}>
                <div className="App">
                    <Router>
                        <Menu/>
                        <Content/>
                    </Router>
                </div>
            </DataContext.Provider>
        </Store>
    )
}
export default App