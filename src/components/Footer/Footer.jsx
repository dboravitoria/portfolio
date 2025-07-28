import Paragrafo from './Paragrafo'
import WrapperBlur from './WrapperBlur';
import Icone from './Icone';
import { FaGithub, FaLinkedin, FaInstagramSquare, FaMapMarkerAlt, FaPhoneSquareAlt   } from "react-icons/fa";
import { BsEnvelopeAtFill } from "react-icons/bs";

export default function Footer(){

    const iconeStyle = 'w-6 h-6'
    return(
        <>
            <footer className=" 
               border-t p-2 border-secondaryDark/15 
         drop-shadow-custom backdrop-blur-md shadow-custom 
        text-secondaryDark dark:text-white 
         w-full  py-2 z-50
         dark:border-white/15 
        transition 
        dark:bg-white/15 bg-secondaryDark/15
             flex flex-col justify-end fixed bottom-0 items-center sm:mt-14
             ">
               <div className='flex gap-2 lg:gap-4 text-xl '>
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