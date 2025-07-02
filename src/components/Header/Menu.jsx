import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react"
import Toggle from "./Toggle"
import Ancor from "./Ancor"

export default function Menu() {
    const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(prev => !prev)
  return (
    <>
        <div>
            <nav className="hidden md:flex gap-6 items-center">
            <Ancor link="/sobre" title="Sobre" />
            <Ancor link="/projetos" title="Projetos" />
            <Ancor link="/contato" title="Contato" />
            <Toggle />
            </nav>

        {/* Menu Mobile Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <Toggle />
          <button onClick={toggleMenu} aria-label="Abrir menu">
            {menuOpen ? <CloseIcon size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
        {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col gap-3 bg-transparent rounded-md p-2 font-primary">
            <Ancor link="/sobre" title="Sobre" toggle={toggleMenu}/>
            <Ancor link="/projetos" title="Projetos" toggle={toggleMenu}/>
            <Ancor link="/contato" title="Contato" toggle={toggleMenu}/>
          </nav>
        </div>
      )}
        </div>    
    </>
  )
}

