import { useContext } from "react";
import ProfileContext from "../../../context/ProfileContext";
export default function Titulo(){
    const profile = useContext(ProfileContext)
    return(
        <>
            <h1 className="
            font-bold text-3xl font-primary text-start
            sm:text-4xl md:text-5xl lg:text-6xl mb-2
            text-secondaryDark dark:text-white
            " >{profile.bio.titulo}</h1>
        </>
    );
}