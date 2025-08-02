export default function WrapperBlur({children}){

    return(
        <>
            <div className=" text-secondaryDark dark:text-white dark:bg-white/10 bg-secondaryDark/10 
            backdrop-blur-md  p-2 rounded-full border-2 dark:border-white/15 border-secondaryDark/15
            shadow-custom transition dark:hover:bg-white/90 dark:hover:text-secondaryDark hover:bg-white/90
            hover:drop-shadow-custom hover:scale-105 cursor-pointer">
                {children}
            </div>
        </>
    );
}