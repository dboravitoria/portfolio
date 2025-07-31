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
            <nav className="hidden md:flex gap-2 lg:gap-4 items-center">
            <Ancor link="/inicio" title={"Início"}/>
            <Ancor link="/sobre" title="Sobre" />
            <Ancor link="/projetos" title="Projetos" />
            <Ancor link="/contato" title="Contato" />
            <Toggle />
            </nav>

        {/* Menu Mobile Toggle */}
        <div className="md:hidden flex items-center justify-end gap-3 mr-10">
          <Toggle />
          <button onClick={toggleMenu} aria-label="Abrir menu">
            {menuOpen ? <CloseIcon size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
        {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden mr-12 py-2 ">
          <nav className="flex flex-col -mr-12 gap-2 dark:bg-white/10 dark:border-white/15 backdrop-blur-sm
          bg-secondaryDark/10 border-secondaryDark/15 rounded-md p-2 text-center">
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

