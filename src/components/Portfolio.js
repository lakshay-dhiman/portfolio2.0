import React, { useEffect} from 'react'
import '../style/Portfolio.scss'
import {gsap} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ProjectsList from './ProjectsList'

import project1 from '../assets/images/projects/project1.png'
import project2 from '../assets/images/projects/project2.png'
import project3 from '../assets/images/projects/project3.png'
import project4 from '../assets/images/projects/project4.png'
import project5 from '../assets/images/projects/project5.png'
import project6 from '../assets/images/projects/project6.png'
import project7 from '../assets/images/projects/project7.png'
import project8 from '../assets/images/projects/project8.png'
import project9 from '../assets/images/projects/project9.png'
import project10 from '../assets/images/projects/project10.png'



gsap.registerPlugin(ScrollTrigger)



const Portfolio = ()=>{
    const parallax = ()=>{
        if(document.querySelector('.work')){
            document.querySelector('.work').style.transform=`translateY(${window.scrollY*0.2}px)`
        }
    }

    useEffect(()=>{
        gsap.from(document.querySelector('#portfolio h1'),{
            scrollTrigger:{
                trigger:'.work',
                start: "top 40%", 
                // toggleActions: "restart none repeat none",
                // markers:true
            },
            duration:2,
            y:-50,
            opacity:0
        })
        gsap.from(document.querySelector('#portfolio p'),{
            scrollTrigger:{
                trigger:'.work',
                start: "top 40%",  
                // toggleActions: "restart none repeat none",
            },
            duration:2,
            y:-50,
            opacity:0
        })
        gsap.from(document.querySelectorAll('.project-wrapper'),{
            scrollTrigger:{
                trigger:'.work',
                start: "top 40%", 
                // toggleActions: "restart none repeat none",
            },
            duration:0.5,
            y:50,
            opacity:0,
            stagger:0.1
        })
        document.addEventListener('scroll',parallax)

        return() =>{
            document.removeEventListener('scroll',parallax)
        }

    })
    return(
        <div id="portfolio">
            <h1>MY PORTFOLIO</h1>
            <p>This is a library of the projects created by me, these include my personal projects as well as the projects I did for other companies and clients.
            <br/><br/>
            These projects are an important part of my carrier as they seriously tought me a bunch and made me ready to serve the industry
            <br/><br/>
            Just check them out, hope you like them.</p>
            <div className="work">
                WORK
            </div>

            <div className="projects-box">
                <ProjectsList src={project1} href='/project1'/>
                <ProjectsList src={project2} href='/project2'/>
                <ProjectsList src={project3} href='/project3'/>
                <ProjectsList src={project4} href='/project4'/>
                <ProjectsList src={project5} href='/project5'/>
                <ProjectsList src={project6} href='/project6'/>
                <ProjectsList src={project7} href='/project7'/>
                <ProjectsList src={project8} href='/project8'/>
                <ProjectsList src={project9} href='/project9'/>
                <ProjectsList src={project10} href='#' />

            </div>
        </div>
    )
}

export default Portfolio