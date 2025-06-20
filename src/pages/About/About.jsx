import Wrapper from "../../components/Wrapper/Wrapper";
import Content from "./Content";

export default function About(){
    return(
        <>
            <div className="flex flex-col min-h-screen min-w-screen overflow-hidden">
                <Wrapper/>
                <Content/>
            </div>
        </>
    );
}


