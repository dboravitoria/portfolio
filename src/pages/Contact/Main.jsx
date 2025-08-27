// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

import Label from "./elements/Label"
import Title from "./elements/Title"
import Input from "./elements/Input"
import Button from './elements/Button'
import WrapperBlur from "./elements/WrapperBlur"

export default function Main() {

  return (
    <>
    <Title title={"Vamos construir algo incrível juntos?"}/>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        
        <section className=" mt-52 sm:-mt-20 md:mt-10 lg:mt-10 p-2">
            <section className='row justify-content-center'>
                <section className="col-12 col-sm-10 col-md-5 text-center sm:mt-72 md:mt-48 mb-20">
                <WrapperBlur>
                    <h3 className='text-2xl text-secondaryDark dark:text-white/90 mb-2 font-primary'>🚨 Página com Formulário de Contato em Desenvolvimento ⛏</h3>
                    <p className=' text-secondaryDark dark:text-white/90 mb-2 font-secondary font-semibold'>Em breve, essa página terá um formulário de envio de e-mail para contato direto comigo! 😊</p>
                    <p className=' text-secondaryDark dark:text-white/90 mb-2 font-secondary font-semibold'>Estou evoluindo minhas habilidades de back-end para oferecer mais recursos e uma melhor experiência!</p>
                    <p className=' text-secondaryDark dark:text-white/90 mb-2 font-secondary font-semibold'>No momento, você pode entrar em contato comigo pelos links disponiblizados logo abaixo no rodapé da página. ⬇️</p>
                    <p className='text-xl text-secondaryDark dark:text-white/90 mb-2 font-secondary font-semibold'>Desde já agradeço pela sua visualização!</p>
                    {/* <form className="flex flex-col gap-2 text-left">
                        <div>
                            <Label title="Nome" />
                            <Input title="nome" type="text" placeholder="Digite seu nome..." />
                        </div>

                        <div>
                            <Label title="E-mail" />
                            <Input title="email" type="email" placeholder="Digite seu e-mail..." />
                        </div>

                        <div>
                            <Label title="Mensagem" />
                            <Input title="mensagem" type="textarea" placeholder="Olá Débora, gostaria de dizer..." />
                        </div>
                        <Button title={"Enviar"}/>
                    </form> */}
                </WrapperBlur>
                </section>
            </section>
        </section>
        </motion.div>
    </>
  )
}
