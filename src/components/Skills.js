import React,{useEffect} from 'react'
import '../style/Skills.scss'
import SkillsImage from '../assets/images/misc/skills.png'
import {gsap} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin('ScrollTrigger')

const Skills = ()=>{
    useEffect(()=>{
        gsap.from(document.querySelector('.skills h1'),{
            scrollTrigger:{
                trigger:'.skills',
                start:'top 70%',
                // toggleActions: "restart none repeat none",
            },
            y:-50,
            opacity:0,
            duration:1
        })  
        gsap.from(document.querySelector('.skills p'),{
            scrollTrigger:{
                trigger:'.skills',
                start:'top 70%',
                // toggleActions: "restart none repeat none",
            },
            y:-50,
            opacity:0,
            duration:1
        })  
        
        gsap.from(document.querySelector('.skills-graphics'),{
            scrollTrigger:{
                trigger:'.skills',
                start:'top 70%',
                // toggleActions: "restart none repeat none",
            },
            x:-100,
            opacity:0,
            duration:1
        })


    })
    return(
        <div className='skills'>
            <div className='skills-graphics'>
                <img src={SkillsImage} alt="skills"/>
            </div>
            <div className='textskills'>
                <h1>MY SKILLS ?</h1> 
                <p>I have been working on my  skills from more that 2 years, and have served many companies and clients using them.
                    I am a self learer and the following skills I learned overtime by sources available on the internet
                    <br/><br/>
                    I know and confidently made amazing projects in the folllowing technologies :-
                    <ol>
                        <li>FrontEnd
                            <ul>
                                <li>Html</li>
                                <li>Css</li>
                                <li>JavaScript</li>
                                <li>sass</li>
                                <li>react</li>
                            </ul>
                        </li>
                        <li>BackEnd
                            <ul>
                                <li>php</li>
                                <li>mysql</li>
                                <li>django</li>
                                <li>API</li>
                            </ul>
                        </li>
                        <li>Designing 
                            <ul>
                                <li>Webdesign</li>
                                <li>Figma</li>
                                <li>AdobeXd</li>
                                <li>responsive design</li>
                            </ul>
                        </li>
                    </ol>
                </p>   
            </div>

        </div>
    )
}

export default Skills