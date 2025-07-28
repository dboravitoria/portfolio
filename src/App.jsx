import AppRoutes from "./router";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProfileProvider from './context/ProfileProvider'

export default function App() {

    return (
        <ProfileProvider>
            <Header/>
            <AppRoutes />
            <Footer/>
        </ProfileProvider>
    )
}
