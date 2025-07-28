import { Link } from "react-router-dom";

export default function Ancor({link, title, toggle, children}){

    return(
        <>
            <li className="hover:scale-110 list-none">
                <Link to={link} onClick={toggle} className="dark:text-white text-secondaryDark font-extrabold rounded-full p-2 font-primary italic hover:shadow-custom 
                hover:drop-shadow-custom hover:border-secondaryDark/15 dark:border-white border-secondaryDark/15 block mx-auto py-1 border-2 hover:bg-white/90 hover:transition-all hover:scale-105 dark:bg-white/10 bg-secondaryDark/10 backdrop-blur-md dark:hover:bg-white/90 dark:hover:text-secondaryDark dark:border-white/15 shadow-custom transition cursor-pointer">
                    {title}
                    {children}
                </Link>
            </li>
        </>
    );
}
