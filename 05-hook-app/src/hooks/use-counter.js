import { useState } from 'react'

export const useCounter = ( initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = (number = 1) => {
        setCounter(counter + number)
    }
    const decrement = (number = 1) => {
        if( counter === 0) return;
        setCounter(counter - number)
        
    }

    const reset = () =>{
        setCounter(initialValue)
    }





    return {
        counter,
        increment,
        decrement,
        reset
        
    
    }
}