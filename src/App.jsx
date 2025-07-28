// src/App.jsx
import ProfileProvider from './context/ProfileProvider'
import AppRoutes from "./router";
import Header from './components/Header/Header';


function App() {
    return (
        <ProfileProvider>
            <Header/>
            <AppRoutes />
            
        </ProfileProvider>
    
)
}

export default App;
