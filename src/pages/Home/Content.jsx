import Header from '../../components/Header/Header';
import Main from '../Home/Main';
import Footer from "../../components/Footer/Footer"

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