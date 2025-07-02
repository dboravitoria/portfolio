export default function Section({children}){
    return(
        <>
            <section className=" dark:text-white text-center 
            sm:grid sm:grid-rows sm:align-middle sm:justify-center
            sm:px-10 sm:-mb-52
            md:mb-0
            md:flex-col">
                {children}
            </section>
        </>
    );
}