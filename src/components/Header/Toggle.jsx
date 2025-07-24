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
            <button onClick={toggleTheme} className="
            ml-4 p-1 backdrop-blur-sm rounded-full
            border-2 dark:bg-white/10 dark:border-white/15
                bg-secondaryDark/10 border-secondaryDark/15
            ">
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </>
  )
}

export default Toggle