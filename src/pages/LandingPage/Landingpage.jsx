import Home from '../Home/Home'
import Footer from '../../components/Footer/Footer'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'

export default function LadingPage(){
    return(
        <>
            <div className="bg-red-700">
                <Home/>
                <About/>
                <Projects/>
                <Contact/>
                <Footer/>
            </div>
        </>
    )
}