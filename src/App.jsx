// src/App.jsx
import ProfileProvider from './context/ProfileProvider'
import AppRoutes from "./router";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <ProfileProvider>
            <Header/>
            <AppRoutes />
            <Footer/>
        </ProfileProvider>
    
)
}

export default App;
