// src/App.jsx
import ProfileProvider from './context/ProfileProvider'
import AppRoutes from "./router";

function App() {
    return (
        <ProfileProvider>
            <AppRoutes />
        </ProfileProvider>
    
)
}

export default App;
