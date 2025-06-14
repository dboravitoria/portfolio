import { Link } from "react-router-dom";

export default function Logo() {
    return (
            <div className="
                flex justify-center items-center
                md:justify-start md:-ml-20
                xl:-ml-[20%]
                w-full md:w-auto
            ">
                <Link to="/">
                    <a href="#" className="
                        text-secondaryDark dark:text-white
                        font-nunito font-black uppercase italic
                        lg:text-6xl md:text-5xl sm:text-4xl text-4xl
                    ">
                        .Débora
                    </a>
                </Link>
            </div>
    );
}
