import { useContext } from "react";
import ProfileContext from "../../../context/ProfileContext";

//componentes
import Button from "./Button";
import Titulo from "./Titulo"
import Subtitulo from "./Subtitulo";
import Description from "./Description";


export default function FirstSection(){

    const profile = useContext(ProfileContext)

    return(
        <>
            <div className="font-secondary font-semibold mt-4 md:mt-0 flex flex-col items-start gap-4 w-full">
                <Titulo/>
                <Subtitulo/>
                <Description/>
                    <div className="gap-4 flex">
                        <Button link={profile.redes.curriculo} download target={"_blank"} title={"Baixar Currículo"}>
                            Meu Currículo
                        </Button>

                        <Button title={"Saiba mais sobre mim"} link={"/sobre"}>
                            Sobre Mim
                        </Button>

                        <Button title={"Veja meus projetos"}link={"/projetos"}>
                            Ver Projetos
                        </Button>
                    </div>
            </div>
        </>
    );
}
