import { Link } from "react-router-dom";

export default function Logo() {
    return (
           <Link to="/" className="
              text-secondaryDark dark:text-white
              font-nunito font-black italic
              md:text-4xl sm:text-3xl text-3xl">
            Débora.dev
           </Link>
    );
}
