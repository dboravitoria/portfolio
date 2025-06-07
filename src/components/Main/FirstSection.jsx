import Titulo from "./Titulo";
import Subtitulo from "./Subtitulo";
import Description from "./Description";
import Button from "./Button";


export default function FirstSection(){
    return(
        <>
            <div className="
            font-secondary font-semibold
            flex flex-col justify-center items-start gap-4 w-full max-w-[50%]
            ">
                <Titulo nome={"Olá, eu sou Débora Vitória"}/>
                <Subtitulo subtitulo={"Desenvolvedora Front-End..."}/>
                <Description/>
                <Button link="/curriculoDebora.pdf" 
                download
                title={"Baixar Currículo"}
                >Click para fazer Download do meu Currículo</Button>
                    <div className="
                    gap-4 flex
                    ">
                        <Button title={"Saiba mais sobre mim"}>Sobre Mim</Button>
                        <Button title={"Veja meus projetos"}>Ver Projetos</Button>
                    </div>
            </div>
        </>
    );
}