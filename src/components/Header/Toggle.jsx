import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"
function Toggle() {
  const [darkMode, setDarkMode] = useState(false)
  const toggleTheme = () => {
    setDarkMode(prev => !prev)
  }

  // Aplica o tema no HTML
  useEffect(() => {
    const html = document.documentElement
    if (darkMode) {
      html.classList.add("dark")
    } else {
      html.classList.remove("dark")
    }
  }, [darkMode])
  return (
        <>
            <button onClick={toggleTheme} className="ml-4">
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>
        </>
  )
}

export default Toggle