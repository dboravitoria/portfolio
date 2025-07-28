export default function Button({link, nameButton, target,title, children}){
    return(
        <>
            <a href={link} 
            nameButton={nameButton} 
            target={target} 
            title={title}
            className="
            text-secondaryDark dark:text-white

            dark:bg-white/10 bg-secondaryDark/10

            backdrop-blur-md  p-2 rounded-full border-2
            dark:border-white/15 border-secondaryDark/15
            shadow-custom transition 
            hover:bg-white dark:hover:bg-white dark:hover:text-secondaryDark
            hover:drop-shadow-custom dark:hover:border-2 dark:hover:border-secondaryDark/20
            hover:scale-105 cursor-pointer
            sm:text-sm md:text-md lg:text-lg
            ">
                {children}
            </a>
        </>
    );
}