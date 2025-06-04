export default function Link({title, children}){
    return(
        <>
            <li className="
            hover:scale-110
            ">
                <a href="#"
                title={title}
                className="
                dark:text-white text-secondaryDark font-bold
                mx-2 px-4 py-2 font-primary rounded-full shadow-sm transition-opacity
                hover:backdrop-blur-sm hover:rounded-full
                hover:drop-shadow-custom hover:border
                hover:dark:bg-white/10 hover:dark:border-white/15
                hover:bg-secondaryDark/10 hover:border-secondaryDark/15
                "
                >
                    {children}
                </a>
            </li>
        </>
    );
}