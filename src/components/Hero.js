import React,{useRef,useEffect} from 'react'
import {gsap}from 'gsap'

const Hero = ()=>{
    const content = useRef()
    const horizontalLine = useRef()
    const verticalLine = useRef()
    const hamburger = useRef()


    useEffect(()=>{
        let tl = gsap.timeline()
        tl.to(horizontalLine.current,{
            delay:0.5,
            width:'100%',
            duration:1
        })

        .to(verticalLine.current,{
            height:'100%',
            duration:1
        },"-=1")

        .to(content.current,{
            opacity : 1,
            delay:0.5,
            duration:0.5
        })

        .to(hamburger.current,{
            opacity : 1,
            duration:0.5
        },"-=0.2")
    },[])

    return(
        <header>
            <div className="hero">
                <div className="content" ref={content}>
                    <div className="white im">
                        I'm A
                    </div>
                    <div className="green heading-hero">
                        <h1>Web Developer..</h1>
                    </div>
                    <div className="white">
                        <button className='call-to-action'>
                            KNOW MORE !!
                        </button>
                    </div>
                </div>
                <div className="lines">
                    <div className="vertical-line" ref={verticalLine}></div>
                    <div className="horizontal-line" ref={horizontalLine}></div>
                </div>
                <div className="hamburger" ref={hamburger}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        </header>
    )
}

export default Hero