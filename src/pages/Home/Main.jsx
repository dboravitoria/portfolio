import FirstSection from './elements/FirstSection'
import SecondSection from './elements/SecondSection'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export default function Main(){
    return(
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <main className="block md:ml-20">
                <section
                    className="
                    w-screen px-4 mx-auto dark:text-white min-h-[calc(100vh-23rem)]
                    mt-20 sm:mt-0 md:mt-20
                    flex flex-col-reverse md:flex-row
                    items-center justify-center
                    sm:mb-40 md:items-end max-w-6xl"
                >
                    {/* FirstSection - embaixo no mobile, esquerda no desktop */}
                    <div className="w-full md:w-1/2 mb-10 md:mb-0">
                    <FirstSection />
                    </div>
                    {/* SecondSection - em cima no mobile, direita no desktop */}
                    <div className="w-1/2">
                    <SecondSection />
                    </div>
                </section>
            </main>
        </motion.div>


    );
}
