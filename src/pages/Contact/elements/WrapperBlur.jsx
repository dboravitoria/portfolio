export default function WrapperBlur({children}){
    return(
        <>
            <div className="
            flex flex-col justify-center shadow-custom drop-shadow-custom 
            min-w-full sm:max-h-fit
            rounded-md backdrop-blur-md 
            p-4 border-2 border-secondaryDark/10
            dark:bg-white/5 bg-secondaryDark/10">
                {children}
            </div>
        </>
    );
}

