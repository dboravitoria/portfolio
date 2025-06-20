export default function Subtitulo(props){
    return(
        <>
            <h2 className="
            font-bold font-primary text-start
            dark:text-white dark:border-white
            text-secondaryDark border-secondaryDark
            text-primary tracking-wide overflow-hidden 
            whitespace-nowrap border-r-2 
            animate-typing
            sm:w-[25ch]
            sm:text-xl md:text-2xl lg:text-3xl
            ">
                {props.subtitulo}
            </h2>
        </>
    );
}
