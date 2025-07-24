export default function Title(prop){
    return(
        <>
            <h1 className="absolute text-center min-w-full
            dark:text-white text-secondaryDark          
            font-bold text-3xl font-primary
            sm:mt-32 md:mt-44 mt-24
            sm:text-3xl md:text-4xl lg:text-5xl 
            ">{prop.title}</h1>
        </>
    );
 }