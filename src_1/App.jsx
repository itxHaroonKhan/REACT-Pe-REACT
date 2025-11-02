import { useState, useEffect } from 'react'
import './index.css'
import ChildComponent from './component/child'

function App() {
  const [theme, setTheme] = useState("dark")


  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Click to change Theme
      </button>
      <ChildComponent theme={theme} />
    </>
  )
}

export default App
