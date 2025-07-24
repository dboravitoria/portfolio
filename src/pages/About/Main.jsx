import { useContext, useState } from 'react'
import { FiChevronDown } from "react-icons/fi"
import ProfileContext from "../../context/ProfileContext";
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Title from './elements/Title'
import WrapperBlur from './elements/WrapperBlur'
import Description from './elements/Description'
import Subtitle from './elements/Subtitle'


export default function Main() {
    const profile = useContext(ProfileContext)
    const [openIndex, setOpenIndex] = useState(null)

    const toggle = (index) => {
    setOpenIndex(prev => (prev === index ? null : index))
    }

    const interestsEntries = Object.entries(profile.sobre.interesses)
    .filter(([key]) => key !== "introducao")

  return (
    <>
        <Header/>
        <Title title={"Quem sou eu?"}/>
        <section className="row justify-content-center gap-4 g-2 min-h-[300vh]">
            <section className=" col-5 dark:text-white text-center">
              <WrapperBlur className="py-5">
                <Subtitle subtitle={profile.sobre.dev.titulo}/>
                <Description text={profile.sobre.dev.introducao}/>
                <Description text={profile.sobre.dev.desenvolvimento}/>
                <Description text={profile.sobre.dev.conclusao}/>
              </WrapperBlur>
            </section>

           <section className='col-5'>
            <WrapperBlur>
                <Subtitle subtitle={profile.sobre.titulo}/>
                <Description text={"Além da tecnologia, tenho um lado criativo e artístico que reflete nos meus interesses:"}/>
                <div className="w-full space-y-4 px-4 py-3 text-sm">
                    {interestsEntries.map(([key, { titulo, conteudo }], index) => (
                        <div key={key} className="border rounded-lg overflow-hidden border-secondaryDark">
                        <button className={`w-full flex justify-between items-center text-secondaryDark px-4 py-3 font-semibold transition-colors duration-300
                            ${openIndex === index ? "bg-secondaryLight text-secondaryDark dark:bg-primaryDark dark:text-white"
                                : "bg-white dark:bg-white text-secondaryDark"}
                            `} onClick={() => toggle(index)}>
                            <span>{titulo}</span>
                            <FiChevronDown className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} size={20} />
                        </button>
                        {openIndex === index && (
                            <div className="px-4 py-3 text-sm bg-white dark:bg-secondaryDark text-secondaryDark  transition-all">{conteudo}</div>
                        )}
                        </div>
                    ))}
                </div>
            </WrapperBlur>
            <div className=""> 
                <WrapperBlur >
                    <Subtitle subtitle={profile.sobre.motivacao.titulo}/>
                    <Description text={profile.sobre.motivacao.desenvolvimento}/>
                </WrapperBlur>
            </div>
           </section>
           <section className='-mt-96'>
            <Title title={"Minha Stack"}/>
                <WrapperBlur >
                    <Subtitle subtitle={profile.sobre.motivacao.titulo}/>
                    <Description text={profile.sobre.motivacao.desenvolvimento}/>
                </WrapperBlur>
            
           </section>
        </section>
        <Footer/>
    </>
  )
}
