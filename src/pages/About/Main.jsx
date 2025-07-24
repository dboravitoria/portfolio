import { useContext,useState } from "react"
import Container from "./elements/Container";
import Section from "./elements/Section"
import Title from "./elements/Title"
import WrapperBlur from "./elements/WrapperBlur";
import Subtitle from "./elements/Subtitle";
import Description from "./elements/Description";
import { FiChevronDown } from "react-icons/fi"
import ProfileContext from "../../context/ProfileContext";

export default function Main(){
    const profile = useContext(ProfileContext)
    const [openIndex, setOpenIndex] = useState(null)

    const toggle = (index) => {
    setOpenIndex(prev => (prev === index ? null : index))
    }

    const interestsEntries = Object.entries(profile.sobre.interesses)
    .filter(([key]) => key !== "introducao")

    
    return(
        <>
                    
                    
                    
                       
        </>
    );
}