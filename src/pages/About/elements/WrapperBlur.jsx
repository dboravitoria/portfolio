export default function WrapperBlur({children}){
    return(
        <>
            <div className="
            flex flex-col justify-center shadow-lg drop-shadow-custom 
            min-w-full sm:max-h-fit
            rounded-md backdrop-blur-md 
            sm:mt-72 sm:max-w-[50%] sm:px-8 sm:py-4 sm:-mb-60
            md:w-[45vw] md:-mb-64
            md:max-h-[90vh]
            dark:shadow-white/10 dark:bg-white/5
            shadow-secondaryDark bg-secondaryDark/10
            ">
                {children}
            </div>
        </>
    );
}

