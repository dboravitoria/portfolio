import Header from '../../Header/Header';
import Main from '../Main/Main';
import Footer from "../../Footer/Footer"

export default function Content(){
    return (
        <>
            <div className="relative py-10 selection:bg-intermediarie">
                <Header />
                <Main />
                <Footer />
            </div>

        </>
    );
}