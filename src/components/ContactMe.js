import React,{useEffect} from 'react'
import '../style/ContactMe.scss'
import {Call,Github,LinkedIn,Mail,Whatsapp} from '../assets/images/social_icons/SocialIcons'
import BeanGIF from '../assets/images/misc/BeanGIF'
import {gsap} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import $ from 'jquery'


gsap.registerPlugin(ScrollTrigger)

const ContactMe = ()=>{
    useEffect(()=>{
        gsap.from(document.querySelector('#contact-me .subhead'),{
            scrollTrigger:{
                trigger:'#contact-me',
                start: "top 60%", 
                // toggleActions: "restart none restart none",
                marker:true
            },
            duration:1,
            y:-50,
            opacity:0
        })

        gsap.from(document.querySelector('#contact-me h1'),{
            scrollTrigger:{
                trigger:'#contact-me',
                start: "top 60%", 
                // toggleActions: "restart none restart none",
                marker:true
            },
            duration:1,
            y:-50,
            opacity:0
        })

        gsap.from(document.querySelectorAll('#contact-me .field,input[type="submit"]'),{
            scrollTrigger:{
                trigger:'#contact-me',
                start: "top 50%", 
                // toggleActions: "restart none restart none",
                marker:true
            },
            duration:1,
            y:-50,
            opacity:0,
            stagger:0.1
        })

        gsap.from(document.querySelectorAll('#contact-me .social-link'),{
            scrollTrigger:{
                trigger:'#contact-me',
                start: "top 50%", 
                // toggleActions: "restart none restart none",
                marker:true
            },
            duration:1,
            y:-50,
            opacity:0,

        })


        gsap.from(document.querySelectorAll('#contact-me .gif'),{
            scrollTrigger:{
                trigger:'#contact-me',
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

    const validate = (e)=>{
        e.preventDefault()

        function empty_fields() {
            $("#email").val("");
            $("#name").val("");
            $("#subject").val("");
            $("#message-email").val("");
        }

        const emailRegex = new RegExp(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );

        const nameRegex = new RegExp(/^[a-zA-Z ]{2,30}$/);
        let no_error = true;
          //email validation
        if ($("#email").val() == "") {
            $('.error[data-for = "email"]').html("this field cannot be empty");
            $("#email").css("border", "1px #670C0C solid");
            no_error = false;
        } else if (!emailRegex.test($("#email").val())) {
            $('.error[data-for = "email"]').html("Please enter a valid email address");
            $("#email").css("border", "1px #670C0C solid");
            no_error = false;
        } else {
            $('.error[data-for = "email"]').html("");
            $("#email").css("border", "none");
        }

          //name validation
        if ($("#name").val() == "") {
            $('.error[data-for = "name"]').html("this field cannot be empty");
            $("#name").css("border", "1px #670C0C solid");
            no_error = false;
        } else if (!nameRegex.test($("#name").val())) {
            $('.error[data-for = "name"]').html(
            "name can only have alphabetical characters"
            );
            $("#name").css("border", "1px #670C0C solid");
            no_error = false;
        } else {
            $('.error[data-for = "name"]').html("");
            $("#name").css("border", "none");
        }

        //subject validation
        if ($("#subject").val() == "") {
            $('.error[data-for = "subject"]').html("this field cannot be empty");
            $("#subject").css("border", "1px #670C0C solid");
            no_error = false;
        } else {
            $('.error[data-for = "subject"]').html("");
            $("#subject").css("border", "none");
        }

        //message validation
        if ($("#message-email").val() == "") {
            $('.error[data-for = "message"]').html("this field cannot be empty");
            $("#message-email").css("border", "1px #670C0C solid");
            no_error = false;
        } else {
            $('.error[data-for = "message"]').html("");
            $("#message-email").css("border", "none");
        }



    }

    

    return(
        <div id='contact-me'>
            <div className='subhead'>LIKED WHAT I DO ?</div>
            <h1>CONTACT ME !!</h1>
            <div className="contact-wrapper">
                <div className="form-part">
                    <form action="">
                        <div className="field">
                                                      
                            <input type="text" name="name" id="name" placeholder='hidden'/>
                            <div className="background"></div> 
                            <label htmlFor="name">Name</label>
                            
                        </div><div className="error" data-for='name'></div>

                        <div className="field">
                            <input type="text" name="email" id="email" placeholder='hidden'/>
                            <div className="background"></div> 
                            <label htmlFor="email">Email</label>
                            
                        </div><div className="error" data-for='email'></div>

                        <div className="field">
                            <input type="text" name="subject" id="subject" placeholder='hidden'/>
                            <div className="background"></div>
                            <label htmlFor="subject">Subject</label>
                            
                        </div><div className="error" data-for='subject'></div>

                        <div className="field">                            
                            <textarea name="message" id="message-email" cols="30" rows="10" placeholder='hidden'></textarea>
                            <div className="background"></div>
                            <label htmlFor="message-email">Message</label>
                            
                        </div><div className="error" data-for='message'></div>    
                        <input type="submit" name='submit' value='SEND' className='submit' onClick={(e)=>validate(e)}/>                
                    </form>
                </div>
                <div className="right-part">
                    <div className="social-links">
                        <a href="https://github.com/lakshay-dhiman" target = '_blank'  rel="noreferrer" className="social-link"><Github color='#16551E'/></a>
                        <a href="https://api.whatsapp.com/send?phone=+919518630902&text=Hi%20there%20!!" target = '_blank'  rel="noreferrer"  className="social-link"><Whatsapp color='#16551E'/></a>
                        <a href="https://www.linkedin.com/in/lakshay-dhiman-6b337917a/" target = '_blank'  rel="noreferrer"  className="social-link"><LinkedIn color='#16551E'/></a>
                        <a href="mailto:sakujo1208@gmail.com" target = '_blank'  rel="noreferrer"  className="social-link"><Mail color='#16551E'/></a>
                        <a href="tel:9518630902" target = '_blank'  rel="noreferrer" className="social-link"><Call color='#16551E'/></a>
                    </div>
                    <BeanGIF/>
                </div>
            </div>
        </div>
    )
} 

export default ContactMe