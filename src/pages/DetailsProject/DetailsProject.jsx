import Wrapper from "../../components/Wrapper/Wrapper";
import RevealOnScroll from "../../components/RevealOnScroll";
import Main from '../DetailsProject/Main'

export default function DetailsProject(){
    return(
        <>
            <div className="flex flex-col min-h-screen min-w-screen overflow-hidden relative selection:bg-intermediarie">
                <RevealOnScroll>
                    <Wrapper/>
                    <Main/>
                </RevealOnScroll>
            </div>
        </>
    );
}
