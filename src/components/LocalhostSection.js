import React,{useEffect,useRef} from 'react'
import '../style/LocalhostSection.scss'
import Quote from '../assets/images/misc/quote.svg'
import {gsap} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

const LocalhostSection = ()=>{

    const parallax = ()=>{
        if(document.querySelector('.hashtag')){
        document.querySelector('.hashtag').style.transform=`translateY(${window.scrollY*0.25}px)`
        }
    }

    const hashtag = useRef()
    useEffect(()=>{
        gsap.from(hashtag.current,{
            scrollTrigger:{
                trigger:hashtag.current,
                start: "20% 80%", 
                // toggleActions: "restart none repeat none",
            },
            duration:2,
            'margin-top':'250px',
            // opacity:0,
            
        })

        document.addEventListener('scroll',parallax)

        return() =>{
            document.removeEventListener('scroll',parallax)
            console.log('removed');
        }
            
        
    })
    return(
        <div className="localhost-section">
            <div className='hashtag' ref={hashtag}>
                #LocalhostFeelsLikeHome
            </div>

            <div className="quote">
            <div className="quotation">
                <img src={Quote} alt="quote"/>
            </div>
            <p>
                not gonna lie, <br/>there’s no place like <br/><span>127.0.0.1</span>
            </p>
            </div>
        </div>
    )
}

export default LocalhostSection