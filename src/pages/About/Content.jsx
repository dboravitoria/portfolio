import Header from "../../components/Header/Header";
import Container from "../../components/elements/Container";
import Section from "../../components/elements/Section";
import Title from "../../components/elements/Title";
import Footer from "../../components/Footer/Footer"
import WrapperBlur from "../../components/elements/WrapperBlur";
import Subtitle from "../../components/elements/Subtitle";
import Description from "../../components/elements/Description"

export default function Content(){
    return(
        <>
            <div className="
             min-h-screen min-w-screen selection:bg-intermediarie
            ">
                <Header/>
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
                </Container>
                <Footer/>
            </div>
        </>
    );
}