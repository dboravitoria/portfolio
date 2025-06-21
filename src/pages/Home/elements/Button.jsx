export default function Button({link, nameButton, title, children}){
    return(
        <>
            <a href={link} 
            nameButton={nameButton} 
            target="_blank" 
            title={title}
            className="
            text-secondaryDark dark:text-white
            dark:bg-white/10 bg-secondaryDark/10
            backdrop-blur-md  py-2 px-4 rounded-full border 
            dark:border-white/15 border-secondaryDark/15
            shadow-sm transition 
            dark:hover:bg-white/15 hover:bg-secondaryDark/15
            hover:drop-shadow-custom
            hover:scale-105 cursor-pointer
            sm:text-sm md:text-md lg:text-lg
            hover:ring-1 dark:hover:ring-primaryDark hover:ring-primaryLight
            ">
                {children}
            </a>
        </>
    );
}