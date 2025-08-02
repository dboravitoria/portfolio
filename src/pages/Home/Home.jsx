import Wrapper from "../../components/Wrapper/Wrapper"
import RevealOnScroll from "../../components/RevealOnScroll";
import Content from "../Home/Content"

export default function Home(){
    return(
        <>
            <div className="flex flex-col min-h-screen min-w-screen overflow-hidden">
                <RevealOnScroll>
                    <Wrapper/>
                    <Content/>
                </RevealOnScroll>
            </div>
        </>
    );
}
