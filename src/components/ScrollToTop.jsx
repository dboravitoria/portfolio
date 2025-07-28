import { useState, useEffect } from "react"
import {FaArrowUp} from '../utils/icons'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  //monitora a visibilidade do botão
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    // Adiciona o listener de scroll
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  //tola pro topo de maneira suave
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    // Botão de voltar ao topo
    <div className="fixed bottom-24 right-6 z-50">
      {isVisible && (
        <motion.div whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 300 }}>
          <button onClick={scrollToTop} className="bg-white/90 text-secondaryDark dark:border-white/15 border-secondaryDark/15 drop-shadow-sm backdrop-blur-sm shadow-custom  border-2  p-2.5 rounded-full transition duration-300 ease-in-out hover:bg-white dark:hover:bg-white dark:hover:text-secondaryDark
            hover:drop-shadow-custom dark:hover:border-2 dark:hover:border-secondaryDark/20" title="Voltar ao topo">
            <FaArrowUp size={20} />
          </button>
        </motion.div>
      )}                      
              
    </div>
  )
}
