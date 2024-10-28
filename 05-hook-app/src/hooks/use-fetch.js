import { useEffect, useState } from "react";

export const useFetch = () => {
  
    const [state, setState] = useState({
        data: null,
        isLoadind : true,
        MessageError: false,
        error: null
    })

    useEffect(() => {
    
        getFech()
    
     
    }, [])

    const getFech =  async () =>{
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        const data = await resp.json()
        console.log(data)
    }
    
  

    return {
        data: state.data,
        isLoadind: state.isLoadind,
        MessageError: state.MessageError

    };
};
