export default function Title(prop){
    return(
        <>
            <h1 className="absolute text-center min-w-full
            dark:text-white text-secondaryDark          
            font-bold text-3xl font-primary
            sm:mt-32 md:mt-44
            sm:text-4xl md:text-5xl lg:text-6xl 
            ">{prop.title}</h1>
        </>
    );
 }