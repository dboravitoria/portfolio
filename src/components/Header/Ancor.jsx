import { Link } from "react-router-dom";
export default function Ancor({link,title, toggle,children}){
    return(
        <>
            <li className="
            hover:scale-110 list-none
            ">
                <Link to={link}
                onClick={toggle}
                className="
                dark:text-white text-secondaryDark font-extrabold
                rounded-full p-2 font-primary italic
                hover:drop-shadow-custom hover:border
                hover:dark:bg-white/10 hover:dark:border-white/15
                hover:bg-secondaryDark/10 hover:border-secondaryDark/15">
                    {title}
                    {children}
                </Link>
            </li>
        </>
    );
}
