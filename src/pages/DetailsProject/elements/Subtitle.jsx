export default function Subtitle({title}){
    return(
        <>
            <p className="font-primary font-bold text-secondaryDark dark:text-white/90 text-xl md:text-2xl lg:text-3xl">
                {title}
            </p>
        </>
    )
}