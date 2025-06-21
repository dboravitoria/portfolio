import Wrapper from "../../components/Wrapper/Wrapper"
import Content from "../Home/Content"

function Home(){
    return(
        <>
            <div className="flex flex-col min-h-screen min-w-screen overflow-hidden">
                <Wrapper/>
                <Content/>
            </div>
        </>
    );
}
export default Home;
