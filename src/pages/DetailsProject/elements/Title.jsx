export default function Title({title}){
    
    return(
        <>
            <h1 className="absolute text-center min-w-full
            dark:text-white text-secondaryDark          
            font-bold text-3xl font-primary
            sm:mt-48 md:mt-24 -mt-20
            sm:text-3xl md:text-4xl lg:text-5xl">
                {title}
            </h1>
        </>
    );
 }