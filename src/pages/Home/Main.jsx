import FirstSection from './elements/FirstSection'
import SecondSection from './elements/SecondSection'

export default function Main(){
    return(
        <main className="block md:ml-28">
            <section
                className="
                w-screen px-4 mx-auto dark:text-white min-h-[calc(100vh-20rem)]
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


    );
}
