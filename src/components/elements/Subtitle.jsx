export default function Subtitle(prop){
    return(
        <>
            <h2 className="font-bold font-primary text-start
            dark:text-white dark:border-white
            text-secondaryDark border-secondaryDark
            text-primary tracking-wide min-w-fit relative
            pt-8 pb-4
            sm:text-xl md:text-2xl lg:text-3xl">{prop.subtitle}</h2>
        </>
    );
}