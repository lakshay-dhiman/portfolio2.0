import React from 'react'
import Hero from './Hero'
import CollapsableNav from './CollapsableNav'
import LocalhostSection from './LocalhostSection'
import Portfolio from './Portfolio'
import BinarySection from './BinarySection'
import Skills from './Skills'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'
import Footer from './Footer'
import Jocks from './Jocks'



const Home = ()=>{

    return(
            <div>
                <header>
                    <Hero/>
                </header>
                <nav>
                    <CollapsableNav/>
                </nav>
                <main>
                    <LocalhostSection/>
                    <Portfolio/>
                    <BinarySection/>
                    <Skills/>
                    <AboutMe/>
                    <Jocks/>
                    <ContactMe/>
                </main>
                <footer>
                    <Footer/> 
                </footer>
            </div>
    )
}

export default Home