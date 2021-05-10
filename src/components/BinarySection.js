import React,{useEffect} from 'react'
import OnesAndZeros from './OneAndZeros'
import '../style/BinarySection.scss'
import {gsap} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import binary_img from '../assets/images/misc/oneAndZeros.png'
import binary_img_max from '../assets/images/misc/oneAndZerosMax.png'


gsap.registerPlugin('ScrollTrigger')

const BinarySection = ()=>{

    const parallax = ()=>{
        if(document.querySelector('.binary-section .quote')){
            document.querySelector('.binary-section .quote').style.transform=`translateY(${window.scrollY*0.1}px)`
        }
    }
    useEffect(() => {
        document.addEventListener('scroll',parallax)

        const tl = gsap.timeline()

        // tl.from(document.querySelector('.binary-section .quote'),{
        //     scrollTrigger:{
        //         trigger:'.binary-section .quote',
        //         start:'top 90%',
        //     },
        //     // y:-50,
        //     opacity:0,
        //     duration:4
        // })
        // tl
        // gsap.to(document.querySelector('.binary-section .quote'),{
        //     scrollTrigger:{
        //         trigger:'.binary-section .quote',
        //         start:'bottom 100px',
        //         end:"bottom 10px",
        //         toggleActions: "restart none reverse none",
        //         // markers:true
        //     },
        //     opacity:0,
        //     duration:1
        // })

        return()=>{
            document.removeEventListener('scroll',parallax)
        }
        

    }, [])

    return(
        <div className='binary-section'>
            <div className="picture">
                <img src={binary_img} alt=""/>
            </div>
            <div className="pictureMax">
                <img src={binary_img_max} alt=""/>
            </div>
            <div className="background">
                <OnesAndZeros/>

            </div>
            <div className="quote">
                <h1>one and zeros,<br/>count to infinity...</h1>
            </div>
        </div>
    )
}

export default BinarySection