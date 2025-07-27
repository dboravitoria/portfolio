import Wrapper from "../../components/Wrapper/Wrapper";
import Main from "./Main";

export default function About(){
    return(
        <>
            <div className="flex flex-col min-h-screen  selection:bg-intermediarie min-w-screen overflow-hidden">
                <Wrapper/>
                <Main/>
            </div>
        </>
    );
}



