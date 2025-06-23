import './App.css'
import { useRef, useState } from 'react'

function App() {
  const ecrireRef = useRef()
  const [count, setCount] = useState(0)

  const handleInput = () => {
    setCount(ecrireRef.current.value.length)
  }

  return (
    <>
      <div>
        <label htmlFor="ecrire">Écrire :</label>
        <input
          type="text"
          id="ecrire"
          name="ecrire"
          ref={ecrireRef}
          onChange={handleInput}
        />
        <h1>{count} caractères</h1>
      </div>
    </>
  )
}

export default App
