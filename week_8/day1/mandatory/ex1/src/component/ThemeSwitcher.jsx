import { useContext } from 'react'
import { ThemeContext } from '../context/theme'
export default function ThemeSwitcher() {
    const { theme, setTheme } = useContext(ThemeContext)
    const handleClick = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
  return (
    <div>
      <button onClick={handleClick} >{theme}</button>
    </div>
  )
}