import { useContext,useState } from "react"
import Container from "./elements/Container";
import Section from "./elements/Section"
import Title from "./elements/Title"
import WrapperBlur from "./elements/WrapperBlur";
import Subtitle from "./elements/Subtitle";
import Description from "./elements/Description";
import { FiChevronDown } from "react-icons/fi"
import ProfileContext from "../../context/ProfileContext";

export default function Main(){
    const profile = useContext(ProfileContext)
    const [openIndex, setOpenIndex] = useState(null)

    const toggle = (index) => {
    setOpenIndex(prev => (prev === index ? null : index))
    }

    const interestsEntries = Object.entries(profile.sobre.interesses)
    .filter(([key]) => key !== "introducao")

    
    return(
        <>
            <Container>
                    <Title title={"Quem sou eu?"}/>
                    <Section>
                        <WrapperBlur>
                            <Subtitle subtitle={profile.sobre.dev.titulo}/>
                            <Description text={profile.sobre.dev.introducao}/>
                            <Description text={profile.sobre.dev.desenvolvimento}/>
                            <Description text={profile.sobre.dev.conclusao}/>
                        </WrapperBlur>
                    </Section>
                    <Section>
                        <WrapperBlur>
                            <Subtitle subtitle={profile.sobre.titulo}/>
                            <Description text={"Além da tecnologia, tenho um lado criativo e artístico que reflete nos meus interesses:"}/>
                            <div className="w-full space-y-4 px-4 py-3 text-sm">
                                {interestsEntries.map(([key, { titulo, conteudo }], index) => (
                                    <div
                                    key={key}
                                    className="border rounded-lg overflow-hidden border-secondaryDark"
                                    >
                                    <button
                                        className={`
                                        w-full flex justify-between items-center
                                        px-4 py-3 font-semibold transition-colors duration-300
                                        ${openIndex === index
                                            ? "bg-primary text-white"
                                            : "bg-white dark:bg-white text-secondaryDark"}
                                        `}
                                        onClick={() => toggle(index)}
                                    >
                                        <span>{titulo}</span>
                                        <FiChevronDown
                                        className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                                        size={20}
                                        />
                                    </button>

                                    {openIndex === index && (
                                        <div className="px-4 py-3 text-sm bg-white dark:bg-secondaryDark text-secondaryDark dark:text-white transition-all">
                                        {conteudo}
                                        </div>
                                    )}
                                    </div>
                                ))}
                                </div>

                        </WrapperBlur>
                        <div className="mb-10">
                            
                            <WrapperBlur >
                                <Subtitle subtitle={profile.sobre.motivacao.titulo}/>
                                <Description text={profile.sobre.motivacao.desenvolvimento}/>
                            </WrapperBlur>
                        </div>
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