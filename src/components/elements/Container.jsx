export default function Container({children}){
    return(
        <>
            <div className="
            md:grid md:grid-cols-2 min-h-screen md:min-w-screen md:gap-12 md:align-middle md:justify-center md:mb-0
            sm:grid sm:grid-rows-3 sm:align-middle sm:justify-center sm:max-w-screen sm:-mb-28
            ">
                {children}
            </div>
        </>
    );
}