import Home from '../Home/Home'
import ScrollToTop from '../../components/ScrollToTop'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'

export default function LadingPage(){
    return(
        <>
            <div className="bg-red-700">
                <Home/>
                <ScrollToTop/>
                <About/>
                <Projects/>
                <Contact/>
            </div>
        </>
    )
}