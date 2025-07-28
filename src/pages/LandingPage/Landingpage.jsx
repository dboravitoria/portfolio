import Home from '../Home/Home'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'
import ScrollToTop from '../../components/ScrollToTop'

export default function LadingPage(){

    return(
        <>
            <div>
                <Home/>
                <ScrollToTop/>
                <About/>
                <Projects/>
                <Contact/>
            </div>
        </>
    )
}