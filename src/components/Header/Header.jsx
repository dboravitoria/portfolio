import Navigation from "./Navigation";
import Logo from "./Logo";
import Menu from "./Menu"
import Link from "./Link";
import { Toggle } from "./Toggle";
export default function Header(){
    return(
        <>
            <header className="
            bg-transparent
            absolute top-0 sm:flex sm:flex-col
            w-full max-h-40
            ">
               <Navigation>
                    <Logo/>
                    <Toggle/>
                    <Menu>
                        <Link title={"Sobre"}>Sobre</Link>
                        <Link title={"Projetos"}>Projetos</Link>
                        <Link title={"Contato"}>Contato</Link>
                    </Menu>
                    
               </Navigation>
               
            </header>
        </>
    );
}