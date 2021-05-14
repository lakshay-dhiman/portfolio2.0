import React,{useRef,useEffect, useState} from 'react'
import {gsap}from 'gsap'
import Typewriter from 'typewriter-effect'
import '../style/Hero.scss'
import Logo from './Logo'
import Widget from './Widget'
import ContactHero from './ContactHero'
import HeroBackground from './HeroBackground'
import $ from 'jquery'

const Hero = ()=>{
    const content = useRef()
    const hamburger = useRef()
    let logoTop , logoLeft;



    useEffect(()=>{    
        
        const changeVal = ()=>{
            if($(document).width() > 850){
                logoTop = '50px';
                logoLeft = '100px'
            }
            else{
                logoTop = '0px';
                logoLeft = '80px'
            }

            if($(document).width() > 850){

            }
        }

        window.addEventListener('resize',changeVal())

        let tl_entry = gsap.timeline()

        //entry animation
        tl_entry
        // .to(document.querySelectorAll('.lines .line'),{
        //     height:'120vw',
        //     duration:5
        // })
        .from(document.querySelectorAll('.logo'),{
            opacity:0,
            duration:1,
            scale:0
            // scale:5,
            // top: '50%',
            // left: '50%'
        })
        .to(document.querySelectorAll('.logo'),{
            delay:0.5,
            duration:2,
            scale:1,
            top: logoTop,
            left: logoLeft
        })  

        .from(document.querySelectorAll('.hero-content'),{
            opacity:0,
            y:-50,
            stagger:0.4
        })
        .from(document.querySelectorAll('.hamburger .line'),{
            x:50,
            opacity:0,
            duration:0.5,
            stagger : 0.2
        })

        .from(document.querySelector('.widget'),{
            opacity:0,
            y:-100,
            duration:1
        },"-=1")
        .from(document.querySelectorAll('#hero .social-link'),{
            opacity:0,
            y:-50,
            duration:1,
            stagger:0.2
        },"-=2")
        .from(document.querySelectorAll('.hero-background'),{
            opacity:0,
            duration:1,
        })

        // gsap.to(document.querySelector('.hero'),{
        //     scrollTrigger:{
        //         trigger:'.localhost-section',
        //         start: '-100px 120%',
        //         end:"+=500px",
        //         markers:true,
        //         scrub:1
        //     },
        //     opacity:0
        // })

    },[])
    const [toDo, setToDo] = useState('show')
    const [className, setClassName] = useState('hamburger')
    const [collapsed, setCollapsed] = useState(true)



    const animate_cross = ()=>{
        let tl_cross = gsap.timeline()
        tl_cross.set(document.querySelector('.hamburger .line:last-child'),{
            display: 'none'
        })
        .to(document.querySelector('.hamburger .line:nth-child(1)'),{
            rotation : '45deg',
            duration:0.5
        })
        .to(document.querySelector('.hamburger .line:nth-child(2)'),{
            'transform' : 'rotate(-45deg) translate(8px,-9px)',
            duration:0.5
        },"-=0.5")
        .to(document.querySelector('.hamburger .line:nth-child(1)'),{
            rotation : '400deg',
            duration:0.5
        })
        .to(document.querySelector('.hamburger .line:nth-child(2)'),{
            rotation : '-400deg',
            duration:0.5
        },"-=0.5")
    }

    const back_to_hamburger = ()=>{
        let tl_ham = gsap.timeline()
        tl_ham
        .to(document.querySelector('.hamburger .line:nth-child(1)'),{
            rotation : '0deg',
            duration:0.5
        })
        .to(document.querySelector('.hamburger .line:nth-child(2)'),{
            'transform' : 'rotate(0deg) translate(0px,0px)',
            duration:0.5
        },"-=0.5")
        .set(document.querySelector('.hamburger .line:last-child'),{
            display: 'block'
        })
    }

        const ShowNav = ()=>{
                let tl_nav = gsap.timeline()
                tl_nav
                .add(()=>{
                    document.querySelector('.nav-wrapper').classList.add('visible')
                })
                .to(document.querySelector('.collapsable-nav'),{
                    clipPath : 'circle(430px at 100vw 0px)',
                    ease: 'SlowMo'
                })
                setCollapsed(false)
                animate_cross()
                setToDo('hide')
                // console.log('show');   
        
        }   

        const hideNav = ()=>{
                let tl_hide_nav = gsap.timeline()
                tl_hide_nav.to(document.querySelector('.collapsable-nav'),{
                    clipPath : 'circle(0px at 100vw 0px)',
                    duration:0.5
                })
                .add(()=>{
                    document.querySelector('.nav-wrapper').classList.remove('visible')
                })
                // document.querySelector('.nav-wrapper').classList.remove('visible')
                back_to_hamburger()
                setCollapsed(true)
                // console.log('hide');  
                setToDo('show')

        } 

    const scrollPortfolio = ()=>{
        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top
        }, 0);
    }

    const action = (toDo)=>{
        if(toDo=='show'){
            ShowNav()
        }
        else if(toDo=='hide'){
            hideNav()
        }
        else{
            // console.log('else');
        }
    }

    return(
        <div>
            {/* <MouseParticles g={0} color="green" cull="col,image-wrapper"/> */}

            <HeroBackground/>
            <div className='hamburger' onClick={()=>action(toDo)} ref={hamburger}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>  
            <div id="hero">
                <Logo/>
                <Widget/>
                <ContactHero/>
                <div className="content" ref={content}>
                    <div className="white im hero-content">
                        I'm A
                        <div className="animate-hero"></div>
                    </div>
                    <div className="green heading-hero hero-content">
                        <h1>
                            <Typewriter
                            options={{
                                autoStart:false,
                                loop: true,
                            }}
                                onInit={(typewriter)=>{
                                    typewriter
                                    .pauseFor(2000)
                                    .typeString('Web Developer..')
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .pauseFor(1000)
                                    .typeString('UI/UX Developer..')
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .pauseFor(1000)
                                    .typeString('Full Stack Developer..')
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .start()
                                }}
                            />
                        </h1>
                        <div className="animate-hero"></div>
                    </div>
                    <div className="white hero-content">
                        <button className='call-to-action' onClick={scrollPortfolio}>
                            KNOW MORE !!
                        </button>
                        <div className="animate-hero"></div>
                    </div>
                </div>
          
            </div>

        </div>
    )
}

export default Hero