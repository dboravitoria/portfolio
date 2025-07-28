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
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <Title title={"Vamos construir algo incrível juntos?"}/>
        <section className=" mt-52 sm:-mt-20 md:mt-10 lg:mt-10 p-2">
            <section className='row justify-content-center'>
                <section className="col-10 col-sm-10 col-md-5 text-center sm:mt-72 md:mt-48 mb-20">
                <WrapperBlur>
                    <form className="flex flex-col gap-2 text-left">
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
                    </form>
                </WrapperBlur>
                </section>
            </section>
        </section>
        </motion.div>
    </>
  )
}
