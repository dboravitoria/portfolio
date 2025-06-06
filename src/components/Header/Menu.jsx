export default function Menu({children}){
    return(
        <>
            <ul className="
            flex flex-row items-center justify-between 
            sm:justify-center sm:*:text-md sm:mt-2 
            md:gap-4 md:*:text-2xl md:mr-12
            lg:gap-6 lg:*:text-2xl 
            xl:-mr-72
            ">
                {children}
            </ul>
        </>
    );
}