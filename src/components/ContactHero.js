import React,{useState} from 'react'
import {Call,Github,LinkedIn,Mail,Whatsapp} from '../assets/images/social_icons/SocialIcons'

const ContactHero = ()=>{
    const [whatsapp, setWhatsap] = useState('#959595')
    const [phone, setPhone] = useState('#959595')
    const [github, setGithub] = useState('#959595')
    const [mail, setMail] = useState('#959595')
    const [linkedIn, setLinkedIn] = useState('#959595')

    const changeWhatsap = ()=>{
        setWhatsap('#00770F')
    }

    const changePhone = ()=>{
        setPhone('#00770F')
    }

    const changeGithub = ()=>{
        setGithub('#00770F')
    }

    const changeLinkedIn = ()=>{
        setLinkedIn('#00770F')
    }

    const changeMail = ()=>{
        setMail('#00770F')
    }



    const backWhatsap = ()=>{
        setWhatsap('#959595')
    }

    const backPhone = ()=>{
        setPhone('#959595')
    }

    const backGithub = ()=>{
        setGithub('#959595')
    }

    const backLinkedIn = ()=>{
        setLinkedIn('#959595')
    }

    const backMail = ()=>{
        setMail('#959595')
    }
    return(
        <div className="social-links">
                <a href="https://github.com/lakshay-dhiman" target = '_blank'  rel="noreferrer" className="social-link" onMouseEnter={changeGithub} onMouseLeave={backGithub} ><Github color={github} /></a>
                <a href="https://api.whatsapp.com/send?phone=+919518630902&text=Hi%20there%20!!" className="social-link" target = '_blank'  rel="noreferrer" onMouseEnter={changeWhatsap} onMouseLeave={backWhatsap} ><Whatsapp color={whatsapp} /></a>
                <a href="https://www.linkedin.com/in/lakshay-dhiman-6b337917a/" className="social-link" target = '_blank'  rel="noreferrer" onMouseEnter={changeLinkedIn} onMouseLeave={backLinkedIn} ><LinkedIn color={linkedIn} /></a>
                <a href="mailto:sakujo1208@gmail.com" className="social-link" target = '_blank'  rel="noreferrer" onMouseEnter={changeMail} onMouseLeave={backMail} ><Mail color={mail} /></a>
                <a href="tel:9518630902" className="social-link" target = '_blank'  rel="noreferrer" onMouseEnter={changePhone} onMouseLeave={backPhone}  ><Call color={phone} /></a>
        </div>
    )
}

export default ContactHero