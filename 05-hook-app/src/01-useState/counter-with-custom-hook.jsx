import { useCounter } from '../hooks/use-counter'

export const CounterWithCustomHook = () => {

  const { counter, increment, decrement, reset } = useCounter()

  return (
    <>
        <h1>Counter width hook {counter}</h1>
        <hr />
        <button className="btn btn-primary" onClick={() => increment(2)}>+</button>
        <button className="btn btn-primary" onClick={() => decrement(2)}>-</button>
        <button className="btn btn-primary" onClick={reset}>Reset</button>
    </>
  )
}
