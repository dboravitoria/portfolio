export default function Subtitle({subtitle}){
    
    return(
        <>
            <h2 className="font-bold font-primary text-start
            dark:text-white dark:border-white
            text-secondaryDark border-secondaryDark
            tracking-wide min-w-fit relative
            pt-8 pb-4 text-xl
            sm:text-xl md:text-2xl lg:text-3xl">
                {subtitle}
            </h2>
        </>
    );
}