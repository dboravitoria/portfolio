
import { useContext } from "react";
import ProfileContext from "../../../context/ProfileContext";
export default function Description(){
    const profile = useContext(ProfileContext)
    return(
        <>
            <p className="
            max-w-[100%] font-secondary text-start
            text-secondaryDark dark:text-white
            sm:text-md md:text-lg lg:text-xl 
            font-medium
            ">
                {profile.bio.descricao}
            </p>
        </>
    );
}