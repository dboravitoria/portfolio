import { useContext } from "react";
import ProfileContext from "../../../context/ProfileContext";

//componentes
import Button from "./Button";
import Titulo from "./Titulo"
import Subtitulo from "./Subtitulo";
import Description from "./Description";
import { Link } from "react-router-dom";


export default function FirstSection(){

    const profile = useContext(ProfileContext)

    return(
        <>
            <div className="font-secondary font-semibold mt-4 md:mt-0 flex flex-col items-start gap-4 w-full">
                <Titulo/>
                <Subtitulo/>
                <Description/>
                    <div className="gap-4 flex">
                        <a href={profile.redes.curriculo} target="_blank" rel="noopener noreferrer" className="text-secondaryDark dark:text-white
                        dark:bg-white/10 bg-secondaryDark/10 backdrop-blur-md  p-2 rounded-full border-2 dark:border-white/15 border-secondaryDark/15 shadow-custom transition  hover:bg-white dark:hover:bg-white dark:hover:text-secondaryDark hover:drop-shadow-custom dark:hover:border-2 dark:hover:border-secondaryDark/20 hover:scale-105 cursor-pointer sm:text-sm md:text-md lg:text-lg">
                        Currículo
                        </a>


                        <Button title={"Saiba mais sobre mim"} link={"/sobre"}>
                            Sobre
                        </Button>

                        <Button title={"Veja meus projetos"}link={"/projetos"}>
                            Projetos
                        </Button>
                    </div>
            </div>
        </>
    );
}
