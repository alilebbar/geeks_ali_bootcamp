import { useState } from 'react'
import './App.css'
import ThemeSwitcher from './component/ThemeSwitcher'
import { ThemeContext } from './context/theme'

function App() {
  const [theme, setTheme] = useState('light')
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', backgroundColor: theme === 'light' ? 'black' : 'white' }}>
          <ThemeSwitcher />
        </div>

      </ThemeContext.Provider>
    </>
  )
}

export default App
