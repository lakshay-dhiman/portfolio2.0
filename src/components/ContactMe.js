import React,{useEffect} from 'react'
import '../style/ContactMe.scss'
import {Call,Github,LinkedIn,Mail,Whatsapp} from '../assets/images/social_icons/SocialIcons'
import BeanGIF from '../assets/images/misc/BeanGIF'
import {gsap} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

const ContactMe = ()=>{

    useEffect(()=>{
        gsap.from(document.querySelector('.contact-me .subhead'),{
            scrollTrigger:{
                trigger:'.contact-me',
                start: "top 60%", 
                // toggleActions: "restart none restart none",
                marker:true
            },
            duration:1,
            y:-50,
            opacity:0
        })

        gsap.from(document.querySelector('.contact-me h1'),{
            scrollTrigger:{
                trigger:'.contact-me',
                start: "top 60%", 
                // toggleActions: "restart none restart none",
                marker:true
            },
            duration:1,
            y:-50,
            opacity:0
        })

        gsap.from(document.querySelectorAll('.contact-me .field'),{
            scrollTrigger:{
                trigger:'.contact-me',
                start: "top 50%", 
                // toggleActions: "restart none restart none",
                marker:true
            },
            duration:1,
            y:-50,
            opacity:0,
            stagger:0.1
        })

        gsap.from(document.querySelectorAll('.contact-me .social-link'),{
            scrollTrigger:{
                trigger:'.contact-me',
                start: "top 50%", 
                // toggleActions: "restart none restart none",
                marker:true
            },
            duration:1,
            y:-50,
            opacity:0,

        })


        gsap.from(document.querySelectorAll('.contact-me .gif'),{
            scrollTrigger:{
                trigger:'.contact-me',
                start: "top 50%", 
                // toggleActions: "restart none restart none",
                marker:true
            },
            duration:1,
            y:-50,
            opacity:0,
            stagger:0.1
        })
    })

    

    return(
        <div className='contact-me'>
            <div className='subhead'>LIKED WHAT I DO ?</div>
            <h1>CONTACT ME !!</h1>
            <div className="contact-wrapper">
                <div className="form-part">
                    <form action="">
                        <div className="field">
                                                      
                            <input type="text" name="name" id="name" placeholder='hidden'/>
                            <div className="background"></div> 
                            <label htmlFor="name">Name</label>
                            
                        </div>

                        <div className="field">
                            <input type="text" name="email" id="email" placeholder='hidden'/>
                            <div className="background"></div> 
                            <label htmlFor="email">Email</label>
                        </div>

                        <div className="field">
                            <input type="text" name="subject" id="subject" placeholder='hidden'/>
                            <div className="background"></div>
                            <label htmlFor="subject">Subject</label>
                        </div>

                        <div className="field">                            
                            <textarea name="message" id="message-email" cols="30" rows="10" placeholder='hidden'></textarea>
                            <div className="background"></div>
                            <label htmlFor="message-email">Message</label>
                        </div>    
                        <input type="submit" name='submit' value='SEND' className='submit'/>                
                    </form>
                </div>
                <div className="right-part">
                    <div className="social-links">
                        <a href="" className="social-link"><Github color='#16551E'/></a>
                        <a href="" className="social-link"><Whatsapp color='#16551E'/></a>
                        <a href="" className="social-link"><LinkedIn color='#16551E'/></a>
                        <a href="" className="social-link"><Mail color='#16551E'/></a>
                        <a href="" className="social-link"><Call color='#16551E'/></a>
                    </div>
                    <BeanGIF/>
                </div>
            </div>
        </div>
    )
} 

export default ContactMe