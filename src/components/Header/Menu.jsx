export default function Menu({children}){
    return(
        <>
            <ul className="
            flex flex-row items-center justify-between 
            sm:justify-evenly sm:*:text-md sm:mt-2
            md:gap-8 md:*:text-2xl md:mr-12
            lg:gap-10 lg:*:text-2xl
            ">
                {children}
            </ul>
        </>
    );
}