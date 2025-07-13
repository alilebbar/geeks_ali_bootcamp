import { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState <number>(0)
    const [lastAction, setLastAction] = useState <string>("")

    const increment = ()=>{
        setCount(count + 1)
        setLastAction("increment")
    }
    const decrement = ()=>{
        setCount(count - 1)
        setLastAction("decrement")
    }
    return(
        <>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <p>Last action: {lastAction}</p>
        </>
    )
}