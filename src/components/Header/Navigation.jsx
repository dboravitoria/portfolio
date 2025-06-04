export default function Navigation({children}){
    return(
        <>
            <nav className="
            md:flex md:flex-row justify-around items-center mt-20 gap-4
            dark:text-white
            sm:gap-0 sm:flex-col
            ">
                {children}
            </nav>
        </>
    );
}