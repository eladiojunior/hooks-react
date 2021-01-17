import {useState, useEffect} from "react";
export const useFetch = (url, method = 'get') => {
    const [responde, setResponde] = useState({
        data: null,
        loading: true
    });

    useEffect(function (){

        //------ Esperar 2 segundos... para ver o loading -------
        const futuro = Date.now() + 2000;
        while (Date.now() < futuro) {} //Sleep 2s
        //-------------------------------------------------------

        fetch(url, { method })
            .then(res => res.json())
            .then(json => setResponde({
                data: json,
                loading: false
            }));
    }, [url, method]);

    return responde;
}