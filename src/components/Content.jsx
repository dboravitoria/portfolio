import Wrapper from "./Wrapper/Wrapper";
import Header from "./Header/Header";
import Footer from "./Footer/Footer"

export default function Content(){
    return (
        <>
            <div className="relative py-10 selection:bg-intermediarie">
                <Wrapper/>
                <Header/>
                <Footer/>
            </div>
        </>
    );
}