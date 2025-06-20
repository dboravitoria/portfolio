import { Link } from "react-router-dom"
import Navigation from "./Navigation";
import Logo from "./Logo";
import Menu from "./Menu"
import Ancor from "./Ancor";
import { Toggle } from "./Toggle";

export default function Header(){
    return(
        <>
            <header className="
            bg-transparent
            top-0 sm:flex sm:flex-col sm:-mt-14
            w-full max-h-40 absolute
            ">
               <Navigation>
                    <Logo/>
                    <Toggle/>
                    <Menu>
                        <Link to="/sobre">
                            <Ancor title={"Sobre"}>Sobre</Ancor>
                        </Link>
                        <Link to="/projetos">
                            <Ancor title={"Projetos"}>Projetos</Ancor>
                        </Link>
                        <Link to="/contato">
                            <Ancor title={"Contato"}>Contato</Ancor>
                        </Link>
                    </Menu>
                    
               </Navigation>
               
            </header>
        </>
    );
}