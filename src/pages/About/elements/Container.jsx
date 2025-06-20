export default function Container({children}){
    return(
        <>
            <div className="
            md:grid-cols-2 md:grid-rows-2 md:min-h-screen md:mb-0
            sm:grid sm:grid-rows-3 sm:align-middle sm:justify-center sm:max-w-screen sm:-mb-28
            ">
                {children}
            </div>
        </>
    );
}