export default function Menu({children}){
    return(
        <>
            <ul className="
            flex flex-row items-center justify-between mr-12
            sm:gap-8 sm:*:text-lg 
            md:*:text-xl lg:*:text-2xl *:px-2
            ">
                {children}
            </ul>
        </>
    );
}