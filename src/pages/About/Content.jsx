import Header from "../../components/Header/Header"
import Main from "./Main";
import Footer from "../../components/Footer/Footer"


export default function Content(){
    return(
        <>
            <div className="relative mb-8
             min-h-screen min-w-screen selection:bg-intermediarie
            ">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </>
    );
}