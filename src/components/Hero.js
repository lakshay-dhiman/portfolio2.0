import React,{useRef,useEffect, useState} from 'react'
import {gsap}from 'gsap'
import Typewriter from 'typewriter-effect'
import '../style/Hero.scss'

const Hero = ()=>{
    const content = useRef()
    const horizontalLine = useRef()
    const verticalLine = useRef()
    const hamburger = useRef()

    useEffect(()=>{
        let tl_entry = gsap.timeline()
        tl_entry.to(horizontalLine.current,{
            delay:0.5,
            width:'100%',
            duration:1
        })

        .to(verticalLine.current,{
            height:'100%',
            duration:1
        },"-=1")

        // .to(document.querySelectorAll('.animate-hero'),{
        //     height:0,
        //     delay:0.5,
        //     duration:0.9,
        //     stagger:0.2
        // })

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
        },"-=0.2")


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
                    clipPath : 'circle(75% at calc(110vw) 0px)'
                })
                // document.querySelector('.nav-wrapper').classList.add('visible')
                setCollapsed(false)
                animate_cross()
                setToDo('hide')
                console.log('show');   
        
        }   

        const hideNav = ()=>{
                let tl_hide_nav = gsap.timeline()
                tl_hide_nav.to(document.querySelector('.collapsable-nav'),{
                    clipPath : 'circle(0% at calc(110vw) -0px)',
                    duration:0.5
                })
                .add(()=>{
                    document.querySelector('.nav-wrapper').classList.remove('visible')
                })
                // document.querySelector('.nav-wrapper').classList.remove('visible')
                back_to_hamburger()
                setCollapsed(true)
                console.log('hide');  
                setToDo('show')

        } 
    
        // document.querySelector('.hamburger').addEventListener('click',()=>{
        //     console.log(collapsed);
        //     if(collapsed){
        //         ShowNav()
        //     }
        //     // else{
        //     //     hideNav()
        //     // }
        // })

    const action = (toDo)=>{
        if(toDo=='show'){
            ShowNav()
        }
        else if(toDo=='hide'){
            hideNav()
        }
        else{
            console.log('else');
        }
    }


    return(
        <header>
            <div className="hero">
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
                        <button className='call-to-action'>
                            KNOW MORE !!
                        </button>
                        <div className="animate-hero"></div>
                    </div>
                </div>
                <div className="lines">
                    <div className="vertical-line" ref={verticalLine}></div>
                    <div className="horizontal-line" ref={horizontalLine}></div>
                </div>
                <div className='hamburger' onClick={()=>action(toDo)} ref={hamburger}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        </header>
    )
}

export default Hero