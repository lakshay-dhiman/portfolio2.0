import React,{useEffect, useState} from 'react'
import '../style/AboutMe.scss'
import personalImage from '../assets/images/misc/personalImage.png'
import {gsap} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

const AboutMe = ()=>{

    const [offsetY, setOffsetY] = useState(0)
    const handleScroll = () => {
        if(document.querySelector('.about-me .image')){
            setOffsetY(document.querySelector('.about-me .image').getBoundingClientRect().top)
        }
    }

        

    useEffect(()=>{
        
        gsap.from(document.querySelector('.about-me .text h1'),{
            scrollTrigger:{
                trigger:'.about-me',
                start: "top 80%", 
                // toggleActions: "restart none repeat none",
                marker:true
            },
            duration:2,
            y:-50,
            opacity:0
        })

        gsap.from(document.querySelector('.about-me .text p'),{
            scrollTrigger:{
                trigger:'.about-me',
                start: "top 80%", 
                // toggleActions: "restart none repeat none",
                // markers:true
            },
            duration:2,
            y:-50,
            opacity:0
        })
        const tl_image = gsap.timeline()
        tl_image.from(document.querySelector('.about-me .image'),{
            scrollTrigger:{
                trigger:'.about-me',
                start: "top 80%", 
                // toggleActions: "restart none repeat none",
                marker:true
            },
            duration:2,
            marginLeft:100,
            opacity:0
        })

        let callback = (entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    document.addEventListener('scroll',handleScroll)
                }
            });
        };

        let options = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0
        }

        let observer = new IntersectionObserver(callback, options);
        let target = document.querySelector('.about-me .image');
        observer.observe(target);

        return () =>{
            document.removeEventListener('scroll',handleScroll)
        }

    },[])

   
    
    // useEffect(() => {
    // //  
    //     return () => {
    //         document.removeEventListener('scroll',handleScroll)
    //     }
    // })


    

    return(
        <div className='about-me'>
            <h1>KNOW ME !!</h1>
            <div className="wrapper">
                <div className="text"> 
                    <p>
                        Hello, I am Lakshay Dhiman (sakujo), and a build awesome websites.
                        <br/><br/>
                        I belong to north India, and am fond of eating.   
                        <br/><br/>
                        I am striving to make internet a better fun place to be at, and thanks to the skills I have gained over past years, i feel myself capable of doing it.
                        <br/><br/>
                        I am fond of learning new things, especially when it comes to programming. As a programmer i believe in the concept of “learn to code, code to learn”.
                        <br/><br/>
                        I do believe in the fact that every problem is solvable with correct application and execution.
                    </p>
                </div> 
                <div className="image" style={{
                    transform:`translateY(${offsetY*0.2}px)`
                }}>
                    <img src={personalImage} alt="personal image"/>
                </div>
            </div>
       </div>
    )
}

export default AboutMe