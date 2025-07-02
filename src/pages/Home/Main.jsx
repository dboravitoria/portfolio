import FirstSection from './elements/FirstSection'
import SecondSection from './elements/SecondSection'
export default function Main(){
    return(

        <>
            <main className='block md:ml-28 '>
                <section className="
                    w-full px-4 mx-auto dark:text-white min-h-[calc(100vh-20rem)]
                    sm:flex sm:flex-col-reverse sm:items-center sm:justify-center sm:mb-40
                    md:grid md:grid-cols-2 md:items-end md:justify-center 
                    max-w-7xl">
                    <FirstSection />
                    <SecondSection />
                </section>
            </main>

        </>
    );
}
