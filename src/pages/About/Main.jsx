import { useContext, useState } from 'react'
import { FiChevronDown, RiComputerFill, IoIosColorPalette,BsStars } from "../../utils/icons"

import ProfileContext from "../../context/ProfileContext";
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Title from './elements/Title'
import WrapperBlur from './elements/WrapperBlur'
import Description from './elements/Description'
import Subtitle from './elements/Subtitle'
import CarrosselTecnologias from '../../components/CarrosselTecnologias';


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
        <section className=" mt-40 sm:-mt-20 md:mt-16 lg:mt-16 p-2 min-h-[200vh] ">
            <section className='row justify-content-center'>
                <section className="col-10 col-sm-10 col-md-5 text-center sm:mt-72 md:mt-48">
                  <WrapperBlur>
                    
                    <Subtitle subtitle={
                        <>
                        <RiComputerFill className="inline-block" /> {profile.sobre.dev.titulo}
                        </>}/>

                    <Description text={profile.sobre.dev.introducao}/>
                    <Description text={profile.sobre.dev.desenvolvimento}/>
                    <Description text={profile.sobre.dev.conclusao}/>
                  </WrapperBlur>
                </section>
                <section className="col-10 col-sm-10 col-md-5 text-center mt-20 md:mt-48">
                <WrapperBlur>
                    <Subtitle subtitle={
                        <>
                        <IoIosColorPalette className="inline-block mr-1"/> {profile.sobre.titulo}
                        </>}/>
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
                                <div className="px-4 py-3 text-sm font-bold bg-white dark:bg-secondaryDark text-secondaryDark  transition-all">{conteudo}</div>
                            )}
                            </div>
                        ))}
                    </div>
                </WrapperBlur>
                </section>
                <section className="col-10 col-sm-10 col-md-10 text-center">
                    <div className="mt-10">
                    <WrapperBlur >
                        <Subtitle subtitle={
                        <>
                        <BsStars className="inline-block"/> {profile.sobre.motivacao.titulo}
                        </>}/>
                        <Description text={profile.sobre.motivacao.desenvolvimento}/>
                    </WrapperBlur>
                </div>
                </section>
            </section>
            <section className="row justify-content-center">
            <Title title={"Minha Stack"} />

            <section className="container my-52 md:mt-80 row justify-content-center">
                <div className="col-7 col-md-4 mb-4">
                <WrapperBlur>
                    <CarrosselTecnologias categoria="front"/>
                </WrapperBlur>
                </div>

                <div className="col-7 col-md-4 mb-4">
                <WrapperBlur>
                    <CarrosselTecnologias categoria="back" />
                </WrapperBlur>
                </div>

                <div className="col-7 col-md-4 mb-4">
                <WrapperBlur>
                    <CarrosselTecnologias categoria="devops" />
                </WrapperBlur>
                </div>
            </section>
            </section>


        </section>     
        <Footer/>
    </>
  )
}
