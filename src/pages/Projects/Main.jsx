// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Title from "./elements/Title";
import WrapperBlur from "./elements/WrapperBlur";
import CarrosselProjetos from "./elements/CarrosselProjects";

export default function Main(){
    return(
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                <Title title={"Projetos Desenvolvidos"}/>
                <section className=" mt-52 sm:-mt-20 md:mt-10 lg:mt-10 p-2 ">
                    <section className='row justify-content-center'>
                        <section className="col-10 text-center sm:mt-72 md:mt-48 mb-28">
                        <WrapperBlur>
                            <CarrosselProjetos categoria={"front"} />
                        </WrapperBlur>
                        </section>
                    </section>
                </section>
            </motion.div>
        </>
    )
}