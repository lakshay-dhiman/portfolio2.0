import React, { useEffect } from 'react'
import '../style/Jocks.scss'
import {gsap} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Jocks = ()=>{
    useEffect(()=>{
        gsap.from(document.querySelectorAll('.jocks h1'),{
            scrollTrigger:{
                trigger:'.jocks .loud',
                start: "top 50%", 
                // toggleActions: "restart none restart none",
                // markers:true
            },
            duration:1,
            y:-50,
            opacity:0,
            stagger:0.1
        })

        gsap.from(document.querySelectorAll('.jocks p'),{
            scrollTrigger:{
                trigger:'.jocks .loud',
                start: "top 50%", 
                // toggleActions: "restart none restart none",
                // markers:true
            },
            duration:1,
            y:-50,
            opacity:0,
            stagger:0.1
        })

        gsap.from(document.querySelectorAll('.jocks .sorry'),{
            scrollTrigger:{
                trigger:'.jocks .loud',
                start: "top 50%", 
                // toggleActions: "restart none restart none",
                // markers:true
            },
            delay:2,
            duration:1,
            y:-50,
            opacity:0,
            stagger:0.1
        })

    })

    return(
        <div className="jocks">
            <h1>JUST FOR FUN</h1>
            <p>What does a developer do at the end of a big project?<br/><span>He gits committed.</span></p>
            <div className="loud">JOCKS</div>
            <div className="sorry">
                OKAY sorry 😅, please hire me
            </div>
        </div>
    )
}

export default Jocks