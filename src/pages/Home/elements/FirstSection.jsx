
import Titulo from "./Titulo"
import Subtitulo from "./Subtitulo";
import Description from "./Description";
import Button from "./Button";


export default function FirstSection(){
    
    return(
        <>
                <div className="
                font-secondary font-semibold sm:-mt-10 md:mt-0
                flex flex-col items-start gap-5 w-full p-4 
                ">
                    <Titulo/>
                    <Subtitulo/>
                    <Description/>
                    <Button link="/curriculoAtualizado.pdf"
                    download target={"_blank"}
                    title={"Baixar Currículo"}
                    >Click para fazer Download do meu Currículo</Button>
                        <div className="
                        gap-4 flex
                        ">
                            <Button title={"Saiba mais sobre mim"} link={"/sobre"}>Sobre Mim</Button>
                            <Button title={"Veja meus projetos"}link={"/projetos"}>Ver Projetos</Button>
                        </div>
                </div>
        </>
    );
}
