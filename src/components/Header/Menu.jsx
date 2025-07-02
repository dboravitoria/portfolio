import { useState } from "react"
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react"
import Toggle from "./Toggle"
import Ancor from "./Ancor"

export default function Menu() {
    const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(prev => !prev)
  return (
    <>
        <div className="sm:-mb-4 md:mb-0">
            <nav className="hidden md:flex gap-6 items-center">
            <Ancor link="/" title={"Início"}/>
            <Ancor link="/sobre" title="Sobre" />
            <Ancor link="/projetos" title="Projetos" />
            <Ancor link="/contato" title="Contato" />
            <Toggle />
            </nav>

        {/* Menu Mobile Toggle */}
        <div className="md:hidden flex items-center justify-end gap-3">
          <Toggle />
          <button onClick={toggleMenu} aria-label="Abrir menu">
            {menuOpen ? <CloseIcon size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
        {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden p-4 ">
          <nav className="flex  gap-3 border dark:bg-white/10 dark:border-white/15 backdrop-blur-sm
          bg-secondaryDark/10 border-secondaryDark/15 rounded-md p-2 font-primary ">
            <Ancor link="/" title={"Início"} toggle={toggleMenu}/>
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

