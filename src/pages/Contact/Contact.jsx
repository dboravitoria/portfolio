import Wrapper from "../../components/Wrapper/Wrapper";
import RevealOnScroll from "../../components/RevealOnScroll";
import Main from "./Main";

export default function Contact(){
    return(
        <>
            <div className="flex flex-col min-h-screen  selection:bg-intermediarie min-w-screen overflow-hidden">
                <RevealOnScroll>
                    <Wrapper/>
                    <Main/>
                </RevealOnScroll>
            </div>
        </>
    );
}


