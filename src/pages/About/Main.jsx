import Container from "./elements/Container";
import Section from "./elements/Section"
import Title from "./elements/Title"
import WrapperBlur from "./elements/WrapperBlur";
import Subtitle from "./elements/Subtitle";
import Description from "./elements/Description";

export default function Main(){
    return(
        <>
            <Container>
                    <Title title={"Quem sou eu?"}/>
                    <Section>
                        <WrapperBlur>
                            <Subtitle subtitle={"💻 Desenvolvedora Front-end | Apaixonada por tecnologia e design"}/>
                            <Description text={" Sou uma desenvolvedora front-end dedicada a criar interfaces intuitivas e acessíveis, sempre buscando aprimorar minhas habilidades para entregar experiências incríveis aos usuários."}/>
                            <Description text={"Recém formada e com uma trajetória focada no estudo de tecnologias modernas, tenho experiência em HTML, CSS, JavaScript e frameworks como React. Além disso, me interesso por UI/UX e estou constantemente explorando formas de unir código e design para desenvolver soluções funcionais e esteticamente agradáveis."}/>
                            <Description text={"Atualmente, estou aperfeiçoando minhas habilidades em desenvolvimento full stack, estudando banco de dados, autenticação e boas práticas para tornar minhas aplicações mais robustas e escaláveis. Meu objetivo é crescer na área de tecnologia, contribuir com projetos impactantes e seguir aprendendo todos os dias."}/>
                        </WrapperBlur>
                    </Section>
                    <Section>
                        <WrapperBlur>
                            <Subtitle subtitle={"🎨  Hobbies e Interesses"}/>
                            <Description text={"Além da tecnologia, tenho um lado criativo e artístico que reflete nos meus interesses:"}/>
                            <Description text={"☕ Tomar café enquanto estudo ou assisto algo é um dos meus pequenos rituais diários."}/>
                            <Description text={"🎶 Apaixona por música, ouço e toco instrumentos musicais como o piano e órgão. Que é uma das formas que encontro para relaxar e me expressar."}/>
                            <Description text={"🎬 Sou fã da Marvel, Harry Potter, O Senhor dos Anéis, Star Wars e adoro acompanhar as novidades do mundo nerd."}/>
                            <Description text={"📖 Amo ler e sempre tenho um livro ou quadrinho por perto."}/>
                        </WrapperBlur>
                        <WrapperBlur>
                            <Subtitle subtitle={" ✨ Minha Motivação"}/>
                            <Description text={"Desde que comecei minha jornada na tecnologia, descobri que programar é muito mais do que escrever código. É sobre resolver problemas, criar experiências e impactar a vida das pessoas. Meu objetivo é continuar aprendendo, evoluindo e construindo interfaces que tornem a web um lugar mais acessível e intuitivo para todos."}/>
                        </WrapperBlur>
                    </Section>
                    
                        {/* <WrapperBlur>
                            <div class="grid grid-cols-3 gap-0 place-items-center max-w-fit">
                                <div class="relative bg-red-600 w-16 h-16 flex items-center justify-center rounded-xl
                                shadow-[8px_8px_0_#dc2626] active:shadow-none active:transition-all
                                transform -rotate-x-12 rotate-y-6 scale-90
                                hover:scale-95 transition-transform duration-150 cursor-pointer active:select-none active:translate-y-1">
                                </div>
                                <div class="relative bg-orange-600 w-16 h-16 flex items-center justify-center rounded-xl
                                shadow-[8px_8px_0_#ea580c] active:shadow-none active:transition-all
                                transform -rotate-x-12 rotate-y-6 scale-90
                                hover:scale-95 transition-transform duration-150 cursor-pointer active:select-none active:translate-y-1">
                                </div>
                                <div class="relative bg-yellow-400 w-16 h-16 flex items-center justify-center rounded-xl
                                shadow-[8px_8px_0_#facc15] active:shadow-none active:transition-all
                                transform -rotate-x-12 rotate-y-6 scale-90
                                hover:scale-95 transition-transform duration-150 cursor-pointer active:select-none active:translate-y-1">
                                </div>
                                
                            </div>
                        </WrapperBlur> */}
                </Container>
        </>
    );
}