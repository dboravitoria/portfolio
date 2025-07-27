export default function WrapperBlur({children}){
    return(
        <>
            <div className="
            flex flex-col justify-center shadow-lg drop-shadow-custom 
            min-w-full sm:max-h-fit
            rounded-md backdrop-blur-md 
            p-4
            dark:shadow-white/10 dark:bg-white/5
            shadow-secondaryDark bg-secondaryDark/10
            ">
                {children}
            </div>
        </>
    );
}

