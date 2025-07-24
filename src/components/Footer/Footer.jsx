import Paragrafo from './Paragrafo'
import WrapperBlur from './WrapperBlur';
import Icone from './Icone';
import { FaGithub, FaLinkedin, FaInstagramSquare, FaMapMarkerAlt, FaPhoneSquareAlt   } from "react-icons/fa";
import { BsEnvelopeAtFill } from "react-icons/bs";

export default function Footer(){

    const iconeStyle = 'sm:w-6 sm:h-6 md:w-8 md:h-8'
    return(
        <>
            <footer className=" 
             text-white w-screen border-t p-4 dark:border-white/15 border-secondaryDark/15 
            dark:bg-white/15 bg-secondaryDark/15
             flex flex-col justify-end fixed bottom-0 items-center sm:mt-14
             ">
               <div className='flex gap-4 text-xl '>
                   <WrapperBlur>
                        <Icone link="https://github.com/dboravitoria">
                            <FaGithub className={iconeStyle} title={'Github'} />
                        </Icone>
                   </WrapperBlur>
                   <WrapperBlur>
                        <Icone link="https://www.linkedin.com/in/deboravsilva/">
                            <FaLinkedin className={iconeStyle} title={'Linkedin'}/>
                        </Icone>
                   </WrapperBlur>
                   <WrapperBlur>
                        <Icone link="mailto:dboravitoriasilva16@gmail.com?subject=Olá Débora!&body=Escreva sua mensagem aqui...">
                            <BsEnvelopeAtFill className={iconeStyle} title={'E-mail'}/>
                        </Icone>
                   </WrapperBlur>
                   <WrapperBlur>
                        <Icone link="https://www.instagram.com/deboravitoria_silva?igsh=Y3o2dzMxd2M1MGFz ">
                            <FaInstagramSquare className={iconeStyle} title={'Instagram'}/>
                        </Icone>
                   </WrapperBlur>
                   <WrapperBlur>
                        <Icone link="tel:+5511930178082">
                            <FaPhoneSquareAlt className={iconeStyle} title={'Telefone'}/>
                        </Icone>
                   </WrapperBlur>
                   <WrapperBlur>
                        <Icone link="https://maps.app.goo.gl/TsQVX1uQVbHgttbM7">
                            <FaMapMarkerAlt className={iconeStyle} title={'Localização'}/>
                        </Icone>
                   </WrapperBlur>
                   
               </div>
               <Paragrafo/>
            </footer>
        </>
    );
}