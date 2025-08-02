import Home from '../Home/Home'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'
import ScrollToTop from '../../components/ScrollToTop'
import RevealOnScroll from '../../components/RevealOnScroll'

export default function LadingPage(){

    return(
        <>
                
                <RevealOnScroll>
                    <Home/>    
                </RevealOnScroll>
                <RevealOnScroll>
                    <ScrollToTop/>
                    <About/>
                </RevealOnScroll>
                <RevealOnScroll>
                    <Projects/>
                </RevealOnScroll>
                    
                <RevealOnScroll>
                    <Contact/>
                </RevealOnScroll>
                
        </>
    )
}