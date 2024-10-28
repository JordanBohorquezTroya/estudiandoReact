import PropTypes from 'prop-types'
import {useState} from "react";

export const CounterApp = ({value}) => {
    const [ counter, setCounter] = useState(value);
    
    
    const Clicked = () => {
        setCounter(counter +1)
    }

    const Decrementar = () =>{
        setCounter(counter -1)
    }

    const Reset = () =>{
        setCounter(value)
    }





    return (
        <>
        <h1>Hello World</h1>
        <h2> { counter } </h2>
        <button onClick={Clicked}>
            +1
        </button>
        <button onClick={Decrementar}>
            -1
        </button>
        <button onClick={Reset}>
            Reset
        </button>

        </> 
    )
}

CounterApp.propTypes = {
    value : PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value : 0
}