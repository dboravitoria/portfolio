import { useEffect, useState } from "react"
import {Sun, Moon } from '../../utils/icons'

export default function Toggle() {
  
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme")
    return storedTheme === "dark"
  })

  const toggleTheme = () => {
    setDarkMode(prev => {
      const newTheme = !prev
      localStorage.setItem("theme", newTheme ? "dark" : "light")
      return newTheme
    })
  }

  useEffect(() => {
    const html = document.documentElement
    if (darkMode) {
      html.classList.add("dark")
    } else {
      html.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <button onClick={toggleTheme} className="
        ml-4 p-1 backdrop-blur-sm rounded-full shadow-custom
        border-2 dark:bg-white/10 dark:border-white/15
        bg-secondaryDark/10 border-secondaryDark/15">
      {darkMode ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  )
}
